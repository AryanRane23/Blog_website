import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import '../styles/Preview_blog.css'

const Preview_blog = () => {

  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("preview_title", data.preview_title);  // Use previewTitle from props

    let r = await fetch("http://localhost:8080/", { method: 'POST', body: formData })
    let result = await r.text()
    console.log(data, result);
  }

  const [blogs, setBlogs] = useState([]) // State to store fetched blogs
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
     // Fetch blogs from the backend API
     fetch('http://localhost:8080/')
      .then((response)=> response.json())
      .then((data)=> {
        setBlogs(data); // Set blogs data
        setLoading(false); // Stop loading
      });
  }, []);   // Empty dependency array ensures this runs once on mount
 
  if(loading) return <p> Loading.. </p>;     // Show loading state

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="Story-Preview text-2xl  " >Story Preview</div>

       {/* Display only the latest blog */}
       {/* <div>
        {blogs.length > 0 && <div>{blogs[0].title}</div>}
      </div> */}

    {/* {blogs.map((blog)=>(
      <div key = {blog._id} >
      <div> {blog.title} </div> */}
      {/* <div> {blog.file} </div > */}
      {/* </div>
    ))} */}

      <textarea type="text" placeholder="Write a preview subtitle"
        className="subtitle font-serif text-2xl placeholder-opacity-50 placeholder-gray-500 text-black outline-none resize-none overflow-hidden"
        {...register('preview_title')}
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}>
      </textarea>

      {/* Submit Button */}
      <input
        type="submit"
        value="Publish now"
        className="publish-btn px-2 text-s bg-orange-500 text-white rounded-xl hover:bg-orange-600 cursor-pointer"
        // onClick={()=> {navigate('/preview-blog')}}
      />
    </form>
  )
}

export default Preview_blog
