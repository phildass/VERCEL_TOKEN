# Job Seeker

A modern job seeking application built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🔍 **Job Search**: Search jobs by title, company, or keywords
- 📍 **Location Filter**: Filter jobs by location or find remote positions
- 💼 **Job Type Filter**: Filter by Full-time, Part-time, Contract, or Internship
- 🎨 **Modern UI**: Clean and responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🚀 **Vercel Ready**: Optimized for deployment on Vercel

## Technologies Used

- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phildass/VERCEL_TOKEN.git
cd VERCEL_TOKEN
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Alternatively, you can deploy using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page with job listings
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── JobCard.tsx     # Individual job listing card
│   └── SearchBar.tsx   # Search and filter component
├── public/             # Static assets (if needed)
└── package.json        # Project dependencies and scripts
```

## Features in Detail

### Job Listings
Browse through available job opportunities with detailed information including:
- Job title and company name
- Location and job type
- Salary range
- Job description
- Required skills
- Posted date

### Search and Filter
- **Search**: Find jobs by searching for keywords in title, company, or description
- **Location Filter**: Enter a city, state, or "remote" to filter by location
- **Job Type Filter**: Select from Full-time, Part-time, Contract, or Internship positions

### Responsive Design
The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## Future Enhancements

Potential features for future releases:
- User authentication and profiles
- Job application tracking
- Save favorite jobs
- Real-time job data from APIs
- Advanced filters (salary range, experience level)
- Email notifications for new jobs
- Company profiles and reviews

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
