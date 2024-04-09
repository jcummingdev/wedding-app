import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import nProgress from "nprogress";

interface ComponentProps {
    codeHandler: (params: boolean) => void
    invitationInfoHandler: (params: inviteInfo) => void
}

interface guestInfo {
    id: string
    fName: string
    lName: string
    dietaryRestrictions: string
}

interface inviteInfo {
    id: string | null
    fName: string | null
    lName: string | null
    email: string | null

    attending: boolean | null
    receptionOnly: boolean | null
    dietaryRestrictions: string | null

    guests: guestInfo[] | null
}

function InfoReq(props:ComponentProps) {
    const params = useSearchParams()
    const urlCode = params.get('id')

    const [code, setCode] = useState<string | null>()


    function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const value: string = e.target.value
        setCode(value)
    }

    async function submitCode(){
        // run API route with code to retrieve information

        // API call (built in validator)
        let {data} = await axios.post('/api/codeLookup', {
            code: code
        })

        if (data.invitationData) {
            props.codeHandler(true)
            props.invitationInfoHandler(data.invitationData)
        }

        // page will re-render with the guests info
    }

    async function lookUpURLCode(){
        let {data} = await axios.post('/api/qrHandler', {
            code: urlCode
        })

        if (data.invitationData) {
            props.codeHandler(true)
            props.invitationInfoHandler(data.invitationData)
        }
    }

    if (urlCode) {
        // If this is true, it means the QR code was scanned.
        // Run api route to get information from the database

        lookUpURLCode()
        
        return (
            <div className="loadingPrompt">
                <h2>Loading, Please Wait</h2>
            </div>
        )

    } else {

        // If this is false, it means they landed on this page
        // without scanning a QR code and need to type in a 
        // code manually.
        return (
            <div className="codeEntry">
                <h2>Please enter the code on your invitation</h2>
                <input type="text" placeholder="Enter Code Here" onChange={(e) => inputHandler(e)}/>
                <button onClick={submitCode}>Submit</button>
            </div>
        )
    }
}

export default function Rsvp(){

    const [validCode, setValidCode] = useState<boolean>(false)
    const [inviteInfo, setInviteInfo] = useState<inviteInfo>({
        id: '',
        fName: '',
        lName: '',
        email: '',
        attending: null,
        receptionOnly: null,
        dietaryRestrictions: '',
        guests: []
    })
    const [formMessage, setFormMessage] = useState<string>('')

    console.log(inviteInfo)

    function inputHanlder(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) {
        // input handler
        const field = e.target.name
        const value = e.target.value 

        //update InviteInfo accordinly
        setInviteInfo((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    }

    function guestInputHandler(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const field = e.target.name
        const value = e.target.value 

        const i = Number(e.target.id)

        setInviteInfo((prevState: inviteInfo) => {
            if (!prevState.guests) {
                // Handle the case where guests is initially null
                return prevState;
            }

            const updatedGuests = [...prevState.guests]; // Copy the guests array
            updatedGuests[i] = {
                ...updatedGuests[i],
                [field]: value,
            };
    
            return {
                ...prevState,
                guests: updatedGuests,
            };
        });
    }


    async function submitHandler(attending: boolean){
        // post the changes to the database

        nProgress.start()

        setInviteInfo((prevState) => ({
            ...prevState,
            attending: attending,
        }))

        try {
            const { data } = await axios.post('/api/rsvp', {
                invite: inviteInfo,
                attending: attending,
            });
    
            setFormMessage(data.message);
        } catch (error) {
            console.error('Error:', error);
            setFormMessage('Your RSVP was not able to be saved. Please try again later')
        } finally {
            nProgress.done();
        }

    }

    const guests = inviteInfo.guests?.map((guest, index) => {
        return (
            <div key={`guest${index}`} className="guest">
                <h3>Guest {index + 2}</h3>
                <label>
                    <div className="row">
                        <input type="text" name="fName" id={`${index}`} placeholder="First Name" onChange={(e) => guestInputHandler(e)} defaultValue={guest.fName? guest.fName : ''}/>
                        <input type="text" name="lName" id={`${index}`} placeholder="Last Name" onChange={(e) => guestInputHandler(e)} defaultValue={guest.lName? guest.lName : ''}/>
                    </div>
                    <textarea name="dietaryRestrictions" id={`${index}`} placeholder="Dietary Restrictions/Allergies" onChange={(e) => guestInputHandler(e)} defaultValue={guest.dietaryRestrictions? guest.dietaryRestrictions : ''}/>
                </label>

            </div>
        )
    })

    return(
        <>
            <Head>
                <title>RSVP | Cumming Charbonneau Wedding</title>
            </Head>

            <div className="container">

                {validCode? 
                    
                    <div className="confirmForm">
                        <h2>Hi {inviteInfo?.fName}, we can&apos;t wait to see you!</h2>

                        <div className="primaryGuest">
                            <label id="name">Please Confirm your details
                                <div className="row">
                                    <input type="text" name="fName" placeholder='First Name' defaultValue={inviteInfo.fName? inviteInfo.fName : ''} onChange={(e) => inputHanlder(e)}/>
                                    <input type="text" name="lName" placeholder='Last Name' defaultValue={inviteInfo.lName? inviteInfo.lName : ''} onChange={(e) => inputHanlder(e)}/>
                                </div>

                            </label>
                            <label id="email">Email Address: 
                                <input type="text" name='email' placeholder="email" defaultValue={inviteInfo.email? inviteInfo.email : ''} onChange={(e) => inputHanlder(e)}/>
                            </label>
                            <label id="restrictions">Do you have any dietary restrictions?
                                <textarea name="dietaryRestrictions" placeholder="Dietary Restrictions/Allergies" defaultValue={inviteInfo.dietaryRestrictions? inviteInfo.dietaryRestrictions : ''} onChange={(e) => inputHanlder(e)}/>
                            </label>
                        </div>

                        <div className="guestsSection">
                            {guests}
                        </div>
                        <div className="formAcceptance">
                            <p>Please note, due to limited seating availability, only guests listed above will be accounted for at the event. Additionally, both the ceremony and reception will not be child-friendly. </p>
                            <div className="formMessage">
                                <p>{formMessage}</p>
                            </div>
                            <button onClick={() => submitHandler(true)}>
                                Confirm attendance for me and my guests
                            </button>
                            <button onClick={() => submitHandler(false)}>
                                I will not be in attendance
                            </button>
                        </div>

                    </div> 
                : 
                    <InfoReq 
                        codeHandler={setValidCode}
                        invitationInfoHandler={setInviteInfo}
                    />                
                }

            </div>

        </>
    )
}