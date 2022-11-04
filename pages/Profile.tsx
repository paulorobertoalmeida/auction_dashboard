import React from 'react'
import Layout from '../components/Layout'

function profile() {
    return (
        <Layout>
            <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                <div className=" sm:mx-32 lg:mx-32 xl:mx-72 ">
                    <div className="flex justify-between container mx-auto">
                        <div className="w-full">
                            <div className="mt-4 px-4">
                                <h1 className="text-3xl font-semibold py-7 px-5">Profile Name</h1>
                                <h3 className="text-sm italic py-8 px-5">Wallet Number 0xf45...</h3>
                                <h1 className="font-thinner flex text-4xl pt-10 px-5">Setup Your Account Id
                                </h1>

                                <form className="mx-5 my-5">
                                    <label className="relative block p-3 border-2 border-black rounded" htmlFor="name">
                                        <span className="text-md font-semibold text-zinc-900" htmlFor="name">
                                            Name
                                        </span>
                                        <input className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="name" type="text" placeholder="Your name" ></input>
                                    </label>
                                    <div className="mt-5">
                                        <label className="input-field inline-flex items-baseline border-2 border-black rounded  p-4">
                                            <span className="flex-none text-dusty-blue-darker select-none leading-none">public id or eth/
                                            </span>
                                            <div className="flex-1 leading-none">
                                                <input id="handle" type="text" className="w-full pl-1 bg-transparent focus:outline-none" name="handle" placeholder="username" />
                                            </div>
                                        </label>
                                    </div>

                                    <div className="shrink-0 mt-5">

                                    </div>
                                    <label className="block pt-2">
                                        <span className="sr-only t-2">Choose profile photo</span>
                                        <input type="file" className="w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-pink-300 file:text-zinc-900
      hover:file:bg-rose-300
    "/>
                                    </label>



                                    <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
                                        <span className="text-md font-semibold text-zinc-900" htmlFor="name">
                                            NFT Address
                                        </span>

                                        <input className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="Write THe Adress of your NFT" />
                                    </label>


                                    <label className="relative block p-3 border-2  mt-5 border-black rounded" htmlFor="name">
                                        <span className="text-md font-semibold  text-zinc-900" htmlFor="name">
                                            NFT ID
                                        </span>

                                        <input className="w-full read-only:bg-zinc-800  p-0 text-sm bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="ie : VERRA099888sas7sa98" />
                                        <button className="font-medium bg-blue-500 px-2 text-white text-sm rounded-md">Submit</button>
                                    </label>

                                    <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
                                        <span className="text-md font-semibold  text-zinc-900" htmlFor="name">
                                            English Auction
                                        </span>

                                        <input className="w-full read-only:bg-zinc-800  p-0 text-sm bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="ie : english auction" />
                                        <button className="font-medium bg-blue-500 px-2 text-white text-sm rounded-md">Submit</button>
                                    </label>

                                    <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
                                        <span className="text-md font-semibold  text-zinc-900" htmlFor="name">
                                            Starting Bid
                                        </span>

                                        <input className="w-full read-only:bg-zinc-800  p-0 text-sm bg-transparent text-gray-500 focus:outline-none" id="name" type="number" placeholder="ie : 0.001ETH" />
                                        <button className="font-medium bg-blue-500 px-2 text-white text-sm rounded-md">Submit</button>
                                    </label>
                                    <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
                                        <span className="text-md font-semibold  text-zinc-900" htmlFor="name">
                                            Address Token
                                        </span>

                                        <input className="w-full read-only:bg-zinc-800  p-0 text-sm bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="ie : english auction" />
                                        <button className="font-medium bg-blue-500 px-2 text-white text-sm rounded-md">Submit</button>
                                    </label>

                                    <h1 className="text-xl font-semibold mt-5">Category :</h1>
                                    <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Business</button>
                                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Creative</button>
                                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Education</button>
                                    </p>

                                    <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Tech</button>
                                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Entertainment</button>
                                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">Other</button>
                                    </p>

                                    <button className="mt-5 mb-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default profile