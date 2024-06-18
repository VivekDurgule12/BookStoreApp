import React from 'react'

function Cards({item}) {
    
    return (
        <>
            <div className='mt-4 my-3'>
                <div className="card w-92 bg-base-100 shadow-xl p-3 hover:scale-105 duration-300">
                    <figure><img src={item.Image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Rs.{item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-500 duration-200 p-2 ">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
