import { useState } from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal"
import './App.css'
import { useForm, useFormContext, FormProvider } from "react-hook-form"
import { Routes, Route } from "react-router-dom"
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import { useNavigate } from "react-router-dom"


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


function App() {




  return (

    <>



          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/2" element={<SecondPage />} />
            <Route path="/3" element={<ThirdPage />} />
          </Routes>


    </>


  )
}

export default App
