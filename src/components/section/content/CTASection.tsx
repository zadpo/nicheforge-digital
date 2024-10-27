import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-full px-4 md:px-16 lg:px-40 text-primary-foreground">
      <div className="flex flex-col py-20 md:py-28 lg:py-[120px] rounded-[32px] relative !bg-cover !bg-center !bg-no-repeat cta-details-bg">
        <div className="flex flex-col w-full md:w-[688px] items-start space-y-4 text-left md:pl-10 lg:pl-20 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Ready to Elevate Your Business&apos;s Online Presence?
          </h2>
          <p className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-[700px] text-primary-foreground/80 text-base sm:text-lg md:text-xl/relaxed">
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
