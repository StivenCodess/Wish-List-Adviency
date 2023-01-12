export default function Form(){
    return(
        <form className="w-11/12 h-1/5  grid grid-rows-3 grid-cols-6 gap-x-2 gap-y-1 m-2">
            <input type="text" placeholder="Wish" className="text-center col-span-4 bg-red-600 rounded-lg  text-white border placeholder:text-white "/>
            <input type="number" min="1" max="10" placeholder="1" className="text-center col-span-2 bg-red-600 rounded-lg  text-white border placeholder:text-white "/>
            <input type="text" placeholder="Img" className="col-span-6 text-center bg-red-600 rounded-lg  text-white border placeholder:text-white "/>
            <button type="submit" className="col-span-6 bg-red-600 rounded-lg  text-white border placeholder:text-white ">ADD</button>
        </form>
    )
}