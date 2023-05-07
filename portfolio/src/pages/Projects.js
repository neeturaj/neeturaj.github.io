import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import teacozy from "../assets/projects/teacozy.png";
import colmar from "../assets/projects/colmar.png";
import nyrl from "../assets/projects/nyrl.jpg";
import dasmoto from "../assets/projects/dasmoto.png";
import todo from "../assets/projects/todo.png";
import jammming from "../assets/projects/jamming.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyrl}
              isBlog={false}
              title="NYRL Fabrics"
              description="It's an E-commerce website where we can select and buy either men's or women's clothing. 
              It is a responsive website it can be viewed by mobile, pc, laptop any device.
              E-commerce marketplaces and platforms have become dominant online
              sales generators for most of the fashion brands, though most have also started their own e-store
              and shopping apps.
              Technologies used- 
              HTML5 
               CSS3 
                Bootstrap 
                 JavaScript."
              ghLink="https://github.com/neeturaj/neeturaj.github.io/tree/main/NYRL"
              demoLink="https://neeturaj.github.io/NYRL/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colmar}
              isBlog={false}
              title="Colmar"
              description="Colmar Academy Capstone Project through Codecademy.
              The purpose of the project was to develop a single page site for an educational institution.
              This is the capstone project for the Codecademy intensive How to Build Websites course.
              The wireframe below was provided, but typeface decisions were at the students discretion.
              Technologies  used-
              HTML5
               CSS3."
              ghLink="https://github.com/neeturaj/neeturaj.github.io/tree/main/Colmar"
              demoLink="https://neeturaj.github.io/Colmar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To do list"
              description=" A To-Do List project is an application specially built to keep track of  
              tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do.
               Once they are done with their tasks they can also remove them from the list.
              Technologies  used-
              HTML5 
               JavaScript"
              ghLink="https://github.com/neeturaj/reacttodoapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dasmoto}
              isBlog={false}
              title="Dasmoto"
              description="A very simple arts & Crafts website project while learning to code with Codecademy.
              This is a project of Code Academy's Build Websites from Scratch course.
              Technologies used-
              HTML5 
               CSS3"
              ghLink="https://github.com/neeturaj/neeturaj.github.io/tree/main/Dasmoto"
              demoLink="https://neeturaj.github.io/Dasmoto/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teacozy}
              isBlog={false}
              title="Tea_Cozy"
              description="Tea Cozy In this project, you will create a fictional tea shop website on your own computer.
              The purpose of the project was to create a single page site for a company that sells tea.
              This project was aimed at practicing display and positioning techniques that were learned
              during the unit.
              Technologies used-
              HTML5 
              CSS3"
              ghLink="https://github.com/neeturaj/neeturaj.github.io/tree/main/Tea_Cozy"
              demoLink="https://neeturaj.github.io/Tea_Cozy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jammming}
              isBlog={false}
              title="Jammming"
              description="Code Academy project features spotify Api search song/album/artist and populates results.
              Add/Delete songs in the results and save playlist to account.
              Technologies used-
               ReactJS 
                HTML5 
                CSS 
                JavaScript"
              ghLink="https://github.com/neeturaj/jamming"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  )
}

export default Projects