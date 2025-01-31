import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";
import Extras from '../components/Extras';
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]); // State to store fetched blogs
  const [loading, setLoading] = useState(true); // State to handle loading
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const navigate = useNavigate(); //
  const { blogId } = useParams();

  const [dropdownVisible, setDropdownVisible] = useState(null);
  const toggleDropdown = (blogId) => {
    // if dropdown for clicked blog is already visible then; set dropdownVisible to null
    // else dropdownVisible to blog._ie
    setDropdownVisible(dropdownVisible === blogId ? null : blogId);
    console.log("Dropdown clicked");
  }

  const dropdownRef = useRef(null); // Ref to track dropdown
  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(null); // Hide dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Fetch blogs from the backend API
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data); // Set blogs data
        setLoading(false); // Stop loading
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); // Empty dependency array ensures this runs once on mount

  //   if (loading) return <p>Loading...</p>; // Show loading state

  // };
  const onDelete = (blogId) => {
    fetch(`http://localhost:8080/${blogId}`, {
      method: 'DELETE',
    })
      // blogs.filter - Loops through the blog Array
      // Keep only the blogs where the blog._id is not equal to the id
      .then(() => setBlogs((blogs) => blogs.filter((blog) => blog._id !== blogId)))
      .catch(error => console.error('Error deleting blog:', error));
  }

  // <button onClick={() => handleDelete(blog._id) }></button> // When del-btn clicked, blog._id is passed to handleDelete(), ensuring the correct blog is deleted.

  return (
    <>
      <Navbar /> 
      <Extras />
         {/* Parent container of Sidebar for `sticky` */}
      

        <div className="cards flex flex-col gap-5 items-start ml-20 p-6">

          {blogs.map((blog) => (
            <div key={blog._id} className="card  border-t w-[900px] p-4 grid grid-cols-2 relative">
              <div>
                <div className="display-title text-4xl">{blog.title}</div>
                <div className="display-desc text-xl">{blog.description}</div>
              </div>
              {blog.file && (
                <img
                  src={`http://localhost:8080${blog.file}`}
                  alt={blog.title}
                  className="display-image sm:w-1/2 md:w-1/3 lg:w-60 h-auto object-cover "
                />
              )}
              <div className=" grid col-span-2">
                <FontAwesomeIcon
                  icon={faEllipsis}
                  size="lg"
                  className=" ellipsis cursor-pointer"
                  onClick={() => toggleDropdown(blog._id)} // pass the blog ID
                />
              </div>
              {/* Dropdown Menu */}
              {dropdownVisible === blog._id && (
                <div
                  ref={dropdownRef} // Attach the ref to the dropdown menu
                  className="absolute left-0 top-full  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <button onClick={() => {
                        console.log("Navigating to edit blog with ID:", blog._id);
                        navigate(`/edit-blog/${blog._id}`)
                      }
                      }  //
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Edit Blog
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setShowDeleteConfirmation(blog._id)} // Pass the blog ID to the state 
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white  ">
                        Delete Blog
                      </button>
                    </li>
                  </ul>
                </div>
                
              )}
              
            </div>
          ))}

      
        {/* Delete Confirmation */}
        {showDeleteConfirmation && (  // saved this in useState()
          <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-7 bg-black bg-opacity-50  transition ease-out duration-500"
            id="deleteModal"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div className="deleteModal bg-white rounded-lg shadow-lg max-w-lg w-full ">
              <div className="px-6 py-4 border-b border-gray-200">
                <h5
                  className="text-lg font-medium text-gray-800"
                  id="deleteModalLabel"
                >
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                  aria-label="Close"
                  onClick={() => { setShowDeleteConfirmation(null) }}
                >
                  &times;
                </button>
              </div>
              <div className="px-6 py-4 text-gray-600">
                Are you sure you want to delete this Blog?
              </div>
              <div className="px-6 py-4 flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => { setShowDeleteConfirmation(null) }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                  onClick={() => {
                    // onDelete(blogId)
                    onDelete(showDeleteConfirmation); // Use the stored blog ID
                    setShowDeleteConfirmation(null); // Close modal
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;