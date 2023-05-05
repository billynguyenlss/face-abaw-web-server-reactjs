import './App.css';
import React from 'react';
import ReactPlayer from 'react-player'
import VideoSources from './videoSources';
import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// async function getDataAxios(){
//   const response = await axios.get("https://dog.ceo/api/breeds/list/all")
//   console.log('inside getDataAxios, response.data:', response.data);
//   return JSON.stringify(response.data);
// }


// const videoIntro = "https://www.w3schools.com/tags/movie.mp4";
// const videoLoop =
//   "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";


const videos = [
  "https://www.youtube.com/watch?v=W6BvGtY8XQs",
  // "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://www.youtube.com/watch?v=2sJVse25j0g"
]

function App() {
  // const [vidIndex, setVidIndex] = useState(0);
  // const [index, setIndex] = useState(0);
  const [metadata, setMetadata] = useState("...retrieving customer information");
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState(0.5);
  const [videoURL, setVideoURL] = useState("https://www.youtube.com/watch?v=W6BvGtY8XQs");

  const ref = useRef(null);

  const URL = "http://127.0.0.1:8000/";
  const SHOP_KEY = "live-camera_20230505124622"

  const fetchMetadata = async () => {
    const response = await fetch(
      // "https://dog.ceo/api/breeds/list/all"
      URL + SHOP_KEY, 

    ).then((response) => response.json());
    console.log('response:', response)
    setAge(response['avg_age']);
    setGender(response['gender']);
    console.log('Customer info: age:', age, 'Male:', gender, ' ...');
    setMetadata("Customer info: age: " + age + " Male: " + gender, " ...");
    // if (index===1){
    //   // setMetadata(response['message']['australian'][0]);
    //   setMetadata("age: " + toString(age) + " gender: " + toString(gender));
    // } else {
    //   setMetadata("hello world")
    // }
  }

  const selectNewVideoSrc = () => {
    var age_label = "40-80"
    if (age<10){
      age_label = "0-10"
    } else if (age>=10 && age<40){
      age_label = "10-40"
    }
    var gender_label = "Male"
    if (gender<0.5){
      gender_label = "Female"
    } else if (gender===0.5) {
      gender_label = "Couple"
    }
    const listVideo = VideoSources[age_label][gender_label];
    if (listVideo.length > 0){
      const random_id = Math.floor(Math.random() * listVideo.length);
      setVideoURL(listVideo[random_id])
    }

  }

  useEffect(() => {
    // 
    // fetchMetadata();
  }, [metadata]);

  // findNextVideoIndex(){
  //   const data = getDataAxios();
  //   console.log('inside findNextVideoIndex:', data);
  //   setVidIndex((idx) => idx + 1)
  // };

  return (
    <div className="main">
      {/* <video
        src={videos[index]}
        ref={ref}
        autoPlay
        muted
        onPlay={() =>{
          console.log("This video has started!")
          // fetchMetadata();
        }}
        onEnded={() => {
          console.log("This video has ended!")
          setIndex(idx => (idx + 1) % 2);
          // setMetadata("Hello world");
          fetchMetadata();
      
        }}
      >
      </video> */}
      <p>Smart Advertisement</p>
      <ReactPlayer
        url={videoURL}
        autoPlay={true}
        playing={true}
        muted={true}
        onStart={()=>{
          fetchMetadata();
        }}
        onEnded={() => {
          console.log("This video has ended!")
          // setIndex(idx => (idx + 1) % 2);
          selectNewVideoSrc();
          // setMetadata("Hello world");
          // fetchMetadata();
        }}
      />
      
      <div style={{fontSize:40}}>{metadata}</div>
    </div>
  );
}

export default App;
