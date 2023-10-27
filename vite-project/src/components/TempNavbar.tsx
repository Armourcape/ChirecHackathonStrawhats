import { Link } from "react-router-dom"

export function Nav() {
    return (
      <nav
      >
        <Link
          to='/'
        >
          Homepage
        </Link>
        <Link
          to='/1'
        >
          One
        </Link>
        <Link
          to='/profile'
        >
          Profile
        </Link>
        <Link
          to='/signup'
        >
          Signup
        </Link>
      </nav>
    )
  }