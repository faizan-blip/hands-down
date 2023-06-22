import React, { useEffect} from 'react'
import intro from './IMAGES/intro.png';
import files from './IMAGES/file.webp'
import graph from './IMAGES/graph.png'
import { motion } from 'framer-motion';
import ideas from './IMAGES/ideas.png'
export default function Mobilehome() {

    useEffect(() => {
        function handleScroll() {
          const ptag = document.getElementById('ptag');
          if (ptag) {
            const distanceFromTop = ptag.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            if (distanceFromTop < windowHeight * 0.6) {
          
              ptag.style.color = 'aliceblue';
            } else {
                ptag.style.color = 'grey';
            }
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



  return (
   <>
     <div className="containeri">
      <div className="row">
      <div className="box1">
        <motion.div
         className="up"
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
        >
        <h1>HANDS DOWN</h1>
                <img src={intro} alt="" />
                </motion.div>
                <p id='ptag'>Get a free consultation with one of our experts and get practical insights on how to bring more revenue without any risk!</p>
              </div>
      </div>


      <motion.div
          className="box"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="cards2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={files} alt="" width="150px" height="150px" />
            <h2>Lead Generation</h2>
            <p>We will find out your best solution for lead generation.</p>
          </motion.div>
          <motion.div
            className="cards2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={ideas} alt="" width="150px" height="150px" />
            <h2>Personalized Email Marketing &amp; Cold Calls</h2>
            <p>
              Too tired of not getting enough conversions? Or too lightly work
              for the entire sales process?
            </p>
          </motion.div>
          <motion.div
            className="cards3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={graph} alt="" width="150px" height="150px" />
            <h2>Marketing Solutions</h2>
            <p>Get sales or your money back!</p>
            <p>Let us help you get more revenue or a 100% refund.</p>
          </motion.div>
        </motion.div>
      </div>
   </>
  )
}
