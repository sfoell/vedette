import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                {/* Replace link when project is published on iSchool capstone website */}
                <a className='footer-link' href="https://ischool.uw.edu/capstone/projects/2024/vedette-streamlining-bug-report-deduplication-googles-android-security" target="_blank" rel="noopener noreferrer">Google x iSchool 2024</a>
                <div className='primary-links'>
                    <Link className='footer-link' to='/solution'>Solution</Link>
                    <Link className='footer-link' to='/team'>Team</Link>
                    <Link className='footer-link' to='/milestones'>Milestones</Link>
                    <a className='footer-link' href="https://vedette-demo.vercel.app/" target="_blank" rel="noopener noreferrer">View Demo</a>
                </div>
            </div>
        </div>
    )
}