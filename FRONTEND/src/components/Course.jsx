import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:4xl '>We're delighted to have you <span className='text-pink-500'>herel:) </span></h1>
            <p className='mt-12 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia eum recusandae adipisci consequatur inventore sint necessitatibus tenetur asperiores consectetur quaerat illo, error iste unde nam eos illum perspiciatis libero nesciunt. Explicabo, commodi. Corrupti repellat, rerum amet natus debitis adipisci, officia sunt repudiandae vel laudantium qui obcaecati quibusdam porro laborum?</p>
            <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5'>Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
            {
              list.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
            }
        </div>
    </div>
    </>
    
  )
}

export default Course
