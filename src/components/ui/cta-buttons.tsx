"use client";

import { Button } from "@/components/ui/button";

type CTAButton = {
  text: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};

type CTAButtonsProps = {
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
};

export function CTAButtons({ primaryButton, secondaryButton }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        variant={primaryButton.variant || "default"}
        onClick={() => console.log("Primary button clicked")}
      >
        {primaryButton.text}
      </Button>
      {secondaryButton && (
        <Button
          size="lg"
          variant={secondaryButton.variant || "outline"}
          onClick={() => console.log("Secondary button clicked")}
        >
          {secondaryButton.text}
        </Button>
      )}
    </div>
  );
}
