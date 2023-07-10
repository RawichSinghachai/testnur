// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
  if(req.method === 'GET'){
      res.send('get ok')
  }
  else if(req.method === 'POST'){
      const {name,id} = req.body
      res.send(`name :${name} and ${id} : id`)
  }
}

export default handler
