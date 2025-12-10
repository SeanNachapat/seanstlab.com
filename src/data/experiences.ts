export interface Experience {
  id: number;
  title?: string;
  referLink?: string;
  click?: boolean;
  referal?: string;
  description?: string;
  date?: string;
  type?: string;
  tags?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title:"Lecturer",
    referal:"Department of Computer Science, KMITL",
    description:"Conducted a free fundamental Java programming course for high school students about the importance of computer programming, data structures, if-else conditions, and loops.",
    date: "October 2025",
    type:"cs",
    tags:["Public Lectures", "Java"]
  },
  {
    id: 2,
    title:"Teaching Assistant",
    referLink:"https://cscamp.net/",
    referal:"Department of Computer Science, KMITL",
    description:"Volunteered as a lecturer to lead a 5-day lecture for 30 highschool students, about object-oriented programming (OOP) and fundamental Java programming.",
    date: "August 2025",
    type:"cs",
    tags:["Public Lectures", "Java", "OOP"]
  },
  {
    id: 3,
    title:"Video Editor & Content Creator",
    referLink:"https://www.youtube.com/@micrubik",
    referal:"Micrubik",
    description:"Delivered script-written and edited 50+ short-form video contents for clients and Micrubik.",
    date: "June 2024",
    type:"content",
    tags:["Scriptwriting", "Creative Content Creation"]
  }
];