import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    requiredPaths: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
