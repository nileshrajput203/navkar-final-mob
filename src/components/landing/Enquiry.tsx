
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Enquiry() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
        formType: 'enquiry',
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };
    
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            toast({
                title: "Message Sent! ✅",
                description: "Our team will get back to you shortly.",
            });
            (e.target as HTMLFormElement).reset();
        } else {
            toast({
                variant: "destructive",
                title: "An Error Occurred",
                description: result.message || "Failed to send message.",
            });
        }
    } catch (error) {
        toast({
            variant: "destructive",
            title: "An Error Occurred",
            description: "An unexpected error occurred. Please try again.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };
  
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.section 
      id="contact" 
      className="py-16 md:py-24 bg-background"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
    >
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-secondary p-8 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h3>
          <p className="mt-2 text-muted-foreground max-w-prose">
            Have a question or a project in mind? Fill out the form below and our team will get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
             <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" placeholder="e.g. John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="e.g. 9876543210" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (Optional)</Label>
              <Input id="email" name="email" type="email" placeholder="e.g. john.doe@example.com" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
                required
              />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting} suppressHydrationWarning>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="rounded-lg p-8 bg-secondary">
          <h4 className="text-2xl font-bold tracking-tight">Contact Information</h4>
          <p className="mt-2 text-muted-foreground">
            Visit our experience centre or reach us via phone/email.
          </p>

          <div className="mt-6 grid gap-6 text-base">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">Phone (Main Office)</div>
                <a href="tel:+917888022744" className="text-muted-foreground hover:text-primary transition-colors">+91 78880 22744</a>
              </div>
            </div>
             <div className="flex items-center gap-4">
               <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <a href="mailto:sales@navkargoup.in" className="text-muted-foreground hover:text-primary transition-colors">sales@navkargoup.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold">Our Office</div>
                <address className="text-muted-foreground not-italic">Navkar House, Andheri West, Mumbai, Maharashtra</address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
