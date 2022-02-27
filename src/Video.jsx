import React, { Component } from 'react'
import './Video.css';
import musicg from './Music/akok.mp3';
import musick from './Music/gog.wav';
import { Howl,Howler} from 'howler';


const audioclips = [
  {sound: musicg, label:'sound of click'},
  {sound: musick, label:'sound of cato'}

]


export default class Video extends Component {
 
 SoundPlay = (src) => {
   const sound = new Howl({
     src
   })
   sound.play();
 }
 
 RenderBtnSound = () => {
   return audioclips.map((soundObj, index) => {
     return(
       <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
         {soundObj.label}
       </button>
     )
   })
 }
 
 
  render() {
Howler.volume(1.0)


    return (
      <div>
        {this.RenderBtnSound()}
        
        {this.RenderBtnSound()}
      </div>
    )
  }
}