import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeBackground from './ThreeBackground';
import './App.css';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import TodoProject from './TodoProject';
import NotebookProject from './NotoBookProject';
import Roadmap from './RodeMap';


// --- Main App Registration ---
const App = () => {
    return (
        <>
            <ScrollToTop />
            <ThreeBackground />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<TodoProject />} />
                <Route path="/notebook" element={<NotebookProject />} />
                <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
            <footer>
                <p>&copy; {new Date().getFullYear()} Shivam Pandey. Built with React, GSAP & Three.js</p>
                <p>Email sp5812070@gmail.com</p>
            </footer>
        </>
    );
};

export default App;
