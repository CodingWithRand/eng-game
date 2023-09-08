import Cookies from "universal-cookie"

const question = new Cookies(null, { path: '/lessons/select-lesson' });

const MembershipStatus = {
    User: new Cookies(null, { path: '/' }),
    Guest: new Cookies(null, { path: '/', expires: new Date(Date.now() + 1800 * 1000) })
}

const MemberData = {
  name: new Cookies(null, { path: '/' }),
  lessons: new Cookies(null, { path: '/lessons' })
}

export { question, MembershipStatus, MemberData }