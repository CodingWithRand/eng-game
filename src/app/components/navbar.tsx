import Image from "next/image"

export default function NavigationBar() {
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
          <li className='reg'>
            <button>Sign Up</button>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    )
}