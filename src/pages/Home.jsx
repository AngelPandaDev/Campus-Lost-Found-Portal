import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-black space-y-20">
      <section className="py-20">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black leading-tight">
            Lost something? <br />
            <span className="text-black">
              We'll help you find it.
            </span>
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed">
            The official campus lost and found portal. Reconnecting students with their belongings through a simple, transparent, and efficient system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/browse" className="btn-primary w-full sm:w-auto text-lg">
              Browse Items
            </Link>
            <Link to="/post" className="btn-secondary w-full sm:w-auto text-lg">
              Report an Item
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 space-y-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Real-time Updates</h3>
          <p className="text-gray-600">Get notified immediately when someone posts an item that matches your description.</p>
        </div>
        
        <div className="glass-card p-8 space-y-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Verified Claims</h3>
          <p className="text-gray-600">Our system ensures that items are returned to their rightful owners through verification.</p>
        </div>

        <div className="glass-card p-8 space-y-4">
          <div className="w-12 h-12 bg-gray-100 text-black rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Fast Retrieval</h3>
          <p className="text-gray-600">Quickly search through categories, locations, and dates to find your items faster.</p>
        </div>
      </section>
    </div>
  )
}
