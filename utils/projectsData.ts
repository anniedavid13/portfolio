export interface ProjectsDataTypes {
  title: string;
  screenshot: string;
  description: string;
  code: string;
  liveSite: string;
  techStack: {
    id: number;
    img: string;
  }[];
}

export const projectsData: ProjectsDataTypes[] = [
  {
    title: 'aMovies',
    screenshot: '/assets/amovies.png',
    description: `About
    This is a movie information web application built with React, TMDB API and SASS Library. The application allows users to search for movies and view detailed information such as release date, budget, revenue, and more.`,
    code: 'https://github.com/anniedavid13/aMovies',
    liveSite: 'https://amovies.netlify.app/',
    techStack: [
      {
        id: 1,
        img: '/assets/logos/react.png',
      },
      {
        id: 2,
        img: '/assets/logos/sass.png',
      },
    ],
  },
  {
    title: 'Spotify Clone',
    screenshot: '/assets/spotify.png',
    description: `This is a simple Spotify clone application built with React and the Spotify API. The app allows users to search for and listen to their favorite songs and artists.`,
    code: 'https://github.com/anniedavid13/spotify-clone',
    liveSite: 'https://www.linkedin.com/posts/annie-david_connections-html-css-activity-6961311460664725504-Tii6?utm_source=share&utm_medium=member_desktop',
    techStack: [
      {
        id: 1,
        img: '/assets/logos/nextjs.png',
      },
      {
        id: 2,
        img: '/assets/logos/tailwindcss.png',
      },
      {
        id: 3,
        img: '/assets/logos/firebase.png',
      },
    ],
  },
  {
    title: 'Expense Tracker',
    screenshot: '/assets/expense-tracker.png',
    description: `This project involved creating a web application for managing expenses and budgeting using the React and React Router DOM libraries. The app allows users to input their expenses and income, categorize them, and view their financial status in various charts and graphs. One of the key features of the app is the use of local storage, which enables the app to save and retrieve user data in the browser, even after they have closed or refreshed the app.`,
    code: 'https://github.com/anniedavid13/expense-tracker.git',
    liveSite: 'https://expensetracker-by-anna.netlify.app/',
    techStack: [
      {
        id: 2,
        img: '/assets/logos/react.png',
      },
      {
        id: 3,
        img: '/assets/logos/react-router.png',
      },
    ],
  },
  {
    title: 'Artizer',
    screenshot: '/assets/artizer.png',
    description: `This project involves building an Article Summarizer application using OpenAI's GPT model. The app will enable users to input an article and generate a concise summary of its main points using advanced natural language processing techniques`,
    code: 'https://github.com/anniedavid13/Summarizer-WebApp',
    liveSite: 'https://artizer.netlify.app/',
    techStack: [
      {
        id: 2,
        img: '/assets/logos/react.png',
      },
      {
        id: 3,
        img: '/assets/logos/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Blog Website',
    screenshot: '/assets/blog.png',
    description: `This project involved developing a fully responsive Blog App using React JS, NextJS, Tailwind CSS, GraphQL, and GraphCMS. The app is designed to provide users with an intuitive and seamless experience, with lightning-fast page load times due to advanced React and Next.js best practices for static generation.`,
    code: 'https://github.com/anniedavid13/BlogWebsite',
    liveSite: 'https://blogwebsitebyannie.netlify.app/',
    techStack: [
      {
        id: 2,
        img: '/assets/logos/react.png',
      },
      {
        id: 3,
        img: '/assets/logos/tailwindcss.png',
      },
      {
        id: 2,
        img: '/assets/logos/nextjs.png',
      },
      {
        id: 3,
        img: '/assets/logos/graphql.png',
      },
    ],
  },
];
