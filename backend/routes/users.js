// Routes are used to organize and modularize your code.
// (breaking something big into smaller parts; which makes it easier to understand)

import express from 'express';
import { BlogModel } from '../models/Blog.js';
const router = express.Router();
import upload from '../upload.js' // Multer configurationx   

router.post('/', upload.single("file"), (req, res) => {

    // request all the info from the body 
    console.log('Saving to MongoDB...');
    console.log(req.body)

    // Save the blog to the database
    new BlogModel({
        title: req.body.title,
        description: req.body.description,
        file: req.file ? `/uploads/${req.file.filename}` : null, //uploaded file gets saved in MongoDB as file path 
        preview_title: req.body.preview_title
    }).save()
        .then(() => res.status(200).send("Blog saved successfully"))
        .catch(err => {
            console.error("Error saving blog:", err);
            res.status(500).json({ error: "Error saving blog" });
        });
});


// API route to fetch blogs
router.get('/', (req, res) => {
    BlogModel.find()
        .then((blogs) => {
            res.json(blogs); // Return blogs as JSON
        })
        .catch((err) => res.status(500).json({ err: err.message }))
})

// fetch blog by ID - `Edit_blog.jsx`/`Delete_blog.jsx`
router.get('/:id', async (req, res) => {
    const blog = await BlogModel.findById(req.params.id);
    res.json(blog);
});

// Update blog by ID 
router.put('/:id', upload.single("file"), async (req, res) => {
    console.log('Updating blog in MongoDB...');
    console.log(req.body);

    try {
        const existingBlog = await BlogModel.findById(req.params.id);
        
        if (existingBlog) {
            // Update the existing blog
            existingBlog.title = req.body.title;
            existingBlog.description = req.body.description;
            existingBlog.file = req.file ? `/uploads/${req.file.filename}` : existingBlog.file; // Keep existing file if no new file

            await existingBlog.save(); // Save updated blog
            res.status(200).send("Blog updated successfully");
        } else {
            res.status(404).send("Blog not found");
        }
    } catch (err) {
        console.error("Error updating blog:", err);
        res.status(500).json({ error: "Error updating blog" });
    }
});

// Delete blog by ID 
router.delete('/:id', async (req,res)=>{
     await BlogModel.findByIdAndDelete(req.params.id);
     res.status(200)
     console.log('The blog with this id will be deleted ', req.params.id)
})


export default router;