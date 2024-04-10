import React from 'react';
import { Avatar, HomeTitle } from './HomeComp.jsx';
import { Major, Job } from './AboutComp.jsx';
import SectionTitle from './SectionTitle.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faServer } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
    return (
      <div>
        <Home />
        <About />
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
        <ul class="majors">
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

