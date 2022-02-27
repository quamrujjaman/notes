import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import piretWheel from '../img/piret2.png';
import footerPhoto from '../img/cover-photo.gif';
import Sfacebook from '../img/s-facebook.png';
import Stwitter from '../img/s-twitter.png';
import Sgoogle from '../img/s-google.png';
import Sinstagram from '../img/s-instagram.png';
import Swhatsapp from '../img/s-whatsapp.png';
import Syoutube from '../img/s-youtube.png';
import Sprintrest from '../img/s-printrest.png';
import Ssnapchat from '../img/s-snapchat.png';
const Footer = () => {
  const [dots, setDots] = useState(true);

    return(
     <>
     <footer>
      <div className='footer-wrap-main' draggable='false'>
        <div className='footer-wrap-one'>
         <h2 className='footer-head'>About : </h2>
         <div className='footer-pragraph'  draggable='false'>
          Lorem Ipsum is simply dummy text of the printing and typesetting indu
          five centuries, but also the leapinto electronic typesetting, remaini
          essentially unchanged. It was popularised in the 1960s .Lorem Ipsum i
          text of the printing and typesetting industry.Lorem Ipsum has been th
          standard dummy text ever since the 1500s, when an unknown printer rrr
          took a galley of type and scrambled it to make a typespecimen book.yy
          when an unknown printer took a galley of type and scrambled it to mak. 
          {dots?<span className='moretext'>&#8226; &#8226; &#8226; &#8226; &#8226; &#8226;</span>:null}
          {dots?null:
                  <span className='moretext' draggable='false'>
                    text of the printing and typesetting industry.Lorem Ipsum has been tj
                    standard dummy text ever since the 1500s, when an unknown printer klj
                    five centuries, but also the leapinto electronic typesetting, remai j
                    essentially unchanged. It was popularised in the 1960s .Lorem Ipsum i
                    text of the printing and typesetting industry.Lorem Ipsum has been th
                    standard dummy text ever since the 1500s, when an unknown prin
                  </span>
          }
         </div>
        </div>

        <div className='footer-wrap-two' draggable='false'>
          <h4 className='share-us' draggable='false'>Share us </h4>
          <img className='piret-wheel' draggable='false' src={piretWheel} alt='Piret-wheel'/>
          <div className='share-to' draggable='false'>
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-1' src={Sfacebook} alt='Facebook' title='Facebook'/></Link>
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-2' src={Stwitter} alt='Twitter' title='Twitter'/></Link>    
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-3' src={Sinstagram} alt='Instragram' title='Instragram'/></Link> 
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-4' src={Sgoogle} alt='Google' title='Google'/></Link>
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-5' src={Swhatsapp} alt='Whatsapp' title='Whatsapp'/></Link>
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-6' src={Syoutube} alt='Youtube' title='Youtube'/></Link>
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-7' src={Sprintrest} alt='Printest' title='Printest'/></Link>
           <Link className='sharelinkw' to='/'><img draggable='false' className='sharelink slink-8' src={Ssnapchat} alt='Snapchat' title='Snapchat'/></Link>
          </div>
        </div>
      </div>

          <div className={dots ? 'seemore-btn-active' : 'seemore-btn'} onClick={()=>setDots(!dots)}>
          <div className={dots ? 'seemore-switch' : 'seemore-switch-active'} onClick={()=>setDots(!dots)}>
            <p className='seemore-switch-p'>more .</p>
          </div>
          </div>

          <div className='share-to-two'>
           <span className='share-to-two-span'>Share us to:</span>
           <Link to='https://www.youtube.com'><i class='share-link-two fab fa-facebook-f'></i></Link>
           <Link to='/'><i class='share-link-two fab fa-twitter'></i></Link>
           <Link to='/'><i class='share-link-two fab fa-instagram'></i></Link>
           <Link to='/'><i class='share-link-two fab fa-whatsapp'></i></Link>
           <Link to='/'><i class='share-link-two fab fa-youtube'></i></Link>
          </div>

        <a id='back-to-top' href='#'>Back to Top</a>
      </footer>
     </>
    );
}

export default Footer;