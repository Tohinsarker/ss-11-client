import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../provider/AuthProvider'
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user,logOut} =  useContext(AuthContext);
  const navigate = useNavigate();


    const handleSignOut = async() =>{
        try {
          await logOut();
          navigate('/');
        } catch (error) {
          toast.error('something went wrong');
        }
    }
    return (
      <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
        <div className='flex-1'>
          <div className='flex gap-2 items-center'>
            <img className='w-auto h-7' src={logo} alt='' />
            <span className='font-bold'>SoloSphere</span>
          </div>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <div><Link to='/'>Home</Link></div>
            </li>
            <li>
              <div><Link to='/alljobs'>All Jobs</Link></div>
            </li>
  
            {
                !user && (
                <>
                <li>
                    <div><Link to='/login'>Login</Link></div>
                  </li>
                <li>
                    <div><Link to='/registration'>Registration</Link></div>
                  </li>
          
                </>    
                )
            }
          </ul>
  
          {
            user && (
                <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full' >
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/addjob' className='justify-between'>Add Job</Link>
              </li>
              <li>
                <Link to='/mypostedjobs'>My Posted Jobs</Link>
              </li>
              <li>
                <Link to='/mybids'>My Bids</Link>
              </li>
              <li>
                <Link to='/bidrequest'>Bid Requests</Link>
              </li>
              <li>{user?.email}</li>
              <li className='mt-2'>
                <button onClick={handleSignOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
            )
          }
        </div>
      </div>
    )
  }
  
  export default Navbar