import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/constants/dummyData";

export function ServicesOverview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 lg:px-40">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.icon}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
