
export const FEATURE_NAME = {
  TRACK : "TRACK",
  SAMPLE : "SAMPLE",
}

export const DATA_FOLDER = "data/";

export const PORT = 3001;
export const API_URL = "http://localhost";
export const SILENCE_FILE = "Silence.mp3";

export const URL = {
  SAVE: "/save-track",
};

export const EXIST_STATUS = {
  FAILURE: 1,
  SUCCESS: 0,
};

export const EXIT_SIGNAL = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
export const CONFIG = {
  [FEATURE_NAME.SAMPLE]: {
    FETCH_URL: "/audio-list",
    SERVE_URL: "/audio",
    FOLDER: `${DATA_FOLDER}audios`,
  },
  [FEATURE_NAME.TRACK]: {
    FETCH_URL: "/track-list",
    SERVE_URL: "/tracks",
    FOLDER: `${DATA_FOLDER}tracks`,
  },
};
