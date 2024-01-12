import React from 'react'
import './technologies.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsBootstrap} from 'react-icons/bs'
import {RiGithubFill, RiGitlabFill, RiReactjsLine} from 'react-icons/ri'
import {FaAngular, FaEmber, FaReact} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiAngular, SiApachemaven, SiBitbucket, SiBootstrap, SiConfluence, SiCss3, SiDatadog, SiDocker, SiEmberdotjs, SiGithub, SiGitlab, SiHtml5, SiJava, SiJavascript, SiJenkins, SiJira, SiKibana, SiKubernetes, SiMongodb, SiNodedotjs, SiPostman, SiReact, SiSpring, SiSpringboot, SiSwagger, SiTypescript} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {TbBrandPython} from 'react-icons/tb'
import {RiGitCommitLine} from 'react-icons/ri'

const Technologies = () => {
  return (
    <section id="technologies">
      <h1>Skills I have</h1>
      <div className="container technologies__container">
        <div className="technologies__frontend">
          <h3>Programming Languages</h3>
          <div className="technologies__content">
          <article className='technologies__details'>
              <SiJava className='technologies__details__icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiJavascript className='technologies__details__icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiTypescript className='technologies__details__icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiHtml5 className='technologies__details__icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='technologies__details'>
              <SiCss3 className='technologies__details__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiBootstrap className='technologies__details__icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="technologies__backend">
        <h3>Frameworks</h3>
          <div className="technologies__content">
            <article className='technologies__details'>
              <SiReact className='technologies__details__icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='technologies__details'>
              <SiAngular className='technologies__details__icon'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiNodedotjs className='technologies__details__icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiEmberdotjs className='technologies__details__icon'/>
              <div>
                <h4>EmberJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiSpring className='technologies__details__icon'/>
              <div>
                <h4>Spring</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiSpringboot className='technologies__details__icon'/>
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        </div>
        <br></br>
        <div className="container technologies__container">
        <div className="technologies__frontend">
          <h3>Deployment Tools</h3>
          <div className="technologies__content">
          <article className='technologies__details'>
              <SiGitlab className='technologies__details__icon'/>
              <div>
                <h4>GitLab</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiJenkins className='technologies__details__icon'/>
              <div>
                <h4>Jenkins</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiDocker className='technologies__details__icon'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiKibana className='technologies__details__icon'/>
              <div>
                <h4>Kibana</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='technologies__details'>
              <SiDatadog className='technologies__details__icon'/>
              <div>
                <h4>DataDog</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiApachemaven className='technologies__details__icon'/>
              <div>
                <h4>Maven</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='technologies__details'>
              <SiKubernetes className='technologies__details__icon'/>
              <div>
                <h4>Kubernetes</h4>
                <small className='text-light'>Experienced</small> 
              </div>
            </article>
          </div>
        </div>
        <div className="technologies__backend">
        <h3>Development Tools</h3>
          <div className="technologies__content">
            <article className='technologies__details'>
              <SiJira className='technologies__details__icon'/>
              <div>
                <h4>JIRA</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='technologies__details'>
              <SiGithub className='technologies__details__icon'/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiBitbucket className='technologies__details__icon'/>
              <div>
                <h4>Bitbucket</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiConfluence className='technologies__details__icon'/>
              <div>
                <h4>Confluence</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiPostman className='technologies__details__icon'/>
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='technologies__details'>
              <SiSwagger className='technologies__details__icon'/>
              <div>
                <h4>Swagger</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
    
  )
}

export default Technologies
