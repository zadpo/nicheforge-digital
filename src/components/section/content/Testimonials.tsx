import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/constants/dummyData";

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className=" px-4 lg:px-40">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>&quot;{testimonial.quote}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
