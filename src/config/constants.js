
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
  DEFAULT: '/v1.0/api'
};

export const EXIST_STATUS = {
  FAILURE: 1,
  SUCCESS: 0,
};

export const EXIT_SIGNAL = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
export const CONFIG = {
  [FEATURE_NAME.SAMPLE]: {
    SERVE_URL: "/audios",
    FOLDER: `${DATA_FOLDER}audios`,
  },
  [FEATURE_NAME.TRACK]: {
    SERVE_URL: "/tracks",
    FOLDER: `${DATA_FOLDER}tracks`,
  },
};
