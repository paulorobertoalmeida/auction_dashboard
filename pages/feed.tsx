import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


export const BidButton = () => {
    <div className="justify-center">
        <button
            className="text-white p-2 m-2 rounded "
            onClick={handleClick}
            style={{ backgroundColor: active ? "green" : "red" }}
        >
            Make a Bid
        </button>
    </div>
}


const feed = (): JSX.Element => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div>
            
            <div className="h-full ml-14 mt-16 mb-6 md:ml-64">
                
                <div className="text-center pb-6">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        NFT Feed
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/06/forest/10237716-2-eng-GB/Forest_pillars.jpg" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">1.000 TCO2</p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>
                        <div className="justify-center">
                            <button
                                className="text-white p-2 m-2 rounded "
                                onClick={handleClick}
                                style={{ backgroundColor: active ? "green" : "red" }}
                            >
                                Make a Bid
                            </button>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRie7QbFNQsuAFztYYQlx9z9V1wHWaNem8Nv04DMkkMhVvODQjNnLWxA9738-fNu0PBEZQ&usqp=CAU" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">1.000 TCO2</p>
                            <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZuSgSPncUl6SdO_5EBd9hveYTQb9RdEfpuJmdeVRKh1GSw_S1gZrvbOLnrBl52cCn3Xg&usqp=CAU" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">1.000 TCO2</p>
                            <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihuOjDW8BXiiLfb87ORDGjrbc6cXXrLUG5tMiTiMsw7j8V8IhXUyLzMmepOh3hJY76m0&usqp=CAU" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">1.000 TCO2</p>
                            <p className="text-base text-gray-400 font-normal">Waste Disposal - Brazil</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">1.000 TCO2</p>
                            <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCzoeTiCRjFFXeg24HOrUp_HbAxoeLGOkX0eMEnovVA8xOXwYs9SUxPxzDp928JE2AOY&usqp=CAU" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">1.000 TCO2</p>
                            <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default feed;

