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
  const testimonialList = [
    {
      image: "images/testimonials/people1.webp",
      meta: "people1",
      bubble: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
      name: "James Kim",
      company: "Google"
    },
    {
      image: "images/testimonials/people2.webp",
      meta: "people2",
      bubble: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
      name: "Smith Park",
      company: "Samsung"
    },
    {
      image: "images/testimonials/people3.webp",
      meta: "people3",
      bubble: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
      name: "Anna Jin",
      company: "Amazone"
    },
  ];

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
  const buttonList = [
    {name: "All", count: 8},
    {name: "Front-end", count: 4},
    {name: "Back-end", count: 2},
    {name: "Mobile", count: 2},
  ];

  const projectList = [
    {
      image:"images/projects/project1.webp", 
      meta:"project1", 
      title:"Project #1",
      desc:"Clone Coding with HTML, CSS"
    },
    {
      image:"images/projects/project2.webp", 
      meta:"project2", 
      title:"Project #2",
      desc:"Clone Coding with HTML, CSS"
    },
    {
      image:"images/projects/project3.webp", 
      meta:"project3", 
      title:"Project #3",
      desc:"Clone Coding with HTML, CSS"
    },
    {
      image:"images/projects/project4.webp", 
      meta:"project4", 
      title:"Project #4",
      desc:"Clone Coding with HTML, CSS"
    },
    {
      image:"images/projects/project5.webp", 
      meta:"project5", 
      title:"Project #5",
      desc:"Clone Coding with HTML, CSS"
    },
    {
      image:"images/projects/project6.webp", 
      meta:"project6", 
      title:"Project #6",
      desc:"Clone Coding with HTML, CSS"
    },
    {
      image:"images/projects/project7.webp", 
      meta:"project7", 
      title:"Project #7",
      desc:"Clone Coding with HTML, CSS"
    },
    {
      image:"images/projects/project8.webp", 
      meta:"project8", 
      title:"Project #8",
      desc:"Clone Coding with HTML, CSS"
    },
  ]

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
  const title = "My Skills";
  const description = "Skills & Attributes";
  const content = `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
      eveniet cupiditate optio natus? Cum, harum eum sint id quod 
      nulla adipisci. Sunt?
  `;

  const pList = [
    {name: "HTML", value:98},
    {name: "CSS", value:90},
    {name: "JavaScript", value:90},
    {name: "TypeScript", value:80},
    {name: "React", value:79},
    {name: "NodeJS", value:68}
  ];

  const toolsList = ["Visual Studio Code","IntelliJ","Android Studio Code"];
  const etcList = ["Git", "Scrum Master", "SVN"];

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
  // const iconList = [
  //   {html: faHtml5},
  //   {mobile: faMobile},
  //   {server: faServer}
  // ]

  const iconList = new Map();
  iconList.set("html", faHtml5);
  iconList.set("mobile", faMobile);
  iconList.set("server", faServer);


  const title="About me";
  const description=`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Iure natus, temporibus perspiciatis repudiandae nostrum modi
  doloremque expedita non eius ipsum! Beatae porro adipisci 
  omnis architecto dignissimos. Iusto ipsa inventore adipisci.`;
  const majorList = [
    {
      icon: faHtml5,
      title: "Front-end",
      desc: "HTML, CSS, JavaScript, TypeScript, React, WebAPIs"
    },
    {
      icon: faMobile,
      title: "Mobile",
      desc: "Android Studio, React Native, iOS, Swift, Java, Kotlin"
    },
    {
      icon: faServer,
      title: "Back-end",
      desc: "Java, JavaScript, Go, Kotlin, Spring, Spring Boot"
    }
  ];
  const jobList = [
    {
      src: "images/jobs/samsung.png",
      alt: "samsung",
      name:"Samsung as Junior Software Engineer",
      period:"2019 Oct - Until now"
    },
    {
      src: "images/jobs/google.png",
      alt: "google",
      name:"Google as Junior Software Engineer",
      period:"2010 Oct - 2019 Oct"
    }
  ]

    return (
      <div id="about" className="section max-container">
        <SectionTitle  title={title}  description={description}  />     
        <ul className="majors">
          {majorList.map((major) => (
            <li className="major">
              <Major 
                icon={major.icon}
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

