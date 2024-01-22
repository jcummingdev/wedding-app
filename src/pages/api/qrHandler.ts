import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== 'POST') {
        res.status(405).send({message: 'Unauthorized'})
        return
    }

    let invitationData

    try {
        invitationData = await lookUpCode(req.body.code)
    } catch (error) {
        res.status(500).send({message: 'There was a problem looking up your code. Please check your code and try again'})
    } finally {
        if (invitationData) {
            res.status(200).send({message: 'The code was validated successfully', invitationData: invitationData})
        } else {
            res.status(200).send({message: 'There was a problem looking up your code. Please check your code and try again'})
            return
        }        
    }
    
}

export async function lookUpCode(code:string){
    const prisma = new PrismaClient

    const invitationData = await prisma.invitations.findUnique({
        where: {
            id: code
        },
        select: {
            id: true,
            fName: true,
            lName: true,
            email: true,

            attending: true,
            receptionOnly: true,
            dietaryRestrictions: true,

            guests: true
        }
    })

    return invitationData
}