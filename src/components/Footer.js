import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
    <footer>
        <div className="foot">
         <div className="upper">
            <h1> <span> HANDS-DOWN </span><br /> LETS WORK TOGETHER</h1>
            
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMJflGiHA3Lc35KVrML8SFWYMnso8tyvLXRsmGvNO6u5dhRg/viewform?usp=sf_link" style={{color:"#d9d9d9"}} > <div className="request-loader">
            <span><KeyboardDoubleArrowRightIcon style={{width:"100px" , height:"100px" , position:"relative" , top:"16px"}}/></span>
         </div></a> 
         </div>
            <div className="information">
            <div className="find">
             <h2>FIND US</h2>   
        <span> MOBILE: </span><a href="tel:+18286224589">+18286224589</a> <br />
        <span> LOCATION:</span> <a href="geo:39.000000, -75.500000">Delaware United States, Singapore, India</a>
          </div>
          <div className="talk">
          <h2>TALK TO US</h2>   
           <a href="mailto:Support@hands-down.org">Support@hands-down.org</a> <br />
           <a href="mailto:Hiring@hands-down.org">Hiring@hands-down.org</a> <br />
          </div>
          <div className="follow">
          <h2>FOLLOW US</h2>   
          <a href="https://www.linkedin.com/company/hands-down-company/"><LinkedInIcon/> </a> 
         <a href="https://instagram.com/handsdownorg?igshid=OTJlNzQ0NWM="><InstagramIcon/> </a>
         <a href="https://twitter.com/sidhartganguly"> <TwitterIcon/> </a>
</div>
</div>
        </div>
    </footer>
    </>
  )
}
