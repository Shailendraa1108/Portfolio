import React from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import img1 from "../assets/WhatsApp_Image_2023-06-13_at_05.32.00-removebg-preview.png"
import { useRef } from 'react'






function Home({ ratio }) {
    const Cleincount=useRef(null)
    const projectCount=useRef(null)
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        },
    };
    // const animationClientsCount = () => {
    //     animate(0, 100, {
    //       duration: 1,
    //       onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    //     });
    //   };
    const animationCleintProject=()=>{
animate(0,100,{
    duartion:1,
    onUpdate:(v)=>(Cleincount.current.textContent=v.toFixed())
})
    }
const animationProjectsCount=()=>{
    animate(0, 500, {
        duration:1,
        onUpdate:(v)=>(projectCount.current.textContent=v.toFixed())
    }
)}

    return (
        <div id="home">
        <section>
          <div>
            <motion.h1 {...animations.h1}>
              Hi, I Am <br /> Shailendra Prajapati
            </motion.h1>
  
            <Typewriter
           
              options={{
                strings: ["A Developer", "A Designer", "A Creator"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
              }}
           
             
            />
  
            <div>
              <a href="mailto:shailendrap1108@gmail.com">Hire Me</a>
              <a href="#work">
                Projects <BsArrowUpRight />
              </a>
            </div>
  
            <article >
              <p style={{}}>
                +<motion.span ref={Cleincount}        whileInView={animationCleintProject}>100</motion.span>
              
              </p>
              <span
              
       
              >Clients Worldwide</span>
            </article>
  
            <aside>
              <article >
              <p >
                +
                
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                   500
                
                  </motion.span>
                
                 
              </p>
              <span
              
              
              >Projects Done</span>
              </article>
  
              <article data-special>
                <p>Contact</p>
                <span>shailendrap1108@gmail.com</span>
              </article>
            </aside>
          </div>
        </section>








        <section>
          <img src={img1} alt="Shailendra" />
        
        </section>
      
        <BsChevronDown />
       

       
      </div>
  
    )
}

export default Home