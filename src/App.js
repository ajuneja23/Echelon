import React from 'react';
import {Routes,Route} from 'react-router-dom'; 
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Signup from './components/Signup';
import './index.css';
const App=()=> {
    return (
        <div class="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};
export default App;