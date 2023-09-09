import Cookies from "universal-cookie"

const question = new Cookies(null, { path: '/lessons' });
// const differer = new Cookies(null, { path: '/' });

const MemberData = new Cookies(null, { path: '/' }) 

export { question, MemberData }