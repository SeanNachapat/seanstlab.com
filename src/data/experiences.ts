export interface Experience {
  id: number;
  title?: string;
  referLink?: string;
  click?: boolean;
  referal?: string;
  description?: string;
  date?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title:"Lecturer",
    referal:"Department of Computer Science, KMITL",
    description:"Conduct a free fundamental Java programming course for high school students about the importance of computer programming, data structures, if-else conditions, and loops.",
    date: "October 2025"
  },
  {
    id: 2,
    title:"Teaching Assistant",
    referLink:"https://cscamp.net/",
    referal:"Department of Computer Science, KMITL",
    description:"Volunteered as a lecturer to lead a 5-day lecture for 30 highschool students, about object-oriented programming (OOP) and fundamental Java programming.",
    date: "August 2025"
  }
];