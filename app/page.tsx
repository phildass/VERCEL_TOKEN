'use client'

import { useState } from 'react'
import JobCard from '@/components/JobCard'
import SearchBar from '@/components/SearchBar'

// Sample job data
const sampleJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'Join our team to build cutting-edge web applications.',
    skills: ['React', 'TypeScript', 'Node.js'],
    postedDate: '2 days ago',
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Create beautiful and intuitive user experiences.',
    skills: ['Figma', 'UI/UX', 'Prototyping'],
    postedDate: '1 week ago',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k - $110k',
    description: 'Build responsive and performant web interfaces.',
    skills: ['JavaScript', 'React', 'CSS'],
    postedDate: '3 days ago',
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Analytics Co.',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$130k - $170k',
    description: 'Analyze data and build machine learning models.',
    skills: ['Python', 'ML', 'SQL'],
    postedDate: '5 days ago',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$110k - $150k',
    description: 'Maintain and optimize cloud infrastructure.',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    postedDate: '1 day ago',
  },
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [jobTypeFilter, setJobTypeFilter] = useState('')

  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesJobType = !jobTypeFilter || job.type === jobTypeFilter
    return matchesSearch && matchesLocation && matchesJobType
  })

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Job Seeker</h1>
          <p className="text-gray-600 mt-1">Find your dream job today</p>
        </div>
      </header>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          locationFilter={locationFilter}
          onLocationChange={setLocationFilter}
          jobTypeFilter={jobTypeFilter}
          onJobTypeChange={setJobTypeFilter}
        />

        {/* Results Count */}
        <div className="mt-6 mb-4">
          <p className="text-gray-600">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500">
            © 2025 Job Seeker. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
