import React from 'react';
import Progress from './Progress.jsx';
import Article from './Article.jsx';
import Button from './Button.jsx';
import Project from './Project.jsx';
import SectionTitle from './SectionTitle.jsx';

import { Avatar, HomeTitle } from './CompHome.jsx';
import { Major, Job } from './CompAbout.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faMobile, faServer } from '@fortawesome/free-solid-svg-icons';
import { TestimonialForm } from './CompTestimonial.jsx';
import { useState, useEffect } from 'react';
import { fetchData } from '../commons/apis.js';

export default function Main() {
    return (
      <div>
        <Home />
        <About />
        <Skills />
        <Work />
        <Testimonial />
        <Arrowup />
      </div>
    );
}

/**
* Arrow up
*/
export function Arrowup() {
    return (
      <div>
        <a className="arrow--up" href="#">
        <FontAwesomeIcon icon={faArrowUp} /></a>    
      </div>
    );
}

/**
* Testimonial
*/
export function Testimonial() {
  const [testimonialListF, setTestimonialListF] = useState([]);

  useEffect(() => {
    const getFetchData = async () => {
      const url = 'data/testimonial.json';
      const result = await fetchData(url);
      setTestimonialListF(result);
    }
    getFetchData();
  }, []);

  const testimonialList = testimonialListF ? testimonialListF : [];

    return (
      <div id="testimonial" className="section max-container">
        <SectionTitle title="Testimonial"
              description="See what they say about me" />
        <ul className="testimonials">
          {testimonialList.map(testimonial => (
            <li className="testimonial">
              <TestimonialForm testimonial={testimonial}/>
            </li>
          ))}
        </ul>
      </div>
    );
}

/**
* My work
*/
export function Work() {
  const [workList, setWorkList] = useState({});

  useEffect(()=>{
    const getFetchData = async () => {
      const url = 'data/work.json';
      const result = await fetchData(url);
      setWorkList(result);
    }
    getFetchData();
  }, []);

  const buttonList = workList && workList.buttonList ? workList.buttonList : [];
  const projectList = workList && workList.projectList ? workList.projectList : [];

    return (
      <div id="work" className="section max-container">
        <SectionTitle 
              title="My work"
              description="Projects" />
        <ul className="categories">
          {buttonList.map(button => (
            <li><Button name={button.name} count={button.count} /></li>
          ))}          
        </ul>
        <ul className="projects">
          {projectList.map(project => (
            <li className="project">
              <Project image={project.image}
                       meta={project.meta}
                       title={project.title}
                       desc={project.desc} />
            </li>
          ))}
        </ul>
      </div>
    );
}


/**
* My Skill
*/
export function Skills() {
  const [skillList, setSkillList] = useState({});

  useEffect(() => {
    const getFetchData = async () => {
      const url = 'data/skills.json';
      const result = await fetchData(url);
      setSkillList(result);
    }
    getFetchData();
    
  }, []);

  const title = skillList.title;
  const description = skillList.description;
  const content = skillList.content;
  const pList = skillList && skillList.pList ? skillList.pList : [];
  const toolsList = skillList && skillList.toolsList ? skillList.toolsList : [];
  const etcList = skillList && skillList.etcList ? skillList.etcList : [];

    return (
      <div id="skill" className="section max-container">
        <SectionTitle 
              title={title}
              description={description}
              content={content} />
        <div className="skills">
          <div className="sklls__coding">
            <h3 className="skill__title">Coding Skills</h3>
            <ul>
              {pList.map( obj => (
                <li className="bar">
                  <Progress name={obj.name} value={obj.value} />
                </li>
              ))}
            </ul>
          </div>
          <Article className="skills__tools" 
                   title="Tools"
                   list={toolsList}
          />
          <Article className="skills__etc" 
                   title="ETC"
                   list={etcList}
          />          
        </div>
      </div>
    );
}


/**
* About
*/
export function About() {  
  const [aboutList, setAboutList] = useState({}); 
  useEffect(() => {
    const getFetchData = async () => {
      const url = 'data/about.json';
      const result = await fetchData(url);
      setAboutList(result);
    }
    getFetchData();

  }, []);
  
  const majorList = aboutList && aboutList.majorList ? aboutList.majorList : [];
  const jobList = aboutList && aboutList.jobList ? aboutList.jobList : [];
  
  const iconList = new Map();
  iconList.set("html", faHtml5);
  iconList.set("mobile", faMobile);
  iconList.set("server", faServer);

    return (
      <div id="about" className="section max-container">
        <SectionTitle  title={aboutList.title}  description={aboutList.description}  />     
        <ul className="majors">
          {majorList.map((major) => (
            <li className="major">
              <Major 
                icon={iconList.get(major.icon)}
                title={major.title}
                desc={major.desc}
                />           
            </li>
          ))}
        </ul>

        <ul clasName="jobs">  
        {jobList.map((job)=>(
          <li className="job">
            <Job
              src={job.src}
              alt={job.alt}
              name={job.name}
              period={job.period}
            />
          </li>
        ))}        
        </ul>
      </div>
    );
}



/**
* Home
*/
export function Home() {
    return (
      <div id="home">        
        <Avatar src="images/favicon.ico" />
        <HomeTitle title="Dream Coder" name="Judy" 
              desc="A software engineer currently residing in Seoul, South Korea"/>        
        <a className = "home__contact" href="#contact">Contact Me</a>
      </div>
    );
}

