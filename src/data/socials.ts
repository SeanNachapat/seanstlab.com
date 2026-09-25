export interface SocialContact {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: "Primary" | "Code" | "Creative" | "Direct";
  description?: string;
  badge?: string;
}

export const socialContacts: SocialContact[] = [
  {
    id: "github",
    name: "GitHub",
    handle: "@SeanNachapat",
    url: "https://github.com/SeanNachapat",
    category: "Code",
    description: "Open source repositories, experiments, and systems engineering.",
    badge: "Code",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Nachapat Iamphuang",
    url: "https://www.linkedin.com/in/nachapati/",
    category: "Primary",
    description: "Professional background, research updates, and career milestones.",
    badge: "Network",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@seanst._",
    url: "https://www.instagram.com/seanst._",
    category: "Creative",
    description: "Visuals, creative design experiments, and everyday moments.",
    badge: "Visuals",
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@seanst._",
    url: "https://www.youtube.com/@seanst",
    category: "Creative",
    description: "Developer breakdowns, editing showcases, and tech walkthroughs.",
    badge: "Video",
  },
  {
    id: "email",
    name: "Email",
    handle: "sean@seanstlab.com",
    url: "mailto:sean@seanstlab.com",
    category: "Direct",
    description: "Direct inquiries for research, speaking, or collaborations.",
    badge: "Direct",
  },
];
