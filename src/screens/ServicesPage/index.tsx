import { CTASection } from "@/components/section/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Search, Wrench, Smartphone, ShoppingCart, Globe } from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Website Design",
      description:
        "Tailored designs that capture the essence of your restaurant, creating a unique online presence that stands out from the competition.",
      features: [
        "Mobile-responsive layouts",
        "Brand-aligned color schemes and typography",
        "Custom illustrations and graphics",
        "Intuitive navigation and user experience",
      ],
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Optimization",
      description:
        "Ensure your website looks and functions perfectly on all devices, providing a seamless experience for customers on-the-go.",
      features: [
        "Touch-friendly interfaces",
        "Fast loading times on mobile networks",
        "Optimized images and media for mobile devices",
        "Mobile-specific features like click-to-call",
      ],
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "Online Ordering System",
      description:
        "Implement a user-friendly online ordering system that integrates seamlessly with your website, boosting sales and customer convenience.",
      features: [
        "Easy-to-use menu builder",
        "Secure payment gateway integration",
        "Order tracking and notifications",
        "Customer account management",
      ],
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO Optimization",
      description:
        "Improve your restaurant's visibility in search results, attracting more local customers and increasing organic traffic.",
      features: [
        "Keyword research and optimization",
        "Local SEO strategies",
        "Schema markup for rich snippets",
        "Performance optimization for better rankings",
      ],
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Content Management System",
      description:
        "Empower your team to easily update your website's content, including menus, specials, and events, without technical knowledge.",
      features: [
        "User-friendly interface",
        "Menu and pricing updates",
        "Blog and news section management",
        "Media library for images and videos",
      ],
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Maintenance and Support",
      description:
        "Keep your website running smoothly with regular updates, security patches, and technical support when you need it.",
      features: [
        "Regular software updates",
        "Security monitoring and fixes",
        "Performance optimization",
        "24/7 technical support",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-40">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive web solutions tailored for restaurants to enhance your online presence and
                  drive customer engagement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {service.icon}
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="mb-4">{service.description}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </div>
  );
}
