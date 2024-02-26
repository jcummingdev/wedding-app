import Head from "next/head";
import Link from "next/link";
import Img from 'next/image';

export default function About(){
    return(
        <>
            <Head>
                <title>About Us | Cumming Charbonneau Wedding</title>
            </Head>
            <div className="container" id="aboutUs">
                <h1 style={{textAlign: 'center'}}>Our Story</h1>

                <p><strong>If you ask Shyanne:</strong> A friend of mine was hopelessly in love with the little emo who appeared on her screen every day after school. <Img src="/emo.jpg" width={225} height={300} style={{float: 'right', padding: '10px 0px 10px 10px'}} alt="Emo 5 Ever"/>She would make me sit off-screen so he couldn&rsquo;t see me. Which was fine with me because the first time I laid these big brown eyes on him, I too was hopelessly in love. Eventually, he realized there was another person in their MSN chat and asked about me. I was too nervous so I made her tell him I was a six-foot tall, bleach blonde beach goddess. Of course, any 14-year-old boy would demand to see such a sight, so we drew a face on a pillow which I used to hide my face, and stood on her mom&rsquo;s bed after methodically placing the webcam so it looked like my head was close to the ceiling. After a few minutes of him ooohing and ahhing about how tall I was, I jumped off the bed and revealed my dark brown hair. He&rsquo;ll tell you he was a lot happier when my true identity was exposed.</p>

                <p>A few months later I worked up the courage and sent him a friend request on Facebook and we quickly swapped emails so we could be in constant connection after that. It wasn&rsquo;t long before we were making plans to move into a glass house in a remote area of B.C. If you had told 13-year-old Shyanne their &lsquo;plans&rsquo; would eventually come true, she would have laughed at you.</p>

                <p><Img src="/xmas.jpg" width={400} height={266} style={{float: 'none', padding: '10px 10px 10px 0px'}} alt="Christmas 2011"/>It took two years before I finally had the nerve to say yes to him. At 15, I think we both knew that this was it but what kind of easy-peasy life would that be?</p>

                <p>After 13 crazy but magical years and two cats whom we can&rsquo;t get enough of, Jason asked if he could take me to Paris which I immediately followed with &ldquo;Are you proposing?&rdquo; Of course, he said no, but a day before we left I overheard him telling a mutual friend that he was in fact, proposing. <Img src="/halloween.jpg" width={225} height={225} style={{float: 'right', padding: '10px 0px 10px 10px'}} alt="This is hilarious"/>(I was literally two feet away from both of them). Despite knowing, the proposal was absolutely breathtaking. I mean, sunrise in front of the Eiffel Tower, are you kidding?</p>

                <p>Jason and I grew up together. He was my best friend before he was anything else. I couldn&rsquo;t imagine a better happy ending. He is my light, my love &amp; everything in between. I cannot wait to say &lsquo;I do&rsquo;.</p>

                <p><Img src="/happy.jpg" width={400} height={400} style={{float: 'none', padding: '10px 10px 10px 0px'}} alt="I don't even remember when this one was"/></p>

                <p><strong>If you ask Jason:</strong> 15 years ago, I met Shyanne for the first time. Hard to believe that a random day in February of 2009 (couldn&rsquo;t tell you the exact date) turned out to be the most important day of my life. You can read the full story above but there was something about the not-so-6-foot-tall-and-bleach-blonde that just stuck with me. Maybe it was because of her goofiness, or maybe it was the <Link href='https://www.youtube.com/watch?v=7ETunGnK7bo' target='_blanks'>absolute bangers that she pumping out on YouTube</Link>. I&rsquo;m still not sure.</p>

                <p><Img src="/oldie.jpg" width={225} height={338} style={{float: 'right', padding: '10px 0px 10px 10px'}} alt="This is hilarious"/>Anyways. It didn&rsquo;t take long before our mutual friend was kicked out of the equation and Shyanne and I became best friends. At 14 years old I spent almost 100% of my waking hours at the computer, on MSN, messaging this girl. We made plans to move to B.C. and live in a glass house, and I think we even made a pact to get married at 40 if we were both still single.</p>

                <p>We met for the first time at the Forks that same year during Canada Day. Shyanne snuck up on me in the dark, stole my phone, added her number, and then tried to gaslight me about already having it (which did work). A couple of months later we hung out for real for the first time and from that moment on I was wrapped around her little finger.</p>

                <p><Img src="/grad.jpg" width={225} height={150} style={{float: 'left', padding: '10px 10px 10px 0px'}} alt="Grade 12 Graduation"/>It&rsquo;s been a long 15 years full of ups and downs. The best part about growing up with the person who would become your wife is that by the time we say &ldquo;I do&rdquo;, we&rsquo;ll have already shared a whole lifetime with each other.</p>

                <p>2 years ago we flew to Paris, got engaged, and then packed our SUV and drove across the country to settle in B.C., just like we always planned. Every day I can&rsquo;t believe this is how my life actually turned out and I can&apos;t wait to enjoy every single day of the next 78 years together. </p>

                <div className="heroImage" style={{width: '100%', height: '600px', position: 'relative'}}>
                    <Img src={'/1N7A7311.jpg'} fill={true} alt="Proposal" style={{objectFit: 'cover', objectPosition: 'bottom'}}/>
                </div>


            </div>
        </>
    )
}