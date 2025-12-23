import React from 'react';
import { Container } from 'react-bootstrap';

import Skill from './Skill/Skill';
import Toolstack from './Skill/ToolStack';

function SkillsTitle() {
  return (
    <Container style={{ paddingTop: '120px' }}>
      {/* ===== SKILLS ===== */}
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset</strong>
      </h1>

      <Skill />

      {/* ===== TOOLS ===== */}
      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>

      <Toolstack />
    </Container>
  );
}

export default SkillsTitle;
