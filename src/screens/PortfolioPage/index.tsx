"use client";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  results: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Gourmet Bistro",
    type: "Fine Dining",
    image: "/placeholder.svg",
    description:
      "A sleek, modern website for an upscale bistro, featuring an interactive menu and reservation system.",
    results: "Increased online reservations by 40%",
  },
  {
    id: 2,
    title: "Sushi Express",
    type: "Asian",
    image: "/placeholder.svg",
    description: "Fast, responsive design for a popular sushi chain, with online ordering capabilities.",
    results: "Boosted online orders by 60%",
  },
  {
    id: 3,
    title: "Pizza Palace",
    type: "Casual Dining",
    image: "/placeholder.svg",
    description: "Fun, vibrant website with a custom pizza builder and delivery tracking system.",
    results: "Improved customer engagement by 50%",
  },
  {
    id: 4,
    title: "Green Leaf Cafe",
    type: "Cafe",
    image: "/placeholder.svg",
    description: "Eco-friendly themed website for a vegan cafe, featuring a blog and events calendar.",
    results: "Increased foot traffic by 30%",
  },
  {
    id: 5,
    title: "Taco Fiesta",
    type: "Mexican",
    image: "/placeholder.svg",
    description: "Colorful, mobile-first design for a taco truck business with location tracking.",
    results: "Grew social media following by 80%",
  },
  {
    id: 6,
    title: "Pasta Paradise",
    type: "Italian",
    image: "/placeholder.svg",
    description:
      "Elegant website for an Italian restaurant, showcasing their handmade pasta and wine selection.",
    results: "Increased average order value by 25%",
  },
];

const categories = ["All", "Fine Dining", "Casual Dining", "Cafe", "Asian", "Mexican", "Italian"];

export function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.type === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Our Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our collection of stunning restaurant websites that drive results.
                </p>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex space-x-2 items-center justify-center">
                  {categories.map((type) => (
                    <Button
                      key={type}
                      variant={filter === type ? "default" : "outline"}
                      onClick={() => setFilter(type)}
                      className="flex-shrink-0"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 md:hidden"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden"
                onClick={scrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{project.description}</p>
                    <p className="font-semibold text-primary">{project.results}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let&apos;s create a website that takes your restaurant to the next level.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
