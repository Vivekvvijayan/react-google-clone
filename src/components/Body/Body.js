import { useContext } from 'react'
import { SearchContext } from '../../Context/serachContext'
import { useNavigate } from 'react-router-dom'
import SearchInput from '../SarchInput/SearchInput'

function Body() {

  const navigate = useNavigate()

  return (
    <div className='px-3 h-1/6 mt-20 flex items-center justify-center flex-col lg:h-3/5 '>
      <div className=" w-3/6 mb-4 p-2 flex items-center justify-center md:w-2/6 lg:w-1/5">
        <img src='/assets/google_logo.png' className='object-cover w-full' alt="" />
      </div>

      {/* input searching */}

     
      <SearchInput />
      {/* button */}

      <div className="sm:w-50  lg:w-2/6 mt-10 space-x-14 flex justify-center">

        <button
          className='text-gray-700 p-3 bg-gray-200 rounded-lg hover:shadow-lg lg:bg-white lg:text-gray-700 lg:hover:bg-gray-200 lg:hover:text-gray-700'
          onClick={() =>navigate('/result')}
        > Google Search</button>
        <button className='sm:p-2 text-gray-700 p-3 bg-gray-200 rounded-lg hover:shadow-lg'> I'm Feeling Lucky</button>

      </div>

      <span className="mt-10 text-sm">Google offered in :<span className="underline text-blue-600 ml-2 ">English Hindi Malayalam</span> </span>


    </div>
  )
}

export default Body