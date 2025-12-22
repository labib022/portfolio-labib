import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi everyone! I’m <span className="purple"> Md Labebul Islam</span>{' '}
            from <span className="purple">Dhaka, Bangladesh</span>.
            <br />
            I’m a <span className="purple">MernStack Developer</span>
            <br />I hold an Integrated B.Sc. in{' '}
            <span className="purple">Mathematics </span> from{' '}
            <span className="purple">National University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Md Labebul Islam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
