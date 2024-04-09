import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from "next/types";

interface guestInfo {
    id: string
    fName: string
    lName: string
    dietaryRestrictions: string
}

interface inviteInfo {
    id: string
    fName: string
    lName: string
    email: string | null

    attending: boolean | null
    receptionOnly: boolean | null
    dietaryRestrictions: string | null

    guests: guestInfo[] | null
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== 'POST') {
        res.status(405).send({message: 'Unauthorized'})

        return
    }

    console.log(req.body.invite)

    try {
        await updateInvitation(req.body.invite, req.body.attending)
        res.status(200).send({message: 'You have been successfully confirmed!'})
    } catch (err) {
        res.status(500).send({message: 'There was a problem saving your RSVP'})
    } 
    
}

export async function updateInvitation(inviteData:inviteInfo, attending:boolean){
    const prisma = new PrismaClient

    console.log('function firing')

    const guestsUpdate: any = {
        updateMany: inviteData.guests?.map(guest => ({
            where: { id: guest.id },
            data: {
                fName: guest.fName,
                lName: guest.lName,
                dietaryRestrictions: guest.dietaryRestrictions,
                // Add other fields as needed
            },
        })),
    };

    await prisma.invitations.update({
        where: {
            id: inviteData.id,
        },
        data: {
            fName: inviteData.fName,
            lName: inviteData.lName,
            email: inviteData.email,
            attending: attending,
            guests: guestsUpdate,
        },
    });
}