import express from 'express';
import SoundCtrl from '../controllers/sound-ctrl';

const router = express.Router();

router.post('/sound', SoundCtrl.createSound);
router.put('/sound/:id', SoundCtrl.updateSound);
router.delete('/sound/:id', SoundCtrl.deleteSound);
router.get('/sound/:id', SoundCtrl.getSoundById);
router.get('/sounds', SoundCtrl.getSounds);

module.exports = router;
