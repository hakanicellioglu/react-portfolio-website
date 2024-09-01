import React from 'react';

function HeaderSocials() {
    return (
        <div className="home__socials">
            <a
                href="https://www.instagram.com/"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a
                href="https://x.com/"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a
                href="https://www.behance.net/"
                className="home__social-link"
            >
                <i className="fa-brands fa-behance"></i>
            </a>
            <a
                href="https://dribbble.com/"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-dribbble"></i>
            </a>
            <a
                href="https://tr.pinterest.com/"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-pinterest"></i>
            </a>
        </div>
    );
}

export default HeaderSocials;
