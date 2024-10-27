import { FaqSvg } from "@/components/svg/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/constants/dummyData";

export function FAQSection() {
  return (
    <section className="w-full  pb-12 md:pb-24 lg:pb-32 px-4 sm:px-8 md:px-16 lg:px-40">
      <div className="flex  flex-col lg:flex-row items-center justify-center gap-8 md:gap-10">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:block md:hidden hidden ">
          <FaqSvg />
        </div>
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 lg:mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
