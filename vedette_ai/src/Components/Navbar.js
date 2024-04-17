import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='navbar'>
            <Link className='banner-link' to='/solution'>Google Vedette</Link>
            <div className='primary-links'>
                <Link className='nav-link' to='/solution'>Solution</Link>
                <Link className='nav-link' to='/team'>Team</Link>
                <Link className='nav-link' to='/milestones'>Milestones</Link>
                <a className='primary-button nav-button-mods' href='#demo-vid'>VIEW DEMO</a>
            </div>
        </div>
    )
}