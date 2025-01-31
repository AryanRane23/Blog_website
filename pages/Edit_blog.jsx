import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
// import '../styles/Post_blog.css';

const Edit_blog = () => {
  const { blogId } = useParams();  // Get the blog ID from the URL params
  const navigate = useNavigate();

  const { register,
          handleSubmit,
          watch,
          setValue, // setValue - to prefill data
          formState: { errors, isSubmitting } } = useForm();

  //Watch for changes to the file input
  const file = watch('file');

  // to display the prefilled blog data in Edit-page
  useEffect(()=>{
    fetch(`http://localhost:8080/${blogId}`)
      .then((response)=> response.json() )
      .then((data)=>{
        setValue("title", data.title);
        setValue("description", data.description);
        // setValue("file", data.file); //
      })
  },[blogId, setValue]);  // why did we add [blogId, setValue] ?

  // appending/ putting the edited-blog in form // We append the data to formData Object which is then sent to the server as the body
  const onSubmit = async(data) => {
    const formData = new FormData();
    formData. append("title", data.title);
    formData. append("description", data.description);
    if (data.file && data.file[0]) { //
      formData.append("file", data.file[0]); 
    }
  
  const response = await fetch(`http://localhost:8080/${blogId}`,
    {
      method: 'PUT',
      body: formData,   
    }
  );
  if (response.ok) {
    console.log("Blog updated successfully");
    navigate("/"); // Redirect to the Home page after successful update
} else {
    console.error("Failed to update blog");
}

}
  return (
    <div>
      <div className="container">
        <div className="logoName text-3xl font-semibold relative top-3 ml-4 font-serif">Blogger</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title Field */}
          <textarea
            placeholder="Title"
            className="title font-serif text-5xl placeholder-opacity-50 placeholder-gray-500 text-black outline-none resize-none overflow-hidden mb-4"
            {...register('title', { required: "A title is required." })}
          ></textarea>
          {errors.title && (
            <div className="title-error text-red-600 mt-2">{errors.title.message}</div>
          )}

          {/* Description Field */}
          <textarea
            placeholder="Tell your story..."
            className="desc font-serif text-2xl placeholder-opacity-50 placeholder-gray-500 text-black outline-none resize-none overflow-hidden"
            {...register('description', { required: "Please add a description." })}
            rows="3"
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          ></textarea>
          {errors.description && (
            <div className="desc-error text-red-600 mt-2">{errors.description.message}</div>
          )}

          {/* File Upload */}
          <input
            type="file"
            id="editImage"
            accept="image/*"
            style={{ display: "none" }}
            {...register('file')}
          />
          <label htmlFor="editImage" className="uploadImg" style={{ cursor: 'pointer' }}>
            <span>{file && file[0] ? file[0].name : "Upload Image"}</span>
          </label>

          {/* Submit Button */}
          <input
            disabled={isSubmitting}
            type="submit"
            value="Update"
            className="publish-btn px-2 text-s bg-orange-500 text-white rounded-xl hover:bg-orange-600 cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}

export default Edit_blog
