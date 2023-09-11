// 'use server'

// import { NextApiRequest, NextApiResponse } from "next";
// import { usePathname } from "next/navigation";
import Cookies from "universal-cookie"

const question = new Cookies(null, { path: '/lessons'});
const MemberData = new Cookies(null, { path: '/'}) 
const UserStats = new Cookies(null, { path: '/lessons' })


export { question, MemberData, UserStats }

// export default async function setServerCookie(req: NextApiRequest, res: NextApiResponse, ca: { cookieName: string, cookieValue: any | { [key: string]: any | any[] }, path?: string, maxAge?: number }) {
//     let cookieAttributes: string[] = [ `${ca.cookieName}=${ca.cookieValue}` ]
//     if(ca.maxAge !== undefined) cookieAttributes.push(`Max-Age=${ca.maxAge}`)
//     if(ca.path !== undefined) cookieAttributes.push(`Path=${ca.path || usePathname()}`)

//     res.setHeader('Set-Cookie', cookieAttributes);
  
//     res.status(200).json({ message: 'Cookie set successfully' });
// };