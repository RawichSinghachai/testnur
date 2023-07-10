import { NextApiRequest, NextApiResponse } from 'next';
import { findAll,} from '@/server/controllers/Device';

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'GET'){
        findAll(req,res)
    }
    else if(req.method === 'POST'){
        
    }
}

export default handler