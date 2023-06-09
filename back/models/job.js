const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  business: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Business",
  },
  client: {
    type: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  jobImage: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pre quoted", "pending", "in progress", "completed", "cancelled"],
  },
  clientReview: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
  jobQuote: {
    type: Object,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
