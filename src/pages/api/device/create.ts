import { NextApiRequest, NextApiResponse } from 'next';
import { createDocument } from '@/server/controllers/Device';

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        createDocument(req,res)
    }
    else if(req.method === 'PUT'){
        
    }
}

export default handler