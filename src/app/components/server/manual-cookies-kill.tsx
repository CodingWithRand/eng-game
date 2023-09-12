'use server'

// pages/api/clear-cookie.js (server-side API route)
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Clear the cookie on the server by setting Max-Age to zero
  function auto_signout(){
    res.setHeader('Set-Cookie', 'myCookieName=; Max-Age=0; Path=/');

    res.status(200).json({ message: 'Cookie cleared successfully' });
  }
  
  return(
    <button onClick={auto_signout}>Kill</button>
  )
}