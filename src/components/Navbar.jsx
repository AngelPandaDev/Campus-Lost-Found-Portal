import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    (isActive ? 'text-blue-600 font-bold' : 'text-gray-700') +
    ' px-8 py-4 rounded hover:bg-gray-100 transition-colors duration-150'

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between h-14 px-2">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 mr-6 select-none">Lost&Found</span>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/browse" className={linkClass}>
            Browse
          </NavLink>
          <NavLink to="/post" className={linkClass}>
            Post
          </NavLink>
        </div>
      </div>
    </nav>
  )
}