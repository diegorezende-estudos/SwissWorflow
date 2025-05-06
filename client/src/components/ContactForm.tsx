import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface FormData {
  name: string;
  email: string;
  company: string;
  position: string;
  message: string;
}

export function ContactForm() {
  const { toast } = useToast();
  const { t } = useTranslation();

  const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.", // TODO: Translate validation messages if needed
    }),
    email: z.string().email({
      message: "Please enter a valid email address.", // TODO: Translate validation messages
    }),
    company: z.string().optional(),
    position: z.string().optional(),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.", // TODO: Translate validation messages
    }).max(500, {
      message: "Message cannot exceed 500 characters.", // TODO: Translate validation messages
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Replace with your actual form submission logic (e.g., API call)
    console.log("Form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

    toast({
      title: t('contact.success'), // Use translated success message
      // description: "We'll be in touch shortly.", // Optional: Add translated description
    });
    form.reset(); // Reset form after successful submission
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-white border-y border-black"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          {t('contact.title')}
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.name')}</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.email')}</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.company')}</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.position')}</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.message')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder=""
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full sm:w-auto border-2 border-black px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-colors" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'SENDING...' : t('contact.send')}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default ContactForm;
