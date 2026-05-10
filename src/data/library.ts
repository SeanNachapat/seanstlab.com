export interface LibraryItem {
  id: string;
  name: string;
  description: string;
  category: "Workstation" | "Peripherals" | "Audio" | "Software" | "Books" | "Camera";
  link?: string;
  image?: string;
}

export const libraryItems: LibraryItem[] = [
  // Workstation
  {
    id: "zenbook-s16",
    name: "Zenbook S16",
    description: "AMD Ryzen AI 365, 32GB RAM, 1TB SSD. My primary machine for development and AI research.",
    category: "Workstation",
    link: "https://www.asus.com/laptops/for-home/zenbook/asus-zenbook-s-16-um5606/",
  },
  {
    id: "tab-s9+",
    name: "Samsung Tab S9+",
    description: "Qualcomm Snapdragon 8 Gen 2 for Galaxy. Used for note-taking, sketching architectures, and reading papers.",
    category: "Workstation",
    link: "https://www.samsung.com/th/tablets/galaxy-tab-s/",
  },
  // Peripherals
  {
    id: "mx-master-3s",
    name: "Logitech MX Master 3S",
    description: "The ultimate productivity mouse. Quiet clicks and incredible ergonomic feel.",
    category: "Peripherals",
    link: "https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006557.html",
  },
  // Audio
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation. Perfect for deep work sessions.",
    category: "Audio",
    link: "https://www.sony.com/electronics/headband-headphones/wh-1000xm5",
  },
  {
    id: "shokz-openrun-pro2",
    name: "Shokz OpenRun Pro 2",
    description: "Bone conduction headphones. Perfect for outdoor activities and long listening sessions.",
    category: "Audio",
    link: "https://shokz.com/products/openrun-pro",
  },
  // Camera
  {
    id: "sony-a7c",
    name: "Sony A7C + SmallRig Cage",
    description: "Compact full-frame mirrorless camera. My main tool for high-quality video and photography, enhanced with a SmallRig cage for better ergonomics and mounting.",
    category: "Camera",
    link: "https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-7c",
  },
  {
    id: "dji-mic-mini",
    name: "DJI Mic Mini",
    description: "Ultra-compact wireless microphone system. Lightweight and reliable audio for all my filming needs.",
    category: "Camera",
    link: "https://www.dji.com/mic-mini",
  },
  // Software
  // {
  //   id: "cursor",
  //   name: "Cursor",
  //   description: "The AI-first code editor. My primary tool for building complex systems.",
  //   category: "Software",
  //   link: "https://cursor.sh/",
  // },
  // {
  //   id: "arc",
  //   name: "Arc Browser",
  //   description: "A better way to use the internet. Helps me stay organized with Spaces.",
  //   category: "Software",
  //   link: "https://arc.net/",
  // },
  // {
  //   id: "warp",
  //   name: "Warp Terminal",
  //   description: "Modern, AI-accelerated terminal that feels like a collaborative IDE.",
  //   category: "Software",
  //   link: "https://www.warp.dev/",
  // },
  // Books
  {
    id: "ddia",
    name: "Designing Data-Intensive Applications",
    description: "The bible of modern backend engineering and distributed systems.",
    category: "Books",
    link: "https://dataintensive.net/",
  },
  {
    id: "deep-learning",
    name: "Deep Learning by Ian Goodfellow",
    description: "Essential reading for anyone serious about understanding the foundations of AI.",
    category: "Books",
    link: "https://www.deeplearningbook.org/",
  },
];
