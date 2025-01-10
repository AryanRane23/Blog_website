import { Link } from "react-router-dom";
const Extras = () => {
  return (
    
  
        <div className="fixed top-[90px] h-[600px] right-0 mr-20 p-4 w-[400px] bg-white border shadow-lg">
          <div className="sticky text-2xl font-bold mb-6">Did you know?</div>

          <div className=" text-lg font-bold mb-1">The First Blog Ever</div>
          <p className="mb-2"> The first recognized blog was created by Justin Hall in 1994 and was called his “personal homepage.”</p>
        
          <div className="text-lg font-bold mb-1">Over 600 Million Blogs Exist</div>
          <p className="mb-2">There are more than 600 million blogs on the internet today, and they account for about 77% of all web content!</p>
        
          <div className="text-lg font-bold mb-1">A New Blog Every Half a Second</div>
          <p className="mb-10"> Globally, a new blog is created every 0.5 seconds that’s over 172,000 blogs every day!</p>
          
          <div className="text-base font-bold opacity-65 mb-3">Recommended Topics</div>
          <div className="grid grid-cols-3 gap-4 mb-4   ">
          <Link to='/topics/dataScience'>
          <div className="border bg-gray-100 w-28 p-2 rounded-full hover:bg-gray-200 cursor-pointer" >Data Science</div>   </Link> 
          <Link to='/topics/selfImprovement'>
          <div className="border bg-gray-100 w-36 p-2 rounded-full hover:bg-gray-200 cursor-pointer">Self Improvement</div> </Link>
          </div>  

          <div className="grid grid-cols-3 mb-4">
          <Link to ='/topics/workout'> 
          <div className="border bg-gray-100 w-28 p-2 rounded-full hover:bg-gray-200 cursor-pointer">Working out</div> </Link>
          <Link to = '/topics/designing'>
          <div className="border bg-gray-100 w-24 p-2 rounded-full hover:bg-gray-200 cursor-pointer ">Designing</div>  </Link>
          <Link to = '/topics/programming'>
          <div className="border bg-gray-100 w-28 p-2 rounded-full hover:bg-gray-200 cursor-pointer">Programming</div> </Link>
          </div>
          <div className="grid grid-cols-4  ">
          <Link to = '/topics/technology'>
          <div className="border bg-gray-100 w-24 p-2 rounded-full hover:bg-gray-200 cursor-pointer">Technology</div>  </Link>
          <Link to = '/topics/nature'>
          <div className="border bg-gray-100 w-16 p-2 rounded-full ml-4 hover:bg-gray-200 cursor-pointer">Nature</div> </Link>
          <Link to = '/topics/react'>
          <div className="border bg-gray-100 w-16 p-2 rounded-full ml-2 hover:bg-gray-200 cursor-pointer">React</div>  </Link>
          <Link to = 'topics/coding'>
          <div className="border bg-gray-100 w-20 p-2 rounded-full hover:bg-gray-200 cursor-pointer">Coding</div>      </Link>
          </div>
        </div>
        
  );
};

export default Extras;
