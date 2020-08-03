import React from 'react';
import { useLocation } from "react-router-dom";

import {
    BasicResume, ColorfulResume,
    Name, Phone, Email,
    Address, Line1, Line2, City, State, ZipCode,
    StartDate, EndDate, Item,
    Experiences, Experience, Company, Title, Description,
    Educations, Education, Institite, Degree, Major,
    Appendix,
} from '@geniuszhaoyi/resume-template';

export default function Resume(props) {
    let ResumeTemplate;

    switch(props.template) {
        case 'colorful':
            ResumeTemplate = ColorfulResume;
            break;
        case 'basic':
        default:
            ResumeTemplate = BasicResume;
    }

    const location = useLocation();
    let params = new URLSearchParams(location.search);
    let line1 = params.get('line1')
    let line2 = params.get('line2')
    console.log(line1, line2);

    return <ResumeTemplate>
        <Name>Yi Zhao</Name>
        <Address>
            <Line1>{line1}</Line1>
            <Line2>{line2}</Line2>
            <City>Harrison</City>
            <State>NJ</State>
            <ZipCode>07029</ZipCode>
        </Address>
        <Phone>2019121907</Phone>
        <Email enableLink={false}>genius.zhaoyi@gmail.com</Email>
        <Experiences>
            <Experience>
                <Company>Samsung SDS America</Company>
                <Title>Full Stack Developer</Title>
                <Address>Ridgefield Park, New Jersey, United States</Address>
                <StartDate>04/2020</StartDate>
                <EndDate>Present</EndDate>
                <Description>
                    <Item>Working on Samsung's Contact Center Application</Item>
                    <Item>Developing web application using Angular 7, SASS, TypeScript in JavaScript, HTML and CSS.</Item>
                    <Item>Working on it's back-end server in Java using Spring Boot, Spring Data, and MySQL.</Item>
                    <Item>Setting up and maintaining pipelines for Continuous Delivery.</Item>
                    <Item>Interacted with Product Managers to fine tune user stories, analysis effort and with testing team to approve Functional Specification and test cases.</Item>
                    <Item>Participated in code review sessions, system design discussions and system performance analysis.</Item>
                    <Item>
                        Worked with different teams to understand their system requirements and limitations. 
                        Draft solutions for multi-products involved requirements. Align deliver date and propose transit solutions.
                    </Item>
                </Description>
            </Experience>
            <Experience>
                <Company>ADP Inc.</Company>
                <Title>Application Developer</Title>
                <Address>Parsippany, New Jersey, United States</Address>
                <StartDate>01/2019</StartDate>
                <EndDate>03/2020</EndDate>
                <Description>
                    <Item>Contributed to development of ADP Workforce Now as a Full Stack Developer.</Item>
                    <Item>Developed web application using wide range of technologies, legacy to latest, including React, SASS, jQuery, JSP, and Dojo, in JavaScript, HTML and CSS.</Item>
                    <Item>Designed and developed back-end server in Java using Spring Boot, Jersey, Hibernate, Kafka, and Oracle.</Item>
                    <Item>Worked in marketplace API team - One of the most used features in ADP Workforce Now, providing data bridges to other ADP services and externally to clients and partners.</Item>
                    <Item>Designed uniform data transfer contract, coordinating multiple services' requirements.</Item>
                    <Item>Defined data transmission protocol to non-standard services.</Item>
                    <Item>Provided reliable APIs with data validation and on failure roll-back.</Item>
                    <Item>Analysed performance of existing API and provided optimized solution by merging DB transactions, removing redundant queries and fine-tone SQL queries.</Item>
                    <Item>Developed React Webpack plugin to enforce company's coding conventions.</Item>
                </Description>
            </Experience>
            <Experience>
                <Company>Marlabs Inc.</Company>
                <Title>Programmer/Analyst</Title>
                <Address>Piscataway, New Jersey, United States</Address>
                <StartDate>08/2018</StartDate>
                <EndDate>01/2019</EndDate>
                <Description>
                    <Item>Worked as a Full Stack Developer on Marlabs' HR system for employee self reporting.</Item>
                    <Item>Developed and maintained the web application using React, Css, HTML, JavaScript.</Item>
                    <Item>Developed and maintained the backend server using Java, Spring Boot, and MySQL.</Item>
                    <Item>Worked on Unit Testing using Jest.</Item>
                </Description>
            </Experience>
            <Experience>
                <Company>Menusifu Inc</Company>
                <Title>Software Engineer Intern</Title>
                <Address>Manhattan, New York, United States</Address>
                <StartDate>05/2017</StartDate>
                <EndDate>08/2017</EndDate>
                <Description>
                    <Item>Designed and implemented a web-based application using JavaScript, Angular 2, HTML, CSS, and Ionic Cordova for iOS/Android.</Item>
                    <Item>Interacted with back-end RESTful services using Java Sprint Boot.</Item>
                    <Item>Implemented connection to MongoDB and Redis using Spring Data.</Item>
                </Description>
            </Experience>
        </Experiences>
        <Educations>
            <Education>
                <Institite>Stevens Institite of Technology</Institite>
                <Degree>Master of Science</Degree>
                <Major>Computer Science</Major>
                <StartDate>2016</StartDate>
                <EndDate>2018</EndDate>
            </Education>
            <Education>
                <Institite>University of Electronic Science and Technology of China</Institite>
                <Degree>Bachelor's degree</Degree>
                <Major>Computer Software Engineering</Major>
                <StartDate>2012</StartDate>
                <EndDate>2016</EndDate>
            </Education>
        </Educations>
        {/* <Appendix title='Honors & Awards'>
            <Item>Silver Medal at The 12th UESTC Programming Contest Final &ndash; 2012</Item>
            <Item>The ACM-ICPC Asia Region Programming Contest Bronze Medal &ndash; 2013</Item>
        </Appendix> */}
    </ResumeTemplate>
}
