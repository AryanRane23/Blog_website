// react-hook-form wala maal daalneka
import '../styles/Post_blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'; // ... Edit icon
import { faUpload } from '@fortawesome/free-solid-svg-icons' // Upload image icon
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Post_blog = () => {
  const navigate = useNavigate();
  const { register,handleSubmit,watch, formState: { errors, isSubmitting } } = useForm(); 
  
  //Watch for changes to the file input
  const file = watch('file');

  const onSubmit = async (data)=>{
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]); // Access file using data.file  

  let r = await fetch("http://localhost:8080/",
    {
      method: 'POST', 
      body: formData
      // headers: {'Content-Type': "application/json" },
      // body: JSON.stringify(data) 
    }
  )
  let result = await r.text()
  console.log(data, result);
}

  return (
    <div>
      <div className="container" >
        <div className="logoName text-3xl font-semibold relative top-3 ml-4 font-serif">Blogger</div>
        <form action="" onSubmit={handleSubmit(onSubmit)} >
 {/* ***** */}
          {/* Title Field */}
          <textarea
            placeholder="Title"
            className="title font-serif text-5xl placeholder-opacity-50 placeholder-gray-500 text-black outline-none resize-none overflow-hidden mb-4 "
            {...register('title', {
              required: { value: true, message: "A title is required. Please add one." },
            })}
            // rows="1"
            // onKeyDown={(e) => {
            //   // Prevent form submission on enter
            //   if (e.key === 'Enter') {
            //     e.preventDefault();
            //   }
            // }}
            // onInput={(e) => {
            //  Adjust height dynamically based on the content
            //   e.target.style.height = 'auto';
            //   e.target.style.height = `${e.target.scrollHeight}px`;
            // }}
          ></textarea>
          {errors.title && (
            <div className="title-error text-red-600 mt-2">{errors.title.message}</div>
          )}

          {/* Description Field */}
          <textarea
            placeholder="Tell your story..."
            className="desc font-serif text-2xl placeholder-opacity-50 placeholder-gray-500 text-black outline-none resize-none overflow-hidden"
            {...register('description', {
              required: { message: "Please write a description for your blog post." },
            })}
            rows="3"
            onInput={(e) => {
              // Adjust height dynamically based on the content
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          ></textarea>
          {errors.description && (
            <div className="desc-error text-red-600 mt-2">{errors.description.message}</div>
          )}


          {/* File upload */} {/* Hidden File Input */}
          <input type="file"
          id='addImage'
          accept='image/*'
          style={{display: "none"}}  
          {...register('file')} />

          {/* File upload button - Custom Lable */}
          <label htmlFor="addImage" className='uploadImg'style={{cursor: 'pointer'}} >
            <FontAwesomeIcon icon={faUpload} className='mr-1'/>
            <span>{file && file[0] ? file[0].name : "Upload Image"}</span>
            {/* <p>Upload Image</p> */}
          </label>

          {/* Submit Button */}
          <input
            disabled={ isSubmitting }
            type="submit"  
            value="Publish"
            className="publish-btn px-2 text-s bg-orange-500 text-white rounded-xl hover:bg-orange-600 cursor-pointer"
            onClick={()=> {navigate('/')}}
          />

          {/* Dropdown Button */}
          <button className="dropdown cursor-pointer ml-4">
            <FontAwesomeIcon icon={faEllipsis} size="lg" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post_blog