import {
  IconDeviceLaptop,
  IconApps,
  IconDeviceMobile,
  IconRefresh,
  IconMessageCircle,
  IconPalette,
  IconCode,
  IconRocket,
} from '@tabler/icons-react';

// What Joshua offers as a freelancer.
export const services = [
  {
    icon: IconDeviceLaptop,
    color: 'lavender',
    title: 'Marketing & business sites',
    description:
      'Fast, modern, mobile-friendly websites that make small businesses, non-profits, and personal brands look great and get results.',
  },
  {
    icon: IconApps,
    color: 'coral',
    title: 'Web applications',
    description:
      'Full-stack apps with real functionality like dashboards, booking, accounts, and databases, built with React and a solid back end.',
  },
  {
    icon: IconDeviceMobile,
    color: 'mint',
    title: 'iOS apps',
    description:
      'Native iOS apps built in SwiftUI, taken from idea to the App Store. I have shipped apps that people actually download and use.',
  },
  {
    icon: IconRefresh,
    color: 'sky',
    title: 'Redesigns & refreshes',
    description:
      'Have a site that feels dated or clunky? I rebuild it into something bright, quick, and easy to use, like this one.',
  },
];

// How working together goes.
export const process = [
  {
    icon: IconMessageCircle,
    color: 'butter',
    step: '01',
    title: 'Chat',
    description: "We talk through your idea, goals, and budget. No jargon, just figuring out what you actually need.",
  },
  {
    icon: IconPalette,
    color: 'pink',
    step: '02',
    title: 'Design',
    description: 'I map out the look and flow so you can see and shape the direction before a single line of code.',
  },
  {
    icon: IconCode,
    color: 'lavender',
    step: '03',
    title: 'Build',
    description: 'I build it for real, sharing progress along the way so there are no surprises at the end.',
  },
  {
    icon: IconRocket,
    color: 'coral',
    step: '04',
    title: 'Launch',
    description: 'We put it live, make sure everything runs smoothly, and I stay around for tweaks and support.',
  },
];
