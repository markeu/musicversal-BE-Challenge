import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { promisify } from "util";
import ffmpeg from "fluent-ffmpeg";
import * as mm from "music-metadata";

import {
  PORT,
  API_URL,
  CONFIG,
  SILENCE_FILE,
  FEATURE_NAME
} from "../config/constants";

const readdir = promisify(fs.readdir);
const getName = (fullName)=> fullName.split(".")[0];
const getAccurateDuration = (length, duration) => length > duration ? duration : length;

const getMetaData = ( soundFiles, folder, target ) =>
    Promise.all(
      soundFiles
        .map(async (filename) => {
          const filePath = path.join(folder, filename);
          const outputData = {
            id: nanoid(),
            name: getName(filename),
            path: `${API_URL}:${PORT}${CONFIG[target].SERVE_URL}/${filename}`,
          };
          try {
            const {
              format: { duration },
            } = await mm.parseFile(filePath);
            return {
              ...outputData,
              duration: duration ? Math.round(duration) : 0,
            };
          } catch (error) {
            return { ...outputData, duration: 0 };
          }
        })
);

const metaData = (folder) => {
        return Promise.all(
          folder.map(async (filename) => {
          const filePath = path.join(CONFIG[FEATURE_NAME.SAMPLE].FOLDER, filename);
          try {
            const {
              format: { duration },
            } = await mm.parseFile(filePath);
      
            return {
              name: filename,
              duration: duration ? Math.round(duration) : 0,
            };
            
          } catch (error) {
            return { duration: 0, name: '' };
          }
        }));
}

export const scanFolder = async (target) => {
    const targetFolder = path.resolve(`./${CONFIG[target].FOLDER}`);    
    return await getMetaData(await readdir(targetFolder), targetFolder, target);
};

export const prepareMergeData = async(parts, length) => {
    const mp3CompilationArray = [];
    const targetFolder = path.resolve(CONFIG[FEATURE_NAME.SAMPLE].FOLDER);  
    const sampleMetaData = await metaData(await readdir(targetFolder));
  
      parts.forEach(({name, duration}) => {  
        const sampleDataMap = sampleMetaData.find(
          (item) => getName(item.name).toLowerCase() === name.toLowerCase());
        
        if (!sampleDataMap && length > 0) {
          mp3CompilationArray.push({
            name: path.join(CONFIG[FEATURE_NAME.SAMPLE].FOLDER, SILENCE_FILE),  
            duration: getAccurateDuration(length, duration)
          })
          length -= duration
        }
  
        if (sampleDataMap && sampleDataMap.duration >= duration && length > 0) {
          mp3CompilationArray .push({
            name: path.join(CONFIG[FEATURE_NAME.SAMPLE].FOLDER,`${name}.mp3`), 
            duration: getAccurateDuration(length, duration)
          })
          length -= duration
        }
        else if (sampleDataMap && sampleDataMap.duration < duration) {
          
          mp3CompilationArray .push({
            name: path.join(CONFIG[FEATURE_NAME.SAMPLE].FOLDER, `${name}.mp3`), 
            duration: getAccurateDuration(length, sampleDataMap.duration)
          });
          length -= sampleDataMap.duration
  
          if (length > 0) {
            mp3CompilationArray .push({
              name: path.join(CONFIG[FEATURE_NAME.SAMPLE].FOLDER, SILENCE_FILE), 
              duration: getAccurateDuration(length, duration - sampleDataMap.duration)
            })
            length -= duration - sampleDataMap.duration
          }
        }
      });
     
      return mp3CompilationArray ;
}

export const mergeTrack = (compilationArray, newName) => {
    return new Promise((resolve, reject) => {
      compilationArray
      .reduce((prev, curr) => prev.input(curr.name)
      .inputOption(`-t ${curr.duration}`), ffmpeg())
      .on("error", err => reject(err.name))
      .on("end", () => {
          resolve('Compilation Successful');
      })
      .mergeToFile(CONFIG[FEATURE_NAME.TRACK].FOLDER + `/${newName}.mp3`, {end: true});
    });
};

export const downloadAudioFile = (title) => {
  return CONFIG[FEATURE_NAME.TRACK].FOLDER + `/${title}.mp3`
};
