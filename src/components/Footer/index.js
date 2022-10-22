import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="text-center w-100 footer">
                <p>
                    <br></br>
                    <hr />
                    <p className='mb-2'>A React site by <strong>Brennan Vlahcevic</strong></p>
                    <a className='footer-link' href="https://github.com/BVlah" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-2x fa-github"></i>
                    </a>
                    <a className='footer-link' href="https://www.linkedin.com/in/brennan-vlahcevic-71042713a/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-2x fa-linkedin"></i>
                    </a>
                </p>
            </div>
        </footer>
    );
}