import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import { MantineProvider } from '@mantine/core';
[]
// import Logo from './Logo'

const Navbar = () => {
  const navigate = useNavigate();  // Hook to get navigate function
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <>
      <div className="Navbar bg-orange-400 h-[65px] relative z-10">
        <div className=" flex gap-2 ml-4 ">
          <div className="logoName-nav text-3xl font-semibold relative top-3 font-serif "> Blogger </div>
          {/* <Logo/> */}
        </div>

        <div className='Search-bar' >
          <input type="text" placeholder="Search" className=" placeholder-black border border-gray-500 border-transparent rounded-3xl bg-slate-50 ps-10 w-96 absolute left-60 top-3 h-10 outline-none " />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 mr-2 absolute left-64 top-6" />
        </div>

        <button style={{ position: 'absolute', right: '164px', top: '16px' }} >
          <PencilSquareIcon className="h-6 w-8 font-thin"
            onClick={() => navigate('/new-post')} />  </button>   {/*Use navigate function in the onClick handler*/}

        <button className=" absolute right-32 top-4 text-base"
          onClick={() => navigate('/new-post')} >  Write </button>

        {/* <button className='login text-bold  absolute right-[50px] top-[15px] border-slate-900  font- -2 rounded-full w-16 p-[1px] pb-[3px] hover: '>
      Login 
     </button> */}

     {/* Login button */}
       {
         !isAuthenticated ? 

       <button className='login text-bold  absolute right-[50px] top-[15px]  '
          onClick={loginWithRedirect}
        >
          Login
        </button> :

        <MantineProvider >
             <div className='text-bold  absolute right-[35px] top-[11px] hover: cursor-pointer ' >
          <ProfileMenu user={user} logout={logout} />
        </div>
        </MantineProvider>
     
        }

      </div>

      {/* <div className=' fixed text-2xl font-normal top-10 right-32 '>Blogger</div> */}
      <div className="logoName-nav text-2xl font-thin top-3 font-serif fixed " style={{ right: '7%', top: '4%', zIndex: '1' }}> Blogger </div>
      <div className="text-3xl fixed top-[27px] right-[102px] opacity-50">_______</div>
    </>
  )
}

export default Navbar
