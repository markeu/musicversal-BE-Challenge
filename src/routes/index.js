import { Router } from "express";

import { CONFIG, URL } from "../config/constants";
import { downloadSchema, compilationSchema } from "../validations";
import { validationMiddleware } from "../middlewares/joi-validation";
import {
  getTrackAudio,
  getSampleAudio,
  createCompilation,
  downloadCompilation,
} from "../controllers";

const router = Router();

router.get(CONFIG.TRACK.SERVE_URL, getTrackAudio);
router.get(CONFIG.SAMPLE.SERVE_URL, getSampleAudio);
router.post(
  URL.SAVE,
  validationMiddleware(compilationSchema),
  createCompilation
);
router.get(
  URL.DOWNLOAD,
  validationMiddleware(downloadSchema),
  downloadCompilation
);

export default router;
