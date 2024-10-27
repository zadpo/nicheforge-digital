import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps } from "@/constants/dummyData";
import Image from "next/image";

export function ProcessOverview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className=" px-4 lg:px-40">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {processSteps.map((process, index) => (
            <div key={index} className="border rounded-lg p-2 flex items-center  justify-center">
              <div>
                <Image
                  src={process.image}
                  alt={`Illustration for ${process.title} step`}
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex flex-col bg-muted h-full items-start flex justify-center px-2">
                <CardTitle className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-primary">{process.step}</span>
                  <span>{process.title}</span>
                </CardTitle>
                <div>
                  <p>{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
