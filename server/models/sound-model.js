import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Sound = new Schema(
  {
    name: { type: String, required: true },
    downloads: { type: Number, required: true },
    likes: { type: Number, required: true },
    audio: { type: Buffer, required: true },
    creator_id: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('sounds', Sound);
