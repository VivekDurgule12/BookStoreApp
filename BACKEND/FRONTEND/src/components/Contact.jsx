import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                <Navbar />

                <div className="contactDeatils flex items-center justify-center h-screen ">
                    <div id="" className="w-[600px]">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
                                    ✕

                                </Link>


                                <h3 className="font-bold text-lg ">Contact us</h3>
                                {/* Name */}
                                <div className='mt-4 space-y-2'>
                                    <span>Name</span> <br />
                                    <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("name", { required: true })} />
                                    <br />
                                    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                {/* Contact Number  */}
                                <div className='mt-4 space-y-2'>
                                    <span>Contact</span> <br />
                                    <input type="number" placeholder='Enter Your Contact No' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("contact", { required: true })} />
                                    <br />
                                    {errors.contact && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                {/* Message  */}
                                <div className='mt-4 space-y-2'>
                                    <span>Message</span> <br />
                                    <input type="text" placeholder='Enter Your Message' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("message", { required: true })} />
                                    <br />
                                    {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>

                                {/* Button */}
                                <div className="flex justify-around mt-4 ">
                                    <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200 '>Submit!</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Contact
