import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from './components/Navbbar'
import Markdown from 'react-markdown'
import Loading from './components/Loading';
import About from './components/About';
import Content from './components/Content';
import Product from './components/Product';
import Logo from './components/Logo';

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState(false);
  const [res, setRes] = useState("");

  const generateRes = async () => {
    let promptInput = document.getElementById("prompt");
    if (prompt === "") {
      alert("You must describe your video topic... !");
      promptInput.focus();
    } else {
      setLoader(true);
      const genAI = new GoogleGenerativeAI("YOUR API KEY");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(`Give a complete video script for the video which is ${prompt}`);
      setRes(result.response.text());
      setLoader(false);
    }
  };

  // if (loader) {
  //   return <div className='px-[100px] my-[20px]'>
  //     <Loading />
  //   </div>
  // }

  return (
    <Router>
      <Navbar />
      <div className='flex items-center justify-center flex-col min-h-[30vh]'>
        <h3 style={{ lineHeight: 1 }} className='text-[60px] font-[500] text-center'>A Free <span className='text-purple-600'>AI</span> For Generating The <br /> Video Script</h3>
      </div>
      {loader ? <div className='px-[100px] my-[20px]'><Loading /></div> : (
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      )}
      <div className="textarea flex items-center justify-center flex-col mt-[10px]">
        <textarea onChange={(e) => { setPrompt(e.target.value) }} value={prompt} name="prompt" className='bg-[#f4f4f4] border-0 outline-0 min-w-[50vw] min-h-[130px] p-[20px] rounded-[10px]' id="prompt" placeholder="Describe your video topic."></textarea>
        <button onClick={generateRes} className="gen p-[10px] bg-purple-600 text-white rounded-[10px] mt-[20px] min-w-[200px] transition-all duration-300 hover:bg-purple-700">Generate</button>
      </div>
      {res !== "" ?
        <div className="res my-[40px] px-[100px]">
          <Markdown>{res}</Markdown>
        </div> : ""
      }
    </Router>
  )
}

export default App
