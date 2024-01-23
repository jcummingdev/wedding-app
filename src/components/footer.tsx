import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <h2>Jason Cumming & <br />Shyanne Charbonneau</h2>
            <div className="footerNav container">
                <nav>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About Us</Link></li>
                        <li><Link href='/event'>Event Info</Link></li>
                        <li><Link href='/rsvp'>RSVP</Link></li>
                        <li><Link href='/gifts'>Gifts</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="copyright">
                <div className='container'>
                    <span>Website built by Jason Cumming</span>
                    <span>It's rude to steal people's work.</span>
                </div>
            </div>
        </footer>
    )
}