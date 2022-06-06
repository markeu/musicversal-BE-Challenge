import { FEATURE_NAME } from "../config/constants";
import { scanFolder, prepareMergeData, mergeTrack } from '../services';


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