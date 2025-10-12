import { models, model, Schema } from 'mongoose';

export const dailyAvgSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  temp: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const dailyAvg = models.dailyAvg || model('DailyAvg', dailyAvgSchema);
