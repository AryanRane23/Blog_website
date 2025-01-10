// jo "register function" mai naam diya hai, put that in the Schema (i.e. title...)

import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title:{type: String },
    description:{type: String },
    file: {type: String},
    preview_title: {type: String}
})

export const BlogModel = mongoose.model('blog', BlogSchema);