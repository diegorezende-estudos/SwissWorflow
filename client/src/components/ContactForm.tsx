import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  position: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    position: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Form submitted",
      description: "Thank you for your message. We will get back to you shortly.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      position: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 md:px-16 bg-white border-t border-b border-black max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12">Let's build the future together</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-bold">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-3 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-3 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-bold">
                Company
              </Label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-3 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position" className="text-sm font-bold">
                Position
              </Label>
              <Input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-3 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-bold">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-3 bg-white"
              />
            </div>

            <div>
              <Button
                type="submit"
                className="btn border-2 border-black px-8 py-3 font-bold uppercase text-sm tracking-wider bg-white text-black hover:bg-black hover:text-white transition-colors"
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        <div className="hidden md:block md:col-span-6">
          {/* Intentionally left blank for whitespace in Swiss design */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
