import Sound from '../models/sound-model';

const createSound = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a sound',
    });
  }

  const sound = new Sound(body);
  if (!sound) {
    return res.status(400).json({ success: false, error: err });
  }

  sound
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: sound._id,
        message: 'Sound created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Sound not created!',
      });
    });
};

const updateSound = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  Sound.findOne({ _id: req.params.id }, (err, sound) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Sound not found!',
      });
    }
    sound.name = body.name;
    sound.downloads = body.downloads;
    sound.likes = body.likes;
    sound.audio = body.audio;
    sound.type = body.type;
    sound
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: sound._id,
          message: 'Sound updated!',
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: 'Sound not updated!',
        });
      });
  });
};

const deleteSound = async (req, res) => {
  await Sound.findOneAndDelete({ _id: req.params.id }, (err, sound) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!sound) {
      return res.status(404).json({
        success: false,
        error: 'Sound not found',
      });
    }

    return res.status(200).json({ success: true, data: sound });
  }).catch((err) => console.log(err));
};

const getSoundById = async (req, res) => {
  await Sound.findOne({ _id: req.params.id }, (err, sound) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!sound) {
      return res.status(404).json({
        success: false,
        message: 'Sound not found!',
      });
    }

    return res.status(200).json({ success: true, data: sound });
  }).catch((err) => console.log(err));
};

const getSounds = async (req, res) => {
  await Sound.find({}, (err, sounds) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!sounds.length) {
      return res.status(404).json({ success: false, error: 'No sounds found' });
    }

    return res.status(200).json({ success: true, data: sounds });
  }).catch((err) => console.log(err));
};

module.exports = {
  createSound,
  updateSound,
  deleteSound,
  getSoundById,
  getSounds,
};
