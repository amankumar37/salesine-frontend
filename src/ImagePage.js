import React from "react";
import one from './images/one.jpg'
import two from './images/two.jpg'
import three from './images/three.jpg'
import four from './images/four.jpg'
import five from './images/five.jpg'
import six from './images/six.jpg'
import ImageCard from "./ImageCard";

function ImagePage(props){
     
    return(
        <div className="my-24 mx-60">
               <h1 className="text-3xl text-slate-800 flex justify-center my-8">Benifits at Talent Connect</h1>
         <div className="flex flex-wrap ">
         <ImageCard image={one} quote="Welcome to Talent Connect, where talent and opportunity converge to shape extraordinary careers. Unleash your potential, explore diverse possibilities, and find your path to success." />
        <ImageCard image={two} quote="Join a community that fosters growth and nurtures ambition. Talent Connect is more than just a website; it's a catalyst for your career success" />
        <ImageCard image={three} quote="At Talent Connect, we believe in empowering careers through meaningful connections. Join our inclusive community, simplify your job search, and ignite the spark that leads to exceptional achievements" />
        <ImageCard image={four} quote="Your future starts here – embark on a transformative journey with Talent Connect. Uncover hidden treasures, let your skills shine, and embrace a world of opportunities at your fingertips" />
        <ImageCard image={five} quote="Discover your dream job with ease on Talent Connect. Our user-friendly platform streamlines your search, connecting you with the right fit effortlessly." />
        <ImageCard image={six} quote="Explore the intersection of talent and success at Talent Connect. Simplify your job search, connect with like-minded professionals, and open doors to new horizons" />
         </div>

        </div>
    )
    

}

export default ImagePage;