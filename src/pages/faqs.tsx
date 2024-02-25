import Head from "next/head"
import Link from "next/link"

export default function Faq(){
    return (
        <>
            <Head>
                <title>Frequently Asked Questions | Cumming Charbonneau Wedding</title>
            </Head>
            <h1 style={{textAlign: 'center'}}>Frequently Asked Questions</h1>
            <div className="colorBackground" style={{padding: '10px'}} id="giftNotice">
                <h3>A Note on Gifts</h3>
                <p>Your presence at our wedding is the greatest gift of all however should you wish to honour us with a gift, a cash gift to put towards our honeymoon would be greatly appreciated.</p>
            </div>
            <div className="sectionBlock">
                <div className="container" id="faqs">
                    <ul>
                        <li>
                            <h4>Where is the ceremony located?</h4>
                            <p>The ceremony will be held at the Leo Mol Sculpture Garden, near the Park Cafe. <strong>It will not be at the leaf or the pavillion.</strong></p>
                        </li>
                        <li>
                            <h4>What time does the reception end?</h4>
                            <p>The ceremony will be held from 4:45 pm to 5:15 pm. The reception will be held from 6:00 pm to 12:30 am. </p>
                        </li>
                        <li>
                            <h4>Where should I park?</h4>
                            <p>There is parking lot nearby to the west of the duck pond. Please see the map available on <Link href='/event'>Event Info</Link>.</p>
                        </li>
                        <li>
                            <h4>Can I bring a guest?</h4>
                            <p>Due to limited seating capacity, we ask that only guests who are listed on the invitation be in attendance.</p>
                        </li>
                        <li>
                            <h4>Can I bring my kids?</h4>
                            <p>Due to limited capacity and liquor licensing, our wedding will be adults only.</p>
                        </li>
                        <li>
                            <h4>What will be served for dinner?</h4>
                            <p>A dinner buffet will be provided with options for vegetarian meals, as well as chicken, beef and fish.</p>
                        </li>
                        <li>
                            <h4>Will alcohol be served?</h4>
                            <p>We will be holding an open bar. Our evening has a minimum charge so please come thirsty. </p>
                        </li>
                        <li>
                            <h4>Should I bring a card with me, or send it in advance?</h4>
                            <p>We wil have an area set aside on the day where you can safely deposit your card.</p>
                        </li>
                        <li>
                            <h4>Can I request a song to be played at the reception?</h4>
                            <p>Yes! Please do! You can request a song on our <Link href={`/event`}>Event Info</Link> page.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}