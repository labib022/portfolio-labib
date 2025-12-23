import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <Container style={{ paddingTop: '120px', paddingBottom: '50px' }}>
      <h1 className="project-heading">
        My <strong className="purple">Projects</strong>
      </h1>
      <Row style={{ justifyContent: 'center' }}>
        {/* Project 1 */}
        <ProjectCard
          title="Zaptro – Electronics E-Commerce"
          description="Product listing, cart, checkout. Firebase authentication. Fully responsive."
          techStack="React,Java Script, Redux, Firebase, Tailwind"
          githubLink="https://github.com/labib022/zaptro"
        />

        {/* Project 2 */}
        <ProjectCard
          title="  Admin  Dashboard  E- Commerce"
          description="A scalable admin dashboard featuring user and role management,User management, charts, role-based access,."
          techStack="React,Type Script, Chart.js, Material UI"
          githubLink="https://github.com/labib022/react-admin"
        />
      </Row>
    </Container>
  );
}

export default ProjectsSection;
