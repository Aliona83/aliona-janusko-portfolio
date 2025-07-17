import CareerTimeline from '../components/CareerTimeline';

function AboutMe()
{
    return(
   <div className="about-me-page">
      <h2>About Me</h2>

      
      <p>
        Hi, I’m <b>Aliona Janusko</b> — a Junior Full Stack Developer based in Limerick, Ireland. I spent over 15 years <br />in leadership roles in the service industry before making a bold transition into tech.
      </p>

      <p>
        Since earning my diploma in Full Stack Software Development from Code Institute, I’ve worked on <br />real-world applications using <b>Python, Django, React</b>, and <b>REST APIs</b>. I love building scalable solutions <br />and solving practical problems with clean, maintainable code.
      </p>

      <p>
        I'm currently enhancing my backend skills through an internship at <b>Unimenty</b>, where I help develop admin dashboards with <b>TypeScript</b>, <b>Express</b>, and <b>Prisma</b>.
      </p>

      <p>
        My goal is to join a collaborative development team where I can continue to learn and contribute to <br />impactful software.
      </p>

      <h3>My Journey</h3>
      <CareerTimeline />
    </div>
  );
}

export default AboutMe;