import { Profile } from '../types/community';

export const communityProfiles: Profile[] = [
  {
    id: 1,
    name: 'Veerendragouda H',
    role: 'Project Lead',
    image: '/team/veerendragouda.jpg', 
    bio: 'Leading the technical development and implementation of AI-driven cyberbullying prevention systems.',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/veerendragouda' },
      { platform: 'github', url: 'https://github.com/veerendragouda' },
    ],
  },
  {
    id: 2,
    name: 'Lokesh J',
    role: 'Technical Director',
    image: '/team/lokesh.jpg',
    bio: 'Spearheading the development of advanced machine learning algorithms for real-time threat detection and prevention.',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/lokesh' },
      { platform: 'github', url: 'https://github.com/lokesh' },
    ],
  },
  {
    id: 3,
    name: 'Sheetal Ramesh',
    role: 'Research Lead',
    image: '/team/sheetal.jpg',
    bio: 'Expert in digital safety protocols and cyberbullying prevention strategies, leading research initiatives for safer online spaces.',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/sheetal' },
      { platform: 'twitter', url: 'https://twitter.com/sheetal' },
    ],
  },
  {
    id: 4,
    name: 'S Yeswanth Sai',
    role: 'Community Safety Director',
    image: '/team/yeswanth.jpg',
    bio: 'Dedicated to implementing comprehensive safety measures and fostering a supportive online environment for users.',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/yeswanth' },
      { platform: 'github', url: 'https://github.com/yeswanth' },
    ],
  },
];