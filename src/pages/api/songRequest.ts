import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiHandler, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST'){
        res.status(405).send({message: 'Unauthorized'})
        return
    }

    try {
        const prisma = new PrismaClient

        const songRequest = await prisma.songs.create({
            data: {
                artist: req.body.artist,
                title: req.body.title,
                requestedBy: req.body.name
            }
        })
        res.status(200).send({message: 'The song has successfully been requested!'})
        return
    } catch (error) {
        res.status(500).send({message: 'Please try again'})
        return
    } 
}