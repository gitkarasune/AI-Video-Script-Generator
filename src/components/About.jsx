// components/About.jsx
import React from 'react';
import ai from "../assets/ai.jpg"
import remote from "../assets/remote.jpg"

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2">
          <img src={ai} alt="About Us" className="rounded-2xl w-[450px] h-[450px] object-cover shadow-lg" />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to our application! We are dedicated to providing the best service for generating video scripts using advanced AI technology. <br /> Our mission is to empower content creators with tools that make their work easier and more efficient.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our team consists of experienced professionals in the fields of artificial intelligence, software development, and content creation. <br /> We are passionate about innovation and committed to delivering high-quality solutions to our users.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2">
          <div className="mb-12 md:mr-4">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <ul className="list-none text-lg leading-relaxed">
              <li><span className='font-bold'>Innovation:</span> We strive to stay at the forefront of technology and continuously improve our services.</li>
              <li><span className='font-bold'>Quality:</span> We are committed to delivering high-quality solutions that meet the needs of our users.</li>
              <li><span className='font-bold'>Integrity:</span> We conduct our business with honesty and transparency.</li>
              <li><span className='font-bold'>Customer Focus:</span> Our users are at the heart of everything we do. We listen to their feedback and work to exceed their expectations.</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 ">
        <img src={remote} alt="Remote" className="rounded-2xl w-[500px] h-[300px] object-cover shadow-lg" />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to revolutionize the way video scripts are created by leveraging the power of AI. <br /> We aim to provide a seamless and intuitive experience for our users, enabling them to focus on their creativity while we handle the technical aspects.
        </p>
      </div>
    </div>
  );
};

export default About;