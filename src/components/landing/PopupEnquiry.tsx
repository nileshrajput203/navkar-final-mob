
"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useEnquiryStore } from "@/hooks/use-enquiry-store";

export function PopupEnquiry() {
  const { isOpen, close } = useEnquiryStore();
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
                title: "Enquiry Sent! ✅",
                description: "Our team will connect with you shortly.",
            });
            (e.target as HTMLFormElement).reset();
            close();
        } else {
           toast({
                variant: "destructive",
                title: "An Error Occurred",
                description: result.message || 'Failed to send enquiry.',
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
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      close();
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enquire Now</DialogTitle>
          <DialogDescription>
            Share your details and our relationship team will connect with you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Your Name</Label>
            <Input id="popup-name" name="name" placeholder="e.g. John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="popup-phone">Phone Number</Label>
            <Input id="popup-phone" name="phone" type="tel" placeholder="e.g. 9876543210" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="popup-email">Email (Optional)</Label>
            <Input id="popup-email" name="email" type="email" placeholder="e.g. john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="popup-message">Message</Label>
            <Textarea
              id="popup-message"
              name="message"
              placeholder="Your message..."
              rows={3}
              required
            />
          </div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Enquiry
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
