
import Element from "../../components/Element/Element"
import { useLocation } from 'react-router-dom'
import { useEffect, useContext } from "react"
import { instance } from '../../axios'
import { SearchContext } from "../../Context/serachContext"
import { CX, KEY } from "../../credintials"
import SearchInput from "../../components/SarchInput/SearchInput"
import Profile from "../../components/Profile/Profile"
import { AuthContext } from "../../Context/Authcontext"

function Result() {

  const location = useLocation()
  const { search } = location.state
  const { item, setItem, searchTime, setSearchTime, total, setTotal, val } = useContext(SearchContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {

    instance.get(`v1?key=${KEY}&cx=${CX}&q=${search}`).then(res => {

      const { items, searchInformation } = res.data
      const { searchTime, totalResults } = searchInformation

      // set data in state
      setItem(items)

      // set serach time in state

      setSearchTime(searchTime)

      // set total results in state

      setTotal(totalResults)

    }).catch(err => {
      console.log('error' + err)
    })

  }, [search, total, item, setTotal, setItem, setSearchTime])

  return (
    <>
      <div className="top-section w-full flex justify-between items-center px-5 pt-3">

        <i class="fa-solid fa-bars text-lg"></i>

        <div className="googleIcon w-2/6 lg:w-1/6 md:w-1/6">
          <img src='/assets/google_logo.png' className='object-cover w-full' alt="" />
        </div>

        <Profile userImage={user.imageUrl} />
      </div>

      <div className="search-section w-full flex justify-center items-center px-5 pt-4">


        <SearchInput val={val} />
      </div>
      <div className="tab flex justify-around p-3 mt-2 lg:justify-center lg:space-x-14 cursor-pointer md:justify-center md:space-x-14">
        <span className="text-blue-500">All</span>
        <span className="text-gray-500">Videos</span>
        <span className="text-gray-500">News</span>
        <span className="text-gray-500">Images</span>
        <span className="text-gray-500">Maps</span>
        <span className="text-gray-500">Shopping</span>
      </div>

      <div className="result-section w-full flex justify-center items-center flex-col px-3 pt-4">

        <span className=" ml-5 text-gray-500 text-lg"> {total.length > 0 && 'About' + total + 'Results'}</span>
        <span className=" ml-5 text-gray-500 text-lg">{searchTime && searchTime + ' seconds'}</span>

        {/* mapping response in ui */}

        {
          item.length > 0 ? item.map((item, index) => <Element item={item} key={index} />) : (
            <div role="status" className="flex justify-center flex-col items-center">
              <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />

              </svg>
              <span className="text-gray-500">Seraching...</span>
            </div>
          )


        }


      </div>

    </>
  )
}

export default Result