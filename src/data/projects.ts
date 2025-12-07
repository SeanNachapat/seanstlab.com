export interface Project {
  id: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  pageLink?: string;
  altText?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title:"Go-Shrimp",
    description:"Web Application for Shrimp Farmers integrated with MongoDB database, image classification and disease prediction",
    imageUrl:"",
    pageLink:"https://github.com/SeanNachapat/go-shrimp",
    tags:["Javascript", "NEXT.js", "Vercel", "MongoDB", "GeminiAPI"]
  },
  {
    id: 3,
    title:"N-Pochna | Diet Assistant",
    description:"This project is made for educational purposes as a senior project at Kasetsart University Laboratory School Multilingual Program. N'Pochna is a LINE Bot integrated with Edamam API to assist in managing diets and workouts. Made by Nachapat Iamphuang.",
    imageUrl:"public/Project/N-Pochna.png",
    pageLink:"https://github.com/SeanNachapat/N-Pochna",
    tags:["Javascript", "Node.js", "LINE", "RapidAPI", "Ngrok"]
  },
  {
    id: 2,
    title:"What's The Word",
    description:"This project was created for educational purposes by Computer Science students at KMITL. What's The Word? is a web application game for Thai students to practice their knowledge of English vocabulary, categorized by the Common European Framework of Reference for Languages(CEFR).",
    imageUrl:"public/Project/wtw.png",
    pageLink:"https://github.com/SeanNachapat/whatstheword",
    tags:["Javascript", "NEXT.js", "Vercel"]
  }
];
