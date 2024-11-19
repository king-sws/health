"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFrom from "./CustomFrom";
import SubmitBtn from "./SubmitBtn";
import { useState } from "react";
import { UserFormValidation } from "@/app/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/lib/actions/patient.actions";

export enum FromFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  CHECKBOX = "checkbox",
  SELECT = "select",
  SKELETON = "skeleton", // Corrected spelling
}

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = { name, email, phone };
      const newUser = await createUser(user);

      if (newUser) router.push(`/patients/${newUser.$id}/register`);
    } catch (error) {
      console.error("Error creating user:", error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-5 space-y-2">
          <h1 className="header">Hi there</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
        </section>
        <CustomFrom
          fieldType={FromFieldType.INPUT}
          control={form.control}
          name="name"
          placeholder="John Doe"
          label="Full Name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFrom
          fieldType={FromFieldType.INPUT}
          control={form.control}
          name="email"
          placeholder="jahodoe@sws.ma"
          label="Email"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFrom
          fieldType={FromFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          placeholder="(+1) 6 12 34 56 78"
          label="Phone number"
          iconSrc="" 
          iconAlt=""
        />

        <SubmitBtn isLoading={isLoading}>Get Started</SubmitBtn>
      </form>
    </Form>
  );
};

export default PatientForm;
