"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

// Placeholder function for form submission
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submitForm = async (data: any) => {
  // Implement form submission logic here
  console.log("Form submitted:", data);
};

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <footer className="w-full py-6 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>123 Web Street, Digital City, 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@restaurantweb.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 RestaurantWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
