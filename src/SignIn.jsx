import React, {useState} from 'react';
import './SignIn.css';
import musicg from './Music/akok.mp3';
import musick from './Music/gog.wav';
import { Howl,Howler} from 'howler';

const SignIn = () => {


  const wrapSound = () => {
    const sound = new Howl({
      src: [musicg]
    });
    sound.play();
  }

<div className='op'>kjhgkjghkj</div>

  

    return(
     <>
        <button  onClick={wrapSound}>kjhkh
        </button> 
     </>
    );
}
export default SignIn;