import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

const JobDetails: React.FC = () => {
  const [job, setJob] = useState<Job | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
      setJob(response.data);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
      <p className="text-xl mb-2">{job.company}</p>
      <p className="text-gray-600 mb-4">{job.location}</p>
      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold mb-2">Job Description</h3>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetails;