import React from 'react';
import image from '../../../asset/5ed5f414c359ef001ca99611.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl mobile-banner" />
                <div>
                    <h1 className="text-5xl font-bold mobile-title">ABOUT OUR WEBSITE</h1>
                    <p className="py-6">Tech Services is a young leading IT company serving clients globally. With an extended team of developers, digital marketers, business consultants, and professional industrialists from all the corners of the globe</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;