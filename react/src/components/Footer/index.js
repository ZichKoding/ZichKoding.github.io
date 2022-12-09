import React from 'react';

function Footer() {
    // Get full year nothing else
    function fullYear() {
        const yearFormat = new Date();
        return yearFormat.getFullYear();
    }

    return (
        <footer className='flex-row'>
            <h2><a className='yeller' href='/'>&copy; <span>{fullYear()}</span> ZichKoding</a></h2>
            <nav>
                <ul className='flex-row'>
                    <li>
                        <a className='li-footerdesign' href='https://github.com/ZichKoding/' target="_blank" rel="noreferrer"><img className='sociallinks' src="https://img.icons8.com/nolan/64/github.png"/></a>
                    </li>
                    <li>
                        <a className='li-footerdesign' href='https://www.linkedin.com/in/chris-zichko-264b25217/' target="_blank" rel="noreferrer"><img className='sociallinks' src="https://img.icons8.com/color/48/000000/linkedin-circled--v5.png"/></a>
                    </li>
                    <li>
                        <a className='li-footerdesign' href='https://www.youtube.com/channel/UCwjC4EguoA6Xzxs_01ttnbQ' target="_blank" rel="noreferrer"><img className='sociallinks' src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-youtube-applications-windows-those-icons-lineal-color-those-icons.png"/></a>
                    </li>
                </ul>
            </nav>
        </footer>
        
    )

}

export default Footer;