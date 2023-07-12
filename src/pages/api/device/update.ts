import { NextApiRequest, NextApiResponse } from 'next';
import { update,} from '@/server/controllers/Device';

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        update(req,res)
    }
    else if(req.method === 'GET'){
        
    }
}

export default handler