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

type ContactForm = {
  message: string;
  email: string;
};

type Props = {
  bgColor?: string;
};
export default function Contact({ bgColor }: Props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | string[]>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleContactUs = async ({ email, message }: ContactForm) => {
    setHasError(false);
    setIsSuccess(false);
    setIsSubmit(true);

    const data = {
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
      //send feedback
      const contactApi = await sendContactUs(data, url);

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
        "bg-tetiary-100 min-h-screen flex items-center  justify-center",
        bgColor
      )}
    >
      <section id="contact" className="w-full flex flex-col items-center">
        <h2 className={`mb-12 text-5xl font-bold  ${raleway.className}`}>
          Let&#39;s have a chat
        </h2>
        <div className="max-w-[60rem] w-full ">
          {hasError && Array.isArray(apiResponse) && (
            <ErrorList errors={apiResponse} />
          )}
          {isSuccess && typeof apiResponse === "string" && (
            <Success message={apiResponse} />
          )}
          {!isSuccess && (
            <div className="relative  p-8  sm:p-12">
              {/*@ts-ignore*/}
              <form onSubmit={handleSubmit(handleContactUs)}>
                <div className="flex flex-col space-y-2 mb-6">
                  <input
                    type="email"
                    placeholder="Your Email *"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })}
                    className=" w-full text-base text-body-color outline-none focus:text-dune focus:border-b-dune focus-visible:shadow-none"
                  />

                  {errors.email && errors.email?.type === "required" && (
                    <Error text="Email cannot be blank" />
                  )}
                  {errors.email && errors.email?.type === "pattern" && (
                    <Error text="Invalid email address" />
                  )}
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
                  {errors.message && errors.message?.type === "required" && (
                    <Error text="Message cannot be blank" />
                  )}
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
