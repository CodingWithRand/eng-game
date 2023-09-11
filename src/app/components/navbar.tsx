import Image from "next/image"
import { MemberData } from "@/server/cookies"


export default function NavigationBar() {
    function SelectedLesson()
    {
  console.log(MemberData.get("user").loggedIn !== null && MemberData.get("user").loggedIn === true && MemberData.get("user").lessons.some(elem => elem !== ''))
      if(MemberData.get("user").loggedIn === null || MemberData.get("user").loggedIn === false) return(
          <>
            <button>Sign Up</button>
            <button>Login</button>
          </>
        )
      else if(MemberData.get("user").loggedIn !== null && MemberData.get("user").loggedIn === true && MemberData.get("user").lessons.some(elem => elem !== '')){
          return (
            <>
            <label>{
            `
            Select Lesson: ${MemberData.get("user").lessons[MemberData.get("user").lessons.findIndex(elem => elem !== '')]}
            `  
            }</label>
            <label>
            {
              `Name: ${MemberData.get("user").name}`
            }
            </label>
            </>
        )
      }
    }
    return(
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
          <SelectedLesson />
          <li className='reg'>
            <SelectedLesson />
          </li>
        </ul>
      </nav>
    )
}