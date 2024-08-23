export default function DirectionsPage() {
    return (
        <>
        
            <div className="container" id="intro">
                <h1>How to get to the ceremony</h1>
                <p>We've received a number of questions relating to the location of the ceremony and how to navigate the gardents. Below, you'll find directions and video walkthroughs to help you get to the Leo Mol Sculpture Garden.</p>
            </div>
            <div className="sectionBlock colorBackground" id="directions">
                <div className="container ">
                    <h2>Directions</h2>
                    <p><strong>Start at the entrance of Assiniboine Park at the intersection of Corydon and Shaftesbury.</strong></p>
                    <ul>
                        <li><p>Drive straight through the entrance all the way to the pavilion.</p></li>
                        <li><p>Take a right at the pavilion.</p></li>
                        <li><p>Turn left following the signs for the duck pond. <strong>It will be your second left, banking off the main road.</strong></p></li>
                        <li><p>Follow the road until you reach the duck pond.</p></li>
                        <li><p>At the end of the road you can turn left to find parking, or turn right to be dropped off at the side gates of the sculpture garden.</p></li>
                    </ul>

                    <h2>Video Walkthrough</h2>
                    <p>Please watch the videos below for video walk throughs of both driving and the gardens. </p>
                </div>
                <div>
                    <h3>Driving</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hwLqf9LzR-c?si=Vayv7HJoB6dMU7d7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div>
                    <h3>English Garden/Duck Pond Entrance</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LHatcJNk4sg?si=AzHonPU_jxUiZiBQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div>
                    <h3>Leo Mol Sculpture Garden/Side Entrance</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TnfqvvIfetc?si=qRE20HL-vjClmZCl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </>

    )
}