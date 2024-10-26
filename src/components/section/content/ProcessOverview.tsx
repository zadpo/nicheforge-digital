import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps } from "@/constants/dummyData";

export function ProcessOverview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((process, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-primary">{process.step}</span>
                  <span>{process.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
