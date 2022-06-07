import { FEATURE_NAME } from "../config/constants";
import { scanFolder, prepareMergeData, mergeTrack, downloadAudioFile } from '../services';


export const getTrackAudio = async (req, res) => {
    const tracks = await scanFolder(
        FEATURE_NAME.TRACK
      );
    
      res.json(tracks);
};

export const getSampleAudio = async (req, res) => {
    const samples = await scanFolder(
        FEATURE_NAME.SAMPLE
      );
    
      res.json(samples);
};

export const createCompilation = async(req, res) => {
    const { name, length, parts } = req.body;
    const mergeInputData = await prepareMergeData(parts, length);

    try {
      const newTrackName = await mergeTrack(
        mergeInputData,
        name
      );
  
      res.json(newTrackName);
    } catch (err) {
      res.sendStatus(500);
    }
}

export const downloadCompilation = async(req, res) => {
    const { title } = req.query;
    const file = downloadAudioFile(title);
    res.download(file); 
}

