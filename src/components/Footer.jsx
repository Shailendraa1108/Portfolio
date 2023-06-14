import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import img from '../assets/WhatsApp_Image_2023-06-13_at_05.26.05-removebg-preview.png'

function Footer() {
  return (
    <footer id='footer'>
      <div>
        <img
          src={img}
          alt='name'
        />
        <h2>Shailendra prajapati</h2>
        <p>I have made five projects so go to check </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href='https://youtube.com/@ShailendraPrajapati-sw9bz'><AiFillYoutube /></a>
          <a href='https://youtube.com/@ShailendraPrajapati-sw9bz'><AiFillInstagram /></a>
          <a href='https://youtube.com/@ShailendraPrajapati-sw9bz'><AiFillGithub /></a>
        </article>
      </aside>
    </footer>
  )
}

export default Footer