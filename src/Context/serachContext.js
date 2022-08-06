import { useState,createContext } from 'react'

export const SearchContext = createContext({})

const SearchContextComponenet = ({children}) => {
    
    const [val,setVal] = useState('');
    const [item,setItem] = useState([])
    const [searchTime,setSearchTime] = useState('')
    const [total,setTotal] = useState({})


    
    return(

        <SearchContext.Provider value={{val,setVal,item,setItem,searchTime,setSearchTime,total,setTotal}}>
                {children}
        </SearchContext.Provider>
    )

}
export default SearchContextComponenet