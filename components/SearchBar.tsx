interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  locationFilter: string
  onLocationChange: (value: string) => void
  jobTypeFilter: string
  onJobTypeChange: (value: string) => void
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  locationFilter,
  onLocationChange,
  jobTypeFilter,
  onJobTypeChange,
}: SearchBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div className="md:col-span-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Jobs
          </label>
          <input
            type="text"
            id="search"
            placeholder="Job title, company, or keyword"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Location Filter */}
        <div className="md:col-span-1">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="City, state, or remote"
            value={locationFilter}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Job Type Filter */}
        <div className="md:col-span-1">
          <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-2">
            Job Type
          </label>
          <select
            id="jobType"
            value={jobTypeFilter}
            onChange={(e) => onJobTypeChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>
    </div>
  )
}
