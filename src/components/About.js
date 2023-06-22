import React, {useState} from 'react';
import { motion } from 'framer-motion';
import ethics from './IMAGES/ETHICS.png';
import work from './IMAGES/WORK.png';
import last from './IMAGES/LAST.png';
import about from './IMAGES/about.png'
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  window.onscroll = function () {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }else
      setIsVisible(false);
      
    }

  return (
    <>
    <div className="container">
         <motion.div
          className="glass0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
         >
            <div id='detailabout'>
            <h2>ABOUT HANDS-DOWN</h2>
            <p>Hands Down founded in 2022 by a team of entrepreneurs from India, Singapore & UK after successfully building multiple brands in different sectors of the industry and having the experience. Its time to help other business owners not to repeat the mistakes we did and instead get valued and see them grow. It’s practically impossible for someone with a budget to learn everything about starting up a new business. Either you learn/hire an entire team who can help you with Marketing- Lead generation, A/B Testing, Verification, Script writing, Cold outreach, follow ups & Copywriting, and the list goes on, or you hire different freelancers or agencies to help you with each specific task. Even to get a piece of content, you need a team for your Research, Content Writing& Editing, SEO, Publishing, and Graphics. We at HDO do every task under one BRAND. A One Stop Solution for all your branding needs. <br /> <br />
Thank you for joining us on this journey and for supporting our vision. We look forward to serving you and helping you achieve your own dreams.</p>
</div>
        </motion.div>
        <motion.div
         className="aboutpng"
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15 }}
        >
    <img src={about} alt="" />
</motion.div>
    </div>


    <div className="container">
         <motion.div
          className="glass1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
       transition={{ duration: 0.5, delay: 0.2 }}
         >
            <div id='detailabout'>
            <h2>ETHICS</h2>
                <ul>
                    <li>Honesty and Integrity: Truthful and transparent in all business dealings and willing to admit mistakes. Humans make mistakes even though we have 5 different stages of verification that we don’t, which minimizes the number of revisions we get, we still make mistakes, and if we don’t we won’t hesitate or might even go one step more to help rectify the issue as early as possible.</li>
                    <li>Responsibility and Accountability: We take full responsibility for the impact of the company’s actions and are accountable for the outcomes of those actions.</li>
                    <li>Fairness and Respect: We treat all customers/employees fairly and with respect, regardless of their position or status.</li>
                    <li>Sustainability: We consider the long-term impact of the company’s actions on people and the environment.</li>
                    <li>Social Responsibility: We recognize the company’s role in the broader community and take steps to make a positive impact on society</li>
                </ul>
</div>
        </motion.div>
        <motion.div
         className="aboutpng"
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 1000 }}
        transition={{ duration: 0.15 }}
        >
    <img src={ethics} alt="" />
</motion.div>
    </div>


    <div className="container">
         <motion.div
          className="glass2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
          transition={{ duration: 0.5}}
         >
            <div id='detailcultures'>
            <h2>WORK CULTURE</h2>
                <ul>
                    <li>Open communication: We have open and transparent communication that helps employees feel included and valued and can encourage collaboration and problem-solving</li>
                    <li>Respect and inclusion: We value diversity and promote inclusivity which creates a positive and supportive work environment for all employees.</li>
                    <li>Collaboration and teamwork: We encourage collaboration, and teamwork can help foster a sense of community and create opportunities for employees to learn from each other.</li>
                    <li>Growth and development: We support employee growth and development can help employees feel motivated and engaged and can lead to long-term success for the company.</li>
                </ul>
</div>
        </motion.div>
        <motion.div
         className="aboutpng"
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 1000 }}
        transition={{ duration: 0.15 }}
        >
    <img src={work} alt="" />
</motion.div>
    </div>


    <div className="container">
         <motion.div
          className="glass3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
          transition={{ duration: 0.5}}
         >
            <div id='detailwork'>
            <h2>WHY YOU SHOULDN'T WORK WITH US ?</h2>
            <p>
            For CustomersOn every company landing page, you will most definitely see this section where they pitch why you should work with them.So we thought to change the wave, and talk about some points why you shouldn’t be working with us. <br /> <br />
            </p>
                <ol>
                    <li>If you want to worry more about your business and online presence.</li>
                    <li>If you dont want to grow at your maximum potential.</li>
                    <li>If you want to lose your investments and time.</li>
                    <li>If you want to spend your energy on building your brand rather than having a relationship with your employees/customers or other areas of business.</li>
                </ol> <br />
              <p> But we know you want to take action only reason you came so far reading about us. We are people like you and would love to collaborate with like-minded humans.</p> 
 
</div>
        </motion.div>
        <motion.div
         className="aboutpng"
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 1000 }}
        transition={{ duration: 0.15 }}
        >
    <img src={last} alt="" />
</motion.div>
    </div>



</>

  );
}