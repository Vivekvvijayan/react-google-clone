
function Element({ item }) {

  return (
    <div className="result_element w-full min-h-4/5 mt-3 md:w-3/6 lg:w-5/6 lg:pt-5 ">
        <div className="head_of_result flex justify-between px-2">
        <span className="text-xs text-gray-700">{item.link}<span className="text-gray-500"></span> </span>
        <i class="fa-solid fa-ellipsis-vertical text-sm"></i>

        </div>

        <a href={item.link} className="text-xl text-center text-[#0000ee] mt-4 px-2">{item.title}</a>

        <p className="text-sm text-gray-700 text-justify px-2 mt-2">{ item.snippet }</p>

    </div>
  )
}

export default Element