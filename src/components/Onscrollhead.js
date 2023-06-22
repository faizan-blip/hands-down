import React, { useState } from "react";
import intro from './IMAGES/intro.png';
import files from './IMAGES/file.webp'
import graph from './IMAGES/graph.png'
import ideas from './IMAGES/ideas.png'
import { motion, AnimatePresence } from "framer-motion";


export default function Onscrollhead() {


  const [fontSize, setFontSize] = useState(232);
  const [showBox, setShowBox] = useState(false);
  const [showBox1, setShowBox1] = useState(false);
  // const [showfooter, setShowfooter] = useState(false);
  window.onscroll = function () {
    if (window.pageYOffset > 0) {
      let newFontSize = 232 - window.pageYOffset * 0.1;
      newFontSize = newFontSize < 80.52 ? 80.52 : newFontSize;
      setFontSize(newFontSize);
    }
    else {
      setFontSize(232);
      
    }
    if (window.pageYOffset > 1595 && window.pageYOffset < 3000 && window.innerWidth > 1450 ) {
      setShowBox(true);
      setShowBox1(true);
      
    } else {
      setShowBox(false);
      setShowBox1(false);
    }

    if(window.innerWidth <= 1495){
      if (window.pageYOffset > 0) {
      let newFontSize = 140 - window.pageYOffset * 0.1;
      newFontSize = newFontSize < 70 ? 70: newFontSize;
      setFontSize(newFontSize);
    }
  }
  if (window.pageYOffset > 1000 && window.pageYOffset < 3000) {
    setShowBox(true);
    setShowBox1(true);
    
  } else {
    setShowBox(false);
    setShowBox1(false);
  }

  if(window.innerWidth <= 1336){
    if (window.pageYOffset > 0) {
    let newFontSize = 140 - window.pageYOffset * 0.1;
    newFontSize = newFontSize < 60 ? 60: newFontSize;
    setFontSize(newFontSize);
  }
}
if (window.pageYOffset > 700 && window.pageYOffset < 3000) {
  setShowBox(true);
  setShowBox1(true);
  
} else {
  setShowBox(false);
  setShowBox1(false);
}


  };
  return (
    <>
<div className="body">
      <div className="info">
        <div className="scroll" style={{ height: "310vh"}}>
          <div className="stickii" style={{ position: "fixed" }}>
            <div className="column">
              <div className="size">
            <motion.div style={{ fontSize: fontSize }}>
              <h1 className="HEADS-DOWN">HANDS DOWN</h1>
            </motion.div>
            </div>
        <AnimatePresence>
          {showBox && (
            <motion.div
              className="box1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100}}
              transition={{ duration: 0.5 }}
              style={{ position: "fixed", right: "0", top: "25%", marginRight:"50px", marginTop: "-50px", width: "400px", height: "500px"}}
            >
           
                <img src={intro} alt="" />
                <p>Get a free consultation with one of our experts and get practical insights on how to bring more revenue without any risk!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

            <AnimatePresence>
          {showBox1 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -1000}}
              transition={{ duration: 0.5 }}
              // style={{ width: "800px", height: "300px" , marginLeft:"60px"}}
            >
              <div className="box">
              <div className="cards2">
                <img src={files} alt="" width='150px' height='150px' />
               <h2>Lead Generation</h2>
               <p>we will find out your best solution for lead generation.</p>
              </div>
              <div className="cards2">
              <img src={ideas} alt="" width='150px' height='150px' />
              <h2>Personalized Email Marketing & Cold Calls</h2>
               <p>Too tired of not getting enough conversions? Or too lightly work for the entire sales process?</p>
              </div>
              <div className="cards3">
              <img src={graph} alt="" width='150px' height='150px' />
              <h2>Marketing Solutions</h2>
              <p>Get sales or your money back!</p>
               <p>Let us help you get more revenue or a 100% refund.</p>
              </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


          </div>
        </div>
    
      </div>
      </div>

          </>
  );
}