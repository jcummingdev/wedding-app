import Link from 'next/link'

export default function Nav() {
    return (
        <header className="header">
            <div className="headerContainer container">
                <nav>
                    <ul>
                        <li className='navLink'><Link href='#'>Link</Link></li>
                        <li className='navLink'><Link href='#'>Link</Link></li>
                        <li><Link href='#'><h1>Cumming Charbonneau Wedding</h1></Link></li>
                        <li className='navLink'><Link href='#'>Link</Link></li>
                        <li className='navLink'><Link href='#'>Link</Link></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}