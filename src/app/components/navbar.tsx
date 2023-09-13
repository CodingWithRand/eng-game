import Image from "next/image"
import { MemberData } from "@/server/cookies"


export default function NavigationBar() {
  function SelectedLesson() {
    if (MemberData.get("user") === undefined) return (
      <>
        <button>Sign Up</button>
        <button>Login</button>
      </>
    );
    if (MemberData.get("user").loggedIn !== null && MemberData.get("user").loggedIn === true && MemberData.get("user").lessons?.some((elem: string) => elem !== ''))
      return (
        <>
          <label>{
            `
            Select Lesson: ${MemberData.get("user").lessons[MemberData.get("user").lessons.findIndex((elem: string) => elem !== '')]}
            `
          }</label>
          <label>
            {
              `Name: ${MemberData.get("user").name}`
            }
          </label>
        </>
      )
    else return (
      <>
        <button>Sign Up</button>
        <button>Login</button>
      </>
    )
  }
  return (
    <nav className='nav-bar'>
      <ul>
        <li className='menu'>
          <button>
            <Image src="/imgs/icons/main-menu.png" width={40} height={40} alt='Main menu' />
          </button>
        </li>
        <li className='app-name'>
          <div>Thringo</div>
        </li>
        <li className='reg'>
          <SelectedLesson />
        </li>
      </ul>
    </nav>
  )
}