import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import ComputerIcon from '@mui/icons-material/Computer';



export default function CareerTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Sep 2022 – Dec 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Diploma in Full Stack Development</Typography>
          <Typography>Code Institute – Python, Django, JavaScript, React</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Nov 2023 – Sep 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">FIT Software Developer Programme</Typography>
          <Typography>Cenit College – Advanced training in Python & PostgreSQL</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Oct 2024 – Feb 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Graduate Full Stack Developer – EM3</Typography>
          <Typography>Improved API performance, Docker deployments, and test coverage</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          May 2024 – Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <ComputerIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Backend Intern – Unimenty</Typography>
          <Typography>Building admin dashboards with TypeScript, Prisma & Express</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}