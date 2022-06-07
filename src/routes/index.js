import { Router } from 'express';

import { CONFIG, URL } from "../config/constants";
import { getTrackAudio, getSampleAudio, createCompilation, downloadCompilation } from '../controllers';

const router = Router();

router.post(URL.SAVE, createCompilation);
router.get(CONFIG.TRACK.SERVE_URL, getTrackAudio);
router.get(CONFIG.SAMPLE.SERVE_URL, getSampleAudio);
router.get('/download', downloadCompilation);

export default router;