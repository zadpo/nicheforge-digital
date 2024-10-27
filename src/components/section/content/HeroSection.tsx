import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
              Custom Web Solutions for Restaurants
            </h1>
            <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
              Fast, reliable, and beautiful websites crafted for restaurants and small businesses.
            </p>
          </div>
          <div className="space-x-4 gap-4 flex lg:flex-row flex-col">
            <Button variant="secondary" size="lg">
              Get a Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
              <ArrowUpRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
