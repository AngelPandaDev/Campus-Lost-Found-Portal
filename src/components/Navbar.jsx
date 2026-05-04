import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive 
        ? 'bg-indigo-50 text-indigo-600 font-semibold shadow-sm' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
    }`

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3">
      <nav className="max-w-5xl mx-auto glass-card flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            CampusFind
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/browse" className={linkClass}>Browse Items</NavLink>
          <NavLink to="/post" className="ml-4 btn-primary !py-2 !px-5 text-sm">
            Report Item
          </NavLink>
        </div>

        {/* Mobile trigger - simple placeholder for now */}
        <div className="md:hidden">
          <button className="p-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}