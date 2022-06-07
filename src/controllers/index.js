import { FEATURE_NAME } from "../config/constants";
import {
  scanFolder,
  prepareMergeData,
  mergeTrack,
  downloadAudioFile,
} from "../services";

export const getTrackAudio = async (req, res, next) => {
  try {
    const tracks = await scanFolder(FEATURE_NAME.TRACK);

    res.json(tracks);
  } catch (error) {
    next(error);
  }
};

export const getSampleAudio = async (req, res, next) => {
  try {
    const samples = await scanFolder(FEATURE_NAME.SAMPLE);

    res.json(samples);
  } catch (error) {
    next(error);
  }
};

export const createCompilation = async (req, res, next) => {
  const { name, length, parts } = req.body;
  const mergeInputData = await prepareMergeData(parts, length);

  try {
    const newTrackName = await mergeTrack(mergeInputData, name);

    res.json(newTrackName);
  } catch (error) {
    next(error);
  }
};

export const downloadCompilation = async (req, res, next) => {
  try {
    const { title } = req.query;
    const file = downloadAudioFile(title);

    res.download(file);
  } catch (error) {
    next(error);
  }
};
