import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

function ProjectCard({ title, description, techStack, liveLink, githubLink }) {
  return (
    <Col md={6} lg={4} className="project-card">
      <Card
        style={{
          marginBottom: '30px',
          minHeight: '300px',
          backgroundColor: '#613182',
          color: 'white',
        }}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>
            <strong>Tech Stack:</strong> {techStack}
          </p>

          <Button variant="light" href={githubLink} target="_blank">
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
