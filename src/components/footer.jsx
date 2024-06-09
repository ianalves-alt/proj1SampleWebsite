import { IoLogoInstagram } from "react-icons/io";
import {FaXTwitter} from 'react-icons/fa6'
import {AiOutlineYoutube} from 'react-icons/ai'
import {PiFacebookLogoBold  } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer(){
  const greyc = "#d2ccff"
  const date = new Date()
  let year = date.getFullYear()
  return(
    <>
      <footer className='footer'>
        <div className='buttons'>
         <button>
            <IoLogoInstagram size='2em' color={greyc}/> 
         </button>        
          <button>
            <FaXTwitter size='2em' color={greyc}/>
          </button>
          <button>
            <AiOutlineYoutube size='2em' color={greyc}/>
          </button>
          <button>
<PiFacebookLogoBold size='2em' color={greyc}/>
          </button>
          <button>
<FaGithub size='2em' color={greyc}/>
          </button>
          <button>
<AiOutlineLinkedin size='2em' color={greyc}/>
          </button>

        </div>
        <div className='links'>
          <nav>
            <ul className='footerli'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
<li><a href='#'>Link</a></li>
<li><a href='#'>Sample</a></li>
<li><a href='#'>Contact-us</a></li>
            </ul>
          </nav>
        </div>
        <div className='copy'>
          <p>All Rights Reserveds to Ian and Well&copy;{year}</p>
        </div>

      </footer>
    </>
    
  )
}
