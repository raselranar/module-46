import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
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
    <section className="container mx-auto grid-cols-1 grid sm:grid-cols-4 mt-20">
      {/* categories */}
      <CategoryList categories={categories} />
      <div className="col-span-2">Dragon News Home</div>
      {/* Social Icons */}
      <div className="">
        <h2 className="text-lg mb-2">Social Icons</h2>

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Button className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            Login in with Google
          </Button>
          <Button className="w-full" variant="tertiary">
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
