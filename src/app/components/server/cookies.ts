import Cookies from "universal-cookie"

const question = new Cookies(null, { path: '/lessons' });
const MemberData = new Cookies(null, { path: '/' }) 

export { question, MemberData }