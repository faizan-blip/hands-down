import React, { useState } from 'react';
import logo from './IMAGES/logo_hands.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const close = ()=>{
    
    setOpen(false);
  }
  return (
    <>
      <div className={`${isHomePage ? 'navbar sticky' : 'navbar_static'}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navlist">
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMJflGiHA3Lc35KVrML8SFWYMnso8tyvLXRsmGvNO6u5dhRg/viewform?usp=sf_link">
          <div className="getstarted">
            <button>Get Started <span><KeyboardDoubleArrowRightIcon style={{ position:"relative" , top:"5px"}} /></span> </button>
          </div>
        </a>
        </div>
        <div className="menu-button">
          <IconButton onClick={toggleDrawer(true)}>
           <div id="menu"> <MenuOpenIcon /></div>
          </IconButton>
        </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}  sx={{backgroundColor:'rgb(0,0,0,0.5)', '& .MuiDrawer-paper':{
      backgroundColor:'rgba(0,0,0,0.7)'
      }}} >
        <List className='sidebar'  >
          <ListItem>
         < ArrowBackIosIcon  onClick={close}  style={{color:"white"}} />   <img src={logo} alt="" width="100px" height="100px" style={{position:"relative" , left:"39.4px"}} />
          </ListItem>
        <ListItem >
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMJflGiHA3Lc35KVrML8SFWYMnso8tyvLXRsmGvNO6u5dhRg/viewform?usp=sf_link" style={{color
    :"white"}}>    <ListItemText primary="Get Started"   sx={{ '& .MuiTypography-root':{ fontFamily:'Poppins', fontWeight:'600' , fontSize:'21px' , color:'#F1E9E9' , background:'linear-gradient(180deg, #332D45 0%, rgba(24, 4, 82, 0.56) 100%)' , boxShadow:"1px 0px 21px rgba(24, 4, 82, 0.25)" , borderRadius:"25px" , padding:"0.5em 1.2em" } }} /></a>   
          </ListItem>
          <ListItem button component={Link} to="/home">
            <ListItemText primary="HOME" sx={{ '& .MuiTypography-root':{ fontFamily:'Poppins', fontWeight:'600' , fontSize:'19px' , color:'#F1E9E9' , textAlign:"center"} }} />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText  primary="ABOUT" sx={{ '& .MuiTypography-root':{ fontFamily:'Poppins', fontWeight:'600' , fontSize:'19px' ,  color:'#F1E9E9' ,  textAlign:"center"} }}  /> 
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText  primary="CONTACT" sx={{ '& .MuiTypography-root':{ fontFamily:'Poppins', fontWeight:'600' , fontSize:'21px' ,  color:'white' ,  textAlign:"center" } }}  />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;