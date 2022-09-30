import me from '../../assets/images/me.jpg'

function AboutMe() {
  return (
    <section className='mx-5'>
      <h1 id="about">About Me</h1>
      <div id='me-img'>
        <img src={me} alt="me" width='250' height='350'/>
      </div>
      <div id='me-text'>
        Back-end web developer with skills that include problem solving, leadership, teamwork, and quick learning. Earned a Full-stack Web Development certificate from Vanderbilt University. 
      </div>
    </section>  
  )
}

export default AboutMe