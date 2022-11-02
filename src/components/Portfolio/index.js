import React from 'react';
import bootCampChamp from '../../assets/bootCampChamp.png';
import subAtomic from '../../assets/subAtomic.png';
import jate from '../../assets/jate.png';
import noteTaker from '../../assets/noteTaker.png';
import rpg from '../../assets/randomProjectGenerator.png';
import runBuddy from '../../assets/runBuddy.png';

const projects = [
    {
        id: 0,
        title: 'Random Project Generator',
        image: rpg,
        link: 'https://bvlah.github.io/Random-Project-Generator/',
        repo: 'https://github.com/BVlah/Random-Project-Generator'
    },
    {
        id: 1,
        title: 'JATE',
        image: jate,
        link: 'https://jate-bv.herokuapp.com/',
        repo: 'https://github.com/BVlah/JATE-BV'
    },
    {
        id: 2,
        title: 'Jottem Down',
        image: noteTaker,
        link: 'https://jottem-down.herokuapp.com/',
        repo: 'https://github.com/BVlah/Jottem_Down'
    },
    {
        id: 3,
        title: 'Run Buddy',
        image: runBuddy,
        link: 'https://bvlah.github.io/run-buddy/',
        repo: 'https://github.com/BVlah/run-buddy'
    },
    {
        id: 4,
        title: 'Boot Camp Champ',
        image: bootCampChamp,
        link: 'https://bootcamp-champ-uofr.herokuapp.com/',
        repo: 'https://github.com/chou8395-XOMYwl/bootcamp-champ'
    }
];
function Portfolio() {

    return (
        <div>
            <div className='cards'>
                <div className = 'feature-display'>
                    <div className= 'feature-card'>
                        <img src= {subAtomic} className='card-img' alt='feature-project' />
                        <div className='card-body text-center'>
                                <h5 class='feature-title'><strong>BootCamp Champ</strong></h5>
                                <a href='https://sub-atomic-mern.herokuapp.com/' target ='_blank' rel ='noreferrer' className='btn btn-primary website'>Website</a>
                                <a target='_blank' rel='noreferrer' href='https://github.com/rva-mike/Substitute-Finder' className ='btn btn-primary'>Github</a>
                        </div>
                    </div>
                </div>
                {projects.map((project) => (
                    <div class='card' key={project.id}>
                        <img src={project.image} class='card-img' alt='project' />
                        {/* <hr></hr> */}
                        <div class='card-body text-center'>
                            <h5><strong>{project.title}</strong></h5>
                            <a href={project.link} target='_blank' rel='noreferrer' className='btn btn-primary website'>Website</a>
                            <a target='_blank' rel='noreferrer' href={project.repo} className='btn btn-primary' >Github</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;