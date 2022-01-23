import React,{useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../index.css';
const Signup=()=>{
    return (
        <div>
            <Navbar />
            <div id="signuptitle">
            <h1 class="text-center text-3xl pb-10 pt-10 font-bold text-white font-sans"><a class="text-violet-500">Sign</a> Up</h1>
            </div>
            <div id="signupform" class="display-flex">
            <iframe id="googform" src="https://docs.google.com/forms/d/e/1FAIpQLSfYq3cIWXWAdKmCaFXtrEgJhJm-O7qg7oGJKMj5ZSxiloQedg/viewform?embedded=true" width="70%" height="1285px" class="py-5">Loading…</iframe>
            </div>
        </div>
    );
};

export default Signup;