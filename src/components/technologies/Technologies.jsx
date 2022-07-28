import React from 'react'
import './technologies.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsBootstrap} from 'react-icons/bs'
import {RiReactjsLine} from 'react-icons/ri'
import {FaEmber} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {TbBrandPython} from 'react-icons/tb'

const Technologies = () => {
  return (
    <section id="technologies">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>
      <div className="container technologies__container">
        <div className="technologies__frontend">
          <h3>Frontend Development</h3>
          <div className="technologies__content">
            <article className='technologies__details'>
              <AiOutlineHtml5 className='technologies__details__icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <TbBrandJavascript className='technologies__details__icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <TbBrandCss3 className='technologies__details__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='technologies__details'>
              <BsBootstrap className='technologies__details__icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='technologies__details'>
              <RiReactjsLine className='technologies__details__icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='technologies__details'>
              <FaEmber className='technologies__details__icon'/>
              <div>
                <h4>Ember.JS</h4>
                <small className='text-light'>Intermediate</small> 
              </div>
            </article>
          </div>
        </div>
        <div className="technologies__backend">
        <h3>Backend Development</h3>
          <div className="technologies__content">
            <article className='technologies__details'>
              <FaJava className='technologies__details__icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='technologies__details'>
              <FaNodeJs className='technologies__details__icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiMongodb className='technologies__details__icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <GrMysql className='technologies__details__icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <TbBrandPython className='technologies__details__icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Technologies
