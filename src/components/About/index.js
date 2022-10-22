import React from "react";
import mePic from "../../assets/Me.png";

function About() {
  return (
    <section className="body">
      
      <div>
        <div>
          <img src={mePic} className="pic" alt="Brennan"/>
        </div>
        <div className = "about">
            <h1 className="header"><u>About Me</u></h1>
            <p>
            Hello and welcome to my portfolio! My name is Brennan Vlahcevic, and I am an aspiring full-stack developer having completed my full stack boot camp certificate from the Univeristy of Richmond in November 2022. I also have an advanced knowledge of postgreSQL, and will be teaching myself Python as my next challenge.
            <br /><br />Having graduated with my bachelor's degree in Sports and Recreation Management from JMU in 2017, I ended up with an internship at a software company after school which led me to find my true love for coding and development.
            <br /><br />When I'm not coding, you'll find me playing a variety of sports - particularly soccer, fixing up a boat or on the water in some capacity, or hanging out with my dog, Beckett.
            <br /><br />Please explore my website and reach out if you have any questions!
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;