import Cookies from "universal-cookie"

const qPage = new Cookies(null, { path: '/lessons' });

const MembershipStatus = {
    User: new Cookies(null, { path: '/' }),
    Guest: new Cookies(null, { path: '/', expires: new Date(Date.now() + 1800 * 1000) })
}

export { qPage, MembershipStatus }