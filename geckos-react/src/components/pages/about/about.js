import React from 'react';

const About = () => {
  const chinguimg ="https://github.com/Chingu-cohorts/voyage-wiki/raw/development/images/chingu.png";
  const Jacobimg ="https://avatars1.githubusercontent.com/u/6155064?s=460&v=4";
  const Joeimg ="https://avatars0.githubusercontent.com/u/19617720?s=460&v=4";
  const Shayimg ="https://avatars2.githubusercontent.com/u/25827186?s=460&v=4";
  const Andresimg ="https://avatars2.githubusercontent.com/u/16233826?s=460&v=4";


  return (
    <div className="ui segment container ">

      <img class="ui small centered image" src={chinguimg} />
      <div style={{ paddingLeft: 100 }} ><h4>WHY ARE WE HERE,
       WHAT IS THIS AND WHO BUILT THIS,
       THE ANSWER TO THOSE QUESTIONS ARE RIGHT HERE.
        <em style={{ color:"#BC5FD3", paddingLeft:340 }}> GECKOS TEAM 34</em></h4></div>

      <div className="ui blue segment"><img className="ui tiny left floated image" src={Jacobimg}/>
        <h1>Jacob Russell</h1>

        <p>
        We have not got any  information about him to put  here, 
        but I am very sure he is
        a very nice guy, not only because
        he is the Project Manager of our team,
        but because if you have any question
        you just tell him and out of nowhere
        he would get you the space, yet, we are still waiting for his oficial info...
        </p></div>
      <div className="ui violet segment"><img className="ui tiny right floated image" src={Joeimg} />
        <div className="right floated">
          <h1 >Joseph Moran</h1>
        </div>
        <h4>Front End Web Developer</h4>
        <p> His reason for joining Chingu
        and doing this project is to learn
        new technologies and more about the
        backend of an application. Also to learn
        how to effectively work  and contribute in a remote team.
        When I’m not coding I enjoy <em> playing guitar, video games,
        reading or scouring Netflix with my girlfriend </em>for something new to watch.</p></div>
      <div className="ui green segment"><img className="ui tiny left floated image" src={Shayimg} />
        <div className="right floated"><h1 >Shay E. Meredith</h1></div>
        <h4>Full-stack web developer</h4>
        <p>Shay lives in Atlanta,
        Georgia and  works as a support engineer at a telecommunications company.
        Until recently he was a museum curator and archivist,
         but Shay is now working towards a career as a full-stack web developer.
        </p>
      </div>
      <div className="ui yellow segment"><img className="ui tiny right floated image" src={Andresimg} />
        <div className="right floated">
          <h1 >Andres Saldarriaga Gaviria</h1></div>
        <h4>Full-stack web developer</h4>
        <p>His main reason to live is to be happy,
         fortunately his happiness are coding,
         biking and help other find their happiness,
          He is here to learn as much as he can and become a
          great developer to help his country, Colombia, grow.
        </p></div>
    </div>

  );
};

export default About;
