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
    title: "Go-Shrimp",
    description: "Web Application for Shrimp Farmers integrated with MongoDB database, image classification and disease prediction",
    imageUrl: "",
    pageLink: "https://github.com/SeanNachapat/go-shrimp",
    tags: ["Javascript", "NEXT.js", "Vercel", "MongoDB", "GeminiAPI"]
  },
  {
    id: 2,
    title: "What's The Word",
    description: "This project was created for educational purposes by Computer Science students at KMITL. What's The Word? is a web application game for Thai students to practice their knowledge of English vocabulary, categorized by the Common European Framework of Reference for Languages(CEFR).",
    imageUrl: "/images/wtw.png",
    pageLink: "https://github.com/SeanNachapat/whatstheword",
    tags: ["GeminiAPI", "Javascript", "NEXT.js", "Vercel"]
  },
  {
    id: 2,
    title: "jangsimantongtorn",
    description: "This project was created for ENTIRELY satirical purposes. Jangsimantongtorn is a course withdrawal advisor who, based on the score, will recommend whether the course should be withdrawn. Integrated with the Gemini 2.0 flash model to generate insulting and hateful advice.",
    imageUrl: "/images/JMT.png",
    pageLink: "https://jangsimantongtorn.vercel.app",
    tags: ["GeminiAPI", "Javascript", "NEXT.js", "Vercel"]
  },
  {
    id: 20,
    title: "N-Pochna | Diet Assistant",
    description: "This project is made for educational purposes as a senior project at Kasetsart University Laboratory School Multilingual Program. N'Pochna is a LINE Bot integrated with Edamam API to assist in managing diets and workouts. Made by Nachapat Iamphuang.",
    imageUrl: "/images/N-Pochna.png",
    pageLink: "https://github.com/SeanNachapat/N-Pochna",
    tags: ["Javascript", "Node.js", "LINE", "RapidAPI", "Ngrok"]
  },
];
