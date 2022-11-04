/* pages/index.js */
import { useEffect, useState } from 'react'
import { client, exploreProfiles } from '../api'

import Sidebar from '../components/Sidebar'
import { MintForm } from '../components/MintForm'
import { BrowserRouter, Routes, Route } from 'next/router'
import Layout from '../components/Layout'


export default function Home() {
  
  return (
   <div>
    <Layout />
   </div>
  )
}