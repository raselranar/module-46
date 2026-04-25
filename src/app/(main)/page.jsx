import CategoryList from "@/components/homepage/news/CategoryList";
import { secondsToMinutes } from "date-fns";
import Image from "next/image";
const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};

export default async function Home() {
  const {
    data: { news_category: categories },
  } = await getCategory();
  return (
    <section className="container mx-auto grid grid-cols-4 mt-20">
      {/* categories */}
      <CategoryList categories={categories} />
      <div className="col-span-2">Dragon News Home</div>
      <div className="">Social Icons</div>
    </section>
  );
}
