import React from 'react'
import data from "../assets/data.json"

function Testimonial({ name, feedback,name1,name2,feedback1,feedback2 }) {
    return (
        <div id='testimonial'>
            <h2>       Testimonial</h2>



            <section>
                <article>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="User" />
                    <h4>{name}</h4>
                    <br/>
                    <p>{feedback}</p>
                </article>
                <article>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="User" />
                    <h4>{name1}</h4>
                    <br/>
                    <p>{feedback1}</p>
                </article>
                <article>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="User" />
                    <h4>{name2}</h4>
                    <br/>
                    <p>{feedback2}</p>
                </article>
            </section>
        </div>
    )
}


export default Testimonial