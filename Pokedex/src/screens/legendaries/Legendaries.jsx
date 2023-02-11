import React from 'react'

import Navbar from '../../components/navbar/Navbar'

// import { Oval } from  'react-loader-spinner'


// const [load,setload]=useState(true)

import './legendaries.css'
const legendaries = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="lg-box">
    {/* setload(!load); */}
        {/* <img src="" alt="" srcset="" /> */}
        {/* {load && <Oval color="#00BFFF" height={80} width={80} />} */}
        <h1>
            Aniket Kapoor
        </h1>
    </div>
    </>
  )
}

export default legendaries