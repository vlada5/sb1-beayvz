import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
      <p className="text-xl mb-8">Search thousands of job listings from top companies</p>
      <Link to="/jobs" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300">
        <Search size={20} className="mr-2" />
        Start Your Job Search
      </Link>
    </div>
  );
};

export default Home;