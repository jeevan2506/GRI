// Script to initialize the Firebase database with sample field visits
import { database } from './config';
import { ref, set } from 'firebase/database';

// Sample field visits data
const sampleVisits = {
  visit1: {
    id: 'visit1',
    title: 'Rural Innovation Workshop',
    location: 'Coimbatore Rural District',
    date: '2023-12-15',
    description: 'A hands-on workshop exploring sustainable agricultural practices and rural innovation technologies.',
    image: 'https://via.placeholder.com/300x200',
    capacity: 25,
    registrations: 12
  },
  visit2: {
    id: 'visit2',
    title: 'Sustainable Farming Field Study',
    location: 'Pollachi',
    date: '2024-01-20',
    description: 'Explore sustainable farming methods and interact with local farmers implementing innovative techniques.',
    image: 'https://via.placeholder.com/300x200',
    capacity: 30,
    registrations: 8
  },
  visit3: {
    id: 'visit3',
    title: 'Agricultural Technology Demonstration',
    location: 'Tiruppur District',
    date: '2024-02-10',
    description: 'Demonstration of new agricultural technologies and their implementation in rural settings.',
    image: 'https://via.placeholder.com/300x200',
    capacity: 40,
    registrations: 15
  },
  visit4: {
    id: 'visit4',
    title: 'Rural Entrepreneurship Meetup',
    location: 'Salem',
    date: '2023-11-05',
    description: 'A past event focused on rural entrepreneurship and innovation in village industries.',
    image: 'https://via.placeholder.com/300x200',
    capacity: 35,
    registrations: 35
  },
  visit5: {
    id: 'visit5',
    title: 'Water Conservation Project Visit',
    location: 'Erode District',
    date: '2023-10-12',
    description: 'A visit to water conservation projects implemented in drought-prone areas.',
    image: 'https://via.placeholder.com/300x200',
    capacity: 20,
    registrations: 20
  }
};

// Function to initialize the database
export const initializeDatabase = () => {
  const fieldVisitsRef = ref(database, 'fieldVisits');
  
  // Set the sample field visits data
  set(fieldVisitsRef, sampleVisits)
    .then(() => {
      console.log('Database initialized with sample field visits');
    })
    .catch((error) => {
      console.error('Error initializing database:', error);
    });
};

// Call this function from your app initialization if needed
// initializeDatabase();