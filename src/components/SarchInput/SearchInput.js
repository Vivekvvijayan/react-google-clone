
function SearchInput({ setSearchInput,val }) {
    return (
        <>
            <div className=" w-full h-12 px-4 bg-[#e7eef4] flex justify-space-between items-center space-x-3   rounded-full lg:w-2/5 lg:h-14 lg:p-4 md:w-4/5">
                <i className="fa-solid fa-magnifying-glass text-gray-700 text-lg"></i>

                <input
                    type="text"
                    className="w-full w-full outline-none bg-transparent "
                    placeholder="Search"
                    onChange={setSearchInput ? setSearchInput:null}
                    value={ val  }

                />

                <i className="fa-solid fa-microphone text-lg cursor-pointer text-gray-700"></i>
            </div>

        </>
    )
}

export default SearchInput