
"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useApplicationStore } from "@/hooks/use-application-store";

export function PopupApplication() {
  const { isOpen, close, jobTitle } = useApplicationStore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const resumeFile = formData.get('resume') as File;
    const resumeInfo = resumeFile ? `Resume: ${resumeFile.name} (${(resumeFile.size / 1024).toFixed(2)} KB)` : 'No Resume';

    const data = {
        formType: 'application',
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        jobTitle: formData.get('jobTitle') as string,
        resumeInfo: resumeInfo,
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
                title: "Application Submitted! ✅",
                description: "We have received your application and will get back to you soon.",
            });
            (e.target as HTMLFormElement).reset();
            close();
        } else {
            toast({
                variant: "destructive",
                title: "An Error Occurred",
                description: result.message || 'Failed to submit application.',
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
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Please fill out the form below to submit your application.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <input type="hidden" name="jobTitle" value={jobTitle || ""} />
          <div className="space-y-2">
            <Label htmlFor="application-name">Your Name</Label>
            <Input id="application-name" name="name" placeholder="e.g. John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="application-phone">Phone Number</Label>
            <Input id="application-phone" name="phone" type="tel" placeholder="e.g. 9876543210" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="application-email">Email</Label>
            <Input id="application-email" name="email" type="email" placeholder="e.g. john.doe@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="application-resume">Resume (PDF, DOC, DOCX up to 5MB)</Label>
            <div className="flex items-center gap-2">
                <Input 
                  id="application-resume" 
                  name="resume" 
                  type="file" 
                  required 
                  className="cursor-pointer"
                  accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
            </div>
          </div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Application
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
