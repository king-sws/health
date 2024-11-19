"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFrom from "./CustomFrom";
import { useState } from "react";
import { XX } from "@/app/lib/validation";
import { FromFieldType } from "./PatientForm";
import SubmitButton from "./SubmitBtn";
import { Doctors } from "@/constants";
import { SelectItem } from "@/components/ui/select";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const AppointmentForm = () => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof XX>>({
    resolver: zodResolver(XX),
    defaultValues: {
      birthDate: new Date(),
      note: "",
      reason: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof XX>) => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        const users = { ...values };
    
        if (users) {
          route.push(`/patients/${users.note}/success`);
        }
    
      } catch (error) {
        console.error("Error creating user:", error);
      }
    
      setIsLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  }    
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className=" space-y-2">
          <h1 className="header">New Appointment</h1>
          <p className="text-dark-700">Request a new appointment in 10 seconds.</p>
        </section>

        <CustomFrom
          fieldType={FromFieldType.SELECT}
          control={form.control}
          name="primaryPhysician"
          label="Doctor"
          placeholder="Select a doctor"
          
        >
          {Doctors.map((doctor, i) => (
            <SelectItem key={doctor.name + i} value={doctor.name}>
              <div className="flex cursor-pointer items-center gap-2">
                <Image src={doctor.image} width={32} height={32} alt="doctor" className="rounded-full border border-dark-500" />
                <p>{doctor.name}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFrom>

        <CustomFrom
          fieldType={FromFieldType.DATE_PICKER}
          control={form.control}
          name="birthDate"
          label="Expected appointment date"
          showTimeSelect
          dataFormat="MM/dd/yyyy  -  h:mm aa"
        />

        <div className={`flex flex-col gap-6 lg:flex-row`}>
          <CustomFrom
            fieldType={FromFieldType.TEXTAREA}
            control={form.control}
            name="reason"
            label="Appointment reason"
            placeholder="Annual monthly check-up"
          />

          <CustomFrom
            fieldType={FromFieldType.TEXTAREA}
            control={form.control}
            name="note"
            label="Comments/notes"
            placeholder="Prefer afternoon appointments, if possible"
          />
        </div>

        <SubmitButton isLoading={isLoading}  >
          Send
        </SubmitButton>
      </form>
    </Form>
  );
};

export default AppointmentForm;


