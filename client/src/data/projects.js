// Project archive. `sort` is a rough recency weight (higher = newer) used to
// order the Work archive. `featured` projects surface on the Home page.
// `logo` = show that image on the card (used for iOS apps). Projects with a
// website link but no logo get an auto-generated homepage screenshot.
// `showPreview: false` hides the top-of-card image entirely (defaults to true).
import laxLogo from '../assets/laxapp.webp';
import pantryLogo from '../assets/pantrylink.webp';
import wingflowLogo from '../assets/Wingflow.webp';

export const projects = [
  {
    title: 'Lax App',
    description:
      'An iOS app that uses a custom-trained AI computer vision model to automatically track a lacrosse player’s wall ball reps in real time. Point your camera at the wall and it counts for you.',
    technologies: ['Swift', 'SwiftUI', 'iOS', 'Computer Vision', 'CoreML', 'AI'],
    logo: laxLogo,
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/lax-app-wall-ball-tracker/id6782369903' },
      { label: 'Website', url: 'https://laxapp.joshuasambol.com' },
    ],
    status: 'Live',
    date: 'Jan 2026',
    sort: 102,
    showPreview: true,
    featured: true,
  },
  {
    title: 'PantryLink',
    description:
      'A full-stack iOS application designed to help food banks distribute food efficiently and reduce waste, while providing essential resources to those facing food insecurity. Developed as part of the Coder School Pro Team initiative.',
    technologies: ['SwiftUI', 'iOS', 'Full Stack', 'React', 'MongoDB', 'Python', 'Flask', 'BCrypt'],
    logo: pantryLogo,
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/pantrylink/id6754800608' },
      { label: 'Website', url: 'https://pantrylink.joshuasambol.com' },
      { label: 'GitHub', url: 'https://github.com/posaune14/yellow_team' },
    ],
    status: 'Live',
    date: 'October 2025',
    sort: 100,
    showPreview: true,
    challenge: 'Winner, Congressional App Challenge 2025',
    featured: true,
  },
  {
    title: 'WingFlow',
    description:
      'An interactive iOS playground that helps users understand how air flows over different wing shapes and configurations. Includes lift and drag gauges, plus an AR mode to help visualize aerodynamics for education.',
    technologies: ['Swift', 'SwiftUI', 'Swift Playgrounds', 'Augmented Reality'],
    logo: wingflowLogo,
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/wingflow/id6772001142' },
      { label: 'Website', url: 'https://wingflow.joshuasambol.com' },
    ],
    status: 'Live',
    date: 'Feb 2026',
    sort: 99,
    showPreview: true,
    challenge: 'Swift Student Challenge 2026',
    featured: true,
  },
  {
    title: 'PawsRx',
    description:
      "A feature-rich iOS application designed to help pet owners manage their pets' health and wellness.",
    technologies: ['React', 'JavaScript', 'Node.js', 'Python'],
    links: [
      {label: 'App Store', url: 'https://apps.apple.com/us/app/pawsrx/id6755554363'},
      {label: 'Website', url: 'https://pawsrx.joshuasambol.com' }
    ],
    status: 'Live',
    date: 'Nov 2025',
    sort: 98,
    showPreview: true,
    featured: true,
  },
  {
    title: 'L Weir Consulting',
    description:
      'A warm, professional WordPress website for college counselor Lori Weir. Built to showcase her services and help students and families get in touch. A very happy client.',
    technologies: ['WordPress', 'Web Design', 'SEO'],
    links: [{ label: 'Website', url: 'https://lweirconsultingllc.com' }],
    date: 'Jan 2026',
    sort: 97,
    showPreview: true,
    clientWork: true,
    featured: true,
  },
  {
    title: 'Support Jewish Uganda',
    description:
      'A website created for a non-profit organization to help them raise money for their cause.',
    technologies: ['React', 'JavaScript', 'Mantine', 'Framer Motion'],
    links: [{ label: 'Website', url: 'https://sju.joshuasambol.com/' }],
    date: 'Sep 2025',
    sort: 95,
    showPreview: true,
    clientWork: true,
  },
  {
    title: 'The Coder Fair',
    description:
      'A full-stack React-based web application created to help organize and manage events for theCoderSchool (Montgomery, NJ).',
    technologies: ['React', 'JavaScript', 'Node.js', 'Python'],
    links: [{ label: 'Website', url: 'https://coderfair.com' }],
    date: 'May 2025',
    sort: 90,
    showPreview: false,
  },
  {
    title: 'Select 100 Lacrosse',
    description:
      'A website created for a local lacrosse coach to help them manage their event(Event passed, website has been disabled).',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    date: 'Apr 2025',
    sort: 88,
    showPreview: false,
    clientWork: true,
  },
  {
    title: 'OpenBoard',
    description: 'A full-stack React and Node.js application that lets you chat on a message board.',
    technologies: ['React', 'Node.js', 'JavaScript', 'Express', 'MongoDB'],
    links: [{ label: 'Website', url: 'https://openboard.joshuasambol.com/' }],
    date: 'Mar 2025',
    sort: 80,
    showPreview: false,
  },
  {
    title: 'Sunny Dayz',
    description:
      'A web application that uses an API to fetch weather data for a specific location and display it to the user.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'Website', url: 'https://sunnydayz.joshuasambol.com' }],
    date: 'Apr 2023',
    sort: 20,
    showPreview: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
