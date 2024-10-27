import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { FAQSection } from "@/components/section/content";

const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for new restaurants looking to establish an online presence.",
    features: [
      "5-page responsive website",
      "Basic SEO optimization",
      "Contact form",
      "Google Maps integration",
      "Social media links",
      "1 month of support",
    ],
    notIncluded: ["Online ordering system", "Reservation system", "Custom animations", "Content creation"],
  },
  {
    name: "Professional",
    price: "$1,999",
    description: "Ideal for established restaurants wanting to enhance their digital footprint.",
    features: [
      "10-page responsive website",
      "Advanced SEO optimization",
      "Online reservation system",
      "Blog/News section",
      "Photo gallery",
      "3 months of support",
      "Content creation (5 pages)",
    ],
    notIncluded: ["Online ordering system", "Custom animations"],
  },
  {
    name: "Enterprise",
    price: "$2,999",
    description: "Comprehensive solution for restaurants needing full digital integration.",
    features: [
      "Unlimited pages",
      "Advanced SEO optimization",
      "Online reservation system",
      "Online ordering system",
      "Custom animations",
      "Blog/News section",
      "Photo and video gallery",
      "6 months of support",
      "Content creation (10 pages)",
      "Social media integration",
      "Email marketing setup",
    ],
    notIncluded: [],
  },
];

export function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-40">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transparent Pricing, Exceptional Value
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the perfect plan to elevate your restaurant&apos;s online presence.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">{plan.price}</span> / one-time
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="mb-4">{plan.description}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-muted-foreground">
                          <X className="h-5 w-5 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />

        <section className="w-full pb-12 md:pb-24 lg:pb-32 px-40">
          <div className="flex flex-col py-[120px]  rounded-[32px] relative !bg-cover !bg-center !bg-no-repeat cta-details-bg">
            <div className="flex flex-col w-[688px] items-start space-y-2 text-center pl-20">
              <h2 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl text-left text-white">
                Ready to get started?
              </h2>
              <p className=" max-w-[700px] text-left text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that&apos;s right for you or contact us for a custom solution.
              </p>
            </div>
            <div className="space-x-4 pl-20 pt-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
