/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const JobCard = ({job}) => {


  
const {job_title, deadline,_id, min_price, max_price, description} = job;
    return (
      <Link to={`/job/${_id}`} className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
        <div className='flex items-center justify-between'>
         
            {job_title}
       
          <span className='px-3 py-1 text-xl text-blue-800 uppercase bg-blue-200 rounded-full '>
          {new Date(deadline).toLocaleDateString()}
          </span>
        </div>
  
        <div>
          <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
       
          </h1>
  
          <p className='mt-2 text-sm text-gray-600 '>
          {description}
          </p>
          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Price: ${min_price} - ${max_price}
          </p>
        </div>
      </Link>
    )
  }
  
  export default JobCard