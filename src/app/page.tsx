import { getAllBlogPosts } from "@/lib/blogs";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  const blogs = getAllBlogPosts();

  return <HomeClient blogs={blogs} />;
}
