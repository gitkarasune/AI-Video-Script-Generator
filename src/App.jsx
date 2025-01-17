import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from './components/Navbar'
import Markdown from 'react-markdown'
import Loading from './components/Loading';
import { Suspense, lazy } from 'react';

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState(false);
  const [res, setRes] = useState("");
  
  const Home = lazy(() => import('./components/Home'));
  const About = lazy(() => import('./components/About'));
  const Content = lazy(() => import('./components/Content'));
  const Product = lazy(() => import('./components/Product'));

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

  return (
    <Router>
      <Navbar />
      
      {loader ? (<Loading />) : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home Markdown={Markdown} res={res} prompt={prompt} setPrompt={setPrompt} generateRes={generateRes} />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Suspense>
      )}
      
    </Router>
  )
}

export default App
