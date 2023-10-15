"use client";
import React, { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { sendContactUs } from "@/services/contact";
import ErrorList from "@/components/alerts/error-list";
import Success from "@/components/alerts/sucess";
import Error from "@/components/alerts/error";
import { raleway } from "@/styles/font";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ContactSchema } from "./validation";

type Props = {
  bgColor?: string;
};

type ContactForm = z.infer<typeof ContactSchema>;

export default function Contact({ bgColor }: Props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | string[]>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange",
  });

  const handleContactUs = async ({ email, message }: ContactForm) => {
    setHasError(false);
    setIsSuccess(false);
    setIsSubmit(true);

    const formData = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: "Your Portfolio Website",
        to_name: "Chibuzor",
        message,
        reply_to: email,
      },
    };

    const url = process.env.EMAILJS_API as string;
    try {
      const contactApi = await sendContactUs(formData, url);

      if (contactApi.status !== 200) {
        setApiResponse([contactApi.data]);
        setHasError(true);
        setIsSubmit(false);
        return;
      }

      setApiResponse("Message Sent!");
      setIsSubmit(false);
      setIsSuccess(true);
    } catch (e: any) {
      setApiResponse([e.message]);
      setHasError(true);
      setIsSubmit(false);
    }
  };
  return (
    <Container
      className={cn(
        "bg-tetiary-100 lg:min-h-screen flex items-center  justify-center p-4 lg:p-0",
        bgColor
      )}
    >
      <section id="contact" className="w-full flex flex-col items-center">
        <h2
          className={`mb-12 md:text-5xl text-3xl font-bold  ${raleway.className}`}
        >
          Let&#39;s have a chat
        </h2>
        <div className="lg:max-w-[60rem] w-full ">
          {hasError && Array.isArray(apiResponse) && (
            <ErrorList errors={apiResponse} />
          )}
          {isSuccess && typeof apiResponse === "string" && (
            <Success message={apiResponse} />
          )}
          {!isSuccess && (
            <div className="relative  p-8  sm:p-12">
              <form onSubmit={handleSubmit(handleContactUs)}>
                <div className="flex flex-col space-y-2 mb-6">
                  <input
                    type="email"
                    placeholder="Your Email *"
                    {...register("email")}
                    className=" w-full text-base text-body-color outline-none focus:text-dune focus:border-b-dune focus-visible:shadow-none"
                  />
                  <Error>{errors.email?.message}</Error>
                </div>
                <div className="flex flex-col space-y-2 mb-6">
                  <textarea
                    rows={6}
                    placeholder="Your Message*"
                    {...register("message", {
                      required: true,
                    })}
                    className="h-36 w-full  resize-none  text-base  outline-none focus-visible:shadow-none"
                  ></textarea>
                  <Error>{errors.message?.message}</Error>
                </div>
                <div className="flex justify-center">
                  <Button
                    disabled={isSubmit}
                    type="submit"
                    className="text-tetiary-100 bg-black"
                  >
                    Send Message {isSubmit ? "..." : ""}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
