import Link from 'next/link'
import Img from 'next/image'

export default function Nav() {
    return (
        <header className="header">
            <div className="headerContainer container">
                <div className='siteIdentity'>
                    <h1>
                        <span>Jason Cumming</span>
                        <Img
                            src={'/divider.png'}
                            width={60}
                            height={60}
                            alt='divider'
                        />
                        <span>Shyanne Charbonneau</span>
                    </h1>
                </div>
                <nav className='siteNav'>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='about'>About Us</Link></li>
                        <li><Link href='event'>Event Info</Link></li>
                        <li><Link href='rsvp'>RSVP</Link></li>
                        <li><Link href='faqs'>FAQs</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}