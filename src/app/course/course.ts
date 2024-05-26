export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  format: string;
  instructor: string;
  price: number;
  topics: string[];
}

// Create three course objects
export const course1: Course[] = [{
  id:1,
  title: "Introduction to Web Development",
  description: "Learn the basics of web development, including HTML, CSS, and JavaScript.",
  duration: "8 weeks",
  format: "Online",
  instructor: "Jane Smith",
  price: 299,
  topics: [
      "HTML Basics",
      "CSS Fundamentals",
      "JavaScript Essentials",
      "Building Your First Website"
  ]
},{
  id:2,
  title: "Advanced JavaScript Techniques",
  description: "Deep dive into advanced JavaScript concepts and techniques for experienced developers.",
  duration: "6 weeks",
  format: "Online",
  instructor: "John Doe",
  price: 399,
  topics: [
      "Asynchronous JavaScript",
      "JavaScript Design Patterns",
      "Functional Programming",
      "Optimizing Performance"
  ]
},{
  id:3,
  title: "Full-Stack Development with React and Node.js",
  description: "Learn to build full-stack web applications using React for the frontend and Node.js for the backend.",
  duration: "12 weeks",
  format: "FaceToFace",
  instructor: "Alice Johnson",
  price: 599,
  topics: [
      "React Fundamentals",
      "State Management with Redux",
      "Node.js and Express",
      "Building RESTful APIs",
      "Database Integration with MongoDB"
  ]
} ];
