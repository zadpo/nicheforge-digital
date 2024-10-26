import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Elevate Your Restaurant&apos;s Online Presence?
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get a website that&apos;s optimized, fast, and designed to attract more diners.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
