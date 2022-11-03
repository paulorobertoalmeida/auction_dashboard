/* pages/index.js */
import { useEffect, useState } from 'react'
import { client, exploreProfiles } from '../api'

import Sidebar from '../components/Sidebar'
import { MintForm } from '../components/MintForm'
import { BrowserRouter, Routes, Route } from 'next/router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Profile from './Profile'
import Feed from './feed'
import AuctionOffset from './auction_offset'
import Counter from '../components/Counter'
import home from './home'


export default function Home() {
  
  return (
   <div className="flex relative">
    {/* <BrowserRouter> */}
    <div className="w-0">
      <Sidebar />
    </div>
    <Navbar />
    
    <Footer />
   </div>
  )
}