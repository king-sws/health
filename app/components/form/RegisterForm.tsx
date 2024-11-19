// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Form, FormControl } from "@/components/ui/form";
// import CustomFrom from "./CustomFrom";
// import SubmitBtn from "./SubmitBtn";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Doctors, GenderOptions, IdentificationTypes } from "@/constants";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { SelectItem } from "@/components/ui/select";
// import Image from "next/image";
// import FileUploader from "../FileUploader";
// import { UserFormValidations } from "@/app/lib/validation";
// import { FromFieldType } from "./PatientForm";

// export const RegisterForm = ({user} : {user: User}) => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<z.infer<typeof UserFormValidations>>({
//     resolver: zodResolver(UserFormValidations),
//     defaultValues: {
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//     },
//   });

//   const onSubmit = async (values: z.infer<typeof UserFormValidations>) => {
//     setIsLoading(true);

//     // let formData;
//     // if (
//     //   values.identificationDocument &&
//     //   values.identificationDocument?.length > 0
//     // ) {
//     //   const blobFile = new Blob([values.identificationDocument[0]], {
//     //     type: values.identificationDocument[0].type,
//     //   });

//     //   formData = new FormData();
//     //   formData.append("blobFile", blobFile);
//     //   formData.append("fileName", values.identificationDocument[0].name);
//     // }


//     try {
//       const patientData = {
//         ...values,
//         userId: user.$id,
//         birthDate: new Date(values.birthDate),
//     }

//       // const patient = await registerPatient(patientData);

//       // console.log(patient);  
      

//       if (patientData) router.push(`/patients/${user.$id}/new-appointment`);

//     } catch (error) {
//       console.error("3ndk moxkila:", error);
//     }

//     setIsLoading(false);
//   };

  // return (
  //   <Form {...form}>
  //     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
  //       <section className="mb-5 space-y-2">
  //         <h1 className="header">Welcome 🎉</h1>
  //         <p className="text-dark-700">Let us know more about yourself.</p>
  //       </section>

  //       <section className="space-y-6">
  //         <div className="mb-6 space-y-1">
  //           <h1 className="sub-header">Patient Information</h1>
  //         </div>
  //       </section>

  //       <CustomFrom
  //         fieldType={FromFieldType.INPUT}
  //         control={form.control}
  //         name="name"
  //         placeholder="John Doe"
  //         label="Full Name"
  //         iconSrc="/assets/icons/user.svg"
  //         iconAlt="user"
  //       />
  //       <div className="flex flex-col gap-8 xl:flex-row">
  //           <CustomFrom
  //               fieldType={FromFieldType.INPUT}
  //               control={form.control}
  //               name="email"
  //               placeholder="jahodoe@sws.ma"
  //               label="Email"
  //               iconSrc="/assets/icons/email.svg"
  //               iconAlt="email"
  //           />
  //           <CustomFrom
  //               fieldType={FromFieldType.PHONE_INPUT}
  //               control={form.control}
  //               name="phone"
  //               placeholder="(+1) 6 12 34 56 78"
  //               label="Phone number"
  //               iconSrc="" 
  //               iconAlt=""
  //           />
  //       </div>
//         <div className="flex flex-col gap-6 xl:flex-row">
//             <CustomFrom
//               fieldType={FromFieldType.DATE_PICKER}
//               control={form.control}
//               name="birthDate"
//               label="Date of Birth" 

//             />
//             <CustomFrom
//             fieldType={FromFieldType.SKELETON}
//             control={form.control}
//             name="gender"
//             label="Gender"
//             renderSkeleton={(field) => (
//               <FormControl>
//                 <RadioGroup className="flex h-11 gap-6 xl:justify-between" onValueChange={field.onChange} defaultValue={field.value}>
//                   {GenderOptions.map((gender, i) => (
//                     <div className="radio-group" key={i}>
//                       <RadioGroupItem value={gender} id={gender} />
//                       <Label htmlFor={gender} className="cursor-pointer">{gender}</Label>
//                     </div>
//                   ))}
//                 </RadioGroup>
//               </FormControl>
//             )}/>
//         </div>

//         <div className="flex flex-col gap-6 xl:flex-row">
//             <CustomFrom
//                 fieldType={FromFieldType.INPUT}
//                 control={form.control}
//                 name="address"
//                 label="Address"
//                 placeholder="123 Main St, Anytown, USA"
//             />
//             <CustomFrom
//                 fieldType={FromFieldType.INPUT}
//                 control={form.control}
//                 name="occupation"
//                 label="Occupation"
//                 placeholder="Doctor"
//             />
//         </div>
//         <div className="flex flex-col gap-6 xl:flex-row">
//             <CustomFrom
//                 fieldType={FromFieldType.INPUT}
//                 control={form.control}
//                 name="emergencyContactName"
//                 label="Emergency Contact Name"
//                 placeholder="Guardian"
//             />
//             <CustomFrom
//                 fieldType={FromFieldType.PHONE_INPUT}
//                 control={form.control}
//                 name="emergencyNumber"
//                 placeholder="(+1) 6 12 34 56 78"
//                 label="Emergency Contact Number"
//             />
//         </div>
//         <section className="space-y-6">
//           <div className="mb-9 space-y-2">
//             <h1 className="sub-header" >Medical Information</h1>
//           </div>
//         </section>

//         <CustomFrom
//             fieldType={FromFieldType.SELECT}
//             control={form.control}
//             name="primaryPhysicion"
//             label="Primary care physician"
//             placeholder="Select a physician"
//           >
//             {Doctors.map((doctor, i) => (
//               <SelectItem key={doctor.name + i} value={doctor.name}>
//                 <div className="flex cursor-pointer items-center gap-2">
//                   <Image
//                     src={doctor.image}
//                     width={32}
//                     height={32}
//                     alt="doctor"
//                     className="rounded-full border border-dark-500"
//                   />
//                   <p>{doctor.name}</p>
//                 </div>
//               </SelectItem>
//             ))}
//           </CustomFrom>
//           <div className="flex flex-col gap-6 xl:flex-row">
//             <CustomFrom
//                 fieldType={FromFieldType.INPUT}
//                 control={form.control}
//                 name="insuranceProvider"
//                 label="Insurance Provider"
//                 placeholder="BlueCross BlueShield " 
//             />
//             <CustomFrom
//                 fieldType={FromFieldType.INPUT}
//                 control={form.control}
//                 name="insurancePolicyNumber"
//                 label="Insurance Policy Number"
//                 placeholder="ABC123456789"
//             />
//           </div>
//           <div className="flex flex-col gap-6 xl:flex-row">
//             <CustomFrom
//                 fieldType={FromFieldType.TEXTAREA}
//                 control={form.control}
//                 name="allergies"
//                 label="Allergies (if any)"
//                 placeholder="Peanuts, Gluten, Eggs" 
//             />
//             <CustomFrom
//                 fieldType={FromFieldType.TEXTAREA}
//                 control={form.control}
//                 name="currentMedication"
//                 label="Current Medications (if any)"
//                 placeholder="Aspirin, Ibuprofen, Caffeine"
//             />
//         </div>
//           <div className="flex flex-col gap-6 xl:flex-row">
//             <CustomFrom
//                 fieldType={FromFieldType.TEXTAREA}
//                 control={form.control}
//                 name="famellyMedicalHestory"
//                 label="Family Medical History"
//                 placeholder="Diabetes, Hypertension" 
//             />
//             <CustomFrom
//                 fieldType={FromFieldType.TEXTAREA}
//                 control={form.control}
//                 name="pastMedicalHestory"
//                 label="Past Medical History"
//                 placeholder="Heart Disease , Asthma"
//             />
//         </div>

//         <section className="space-y-6">
//           <div className="mb-9 space-y-1">
//             <h1 className="sub-header" >Identification and Verfication</h1>
//           </div>
//         </section>

//         <CustomFrom
//             fieldType={FromFieldType.SELECT}
//             control={form.control}
//             name="indentificationType"
//             label="Identification Type"
//             placeholder="Select an identification type"
//           >
//             {IdentificationTypes.map((type) => (
//               <SelectItem key={type} value={type} >
//                 {type}
//               </SelectItem>
//             ))}
//           </CustomFrom>

//           <CustomFrom
//                 fieldType={FromFieldType.INPUT}
//                 control={form.control}
//                 name="identificationNumber"
//                 label="Identification Number"
//                 placeholder="123456789"
//             />

//             <CustomFrom
//               fieldType={FromFieldType.SKELETON}
//               control={form.control}
//               name="identificationDocument"
//               label="Scanned copy of your identification document"
//               renderSkeleton={(field) => (
//                 <FormControl>
//                   <FileUploader files={field.value} onChange={field.onChange} />
//                 </FormControl>
//             )}/>
        
//         <section className="space-y-6">
//           <div className="mb-9 space-y-1">
//             <h1 className="sub-header" >Consent and Privacy</h1>
//           </div>
//         </section>

//         <CustomFrom
//             fieldType={FromFieldType.CHECKBOX}
//             control={form.control}
//             name="treatmentConsent"
//             label="I consent to receive treatment for my health condition."
//         />
//         <CustomFrom
//             fieldType={FromFieldType.CHECKBOX}
//             control={form.control}
//             name="disclosureConsent"
//             label="I consent to the use and disclosure of my health information for treatment purposes."
//         />
//         <CustomFrom
//             fieldType={FromFieldType.CHECKBOX}
//             control={form.control}
//             name="privacyConsent"
//             label="I acknowledge that I have reviewed and agree to the privacy policy"
//         />

//         <SubmitBtn isLoading={isLoading}>Get Started</SubmitBtn>
//       </form>
//     </Form>
//   );
// };

// export default RegisterForm;
// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { UserFormValidation } from "@/app/lib/validation";
// import { createUser } from "@/app/lib/actions/patient.actions";

// import { Form, FormControl } from "@/components/ui/form";
// import CustomFrom from "./CustomFrom";
// import SubmitBtn from "./SubmitBtn";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Doctors, GenderOptions, IdentificationTypes } from "@/constants";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { SelectItem } from "@/components/ui/select";
// import Image from "next/image";
// import FileUploader from "../FileUploader";
// import { FromFieldType } from "./PatientForm";


// export const RegisterForm = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<z.infer<typeof UserFormValidation>>({
//     resolver: zodResolver(UserFormValidation),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//     },
//   });

//   const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
//     setIsLoading(true);

//     try {
//       const user = { name, email, phone };
//       const newUser = await createUser(user);

//       if (newUser) router.push(`/patients/${newUser.$id}/register`);
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }

//     setIsLoading(false);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//         <section className="mb-5 space-y-2">
//           <h1 className="header">Welcome 🎉</h1>
//           <p className="text-dark-700">Let us know more about yourself.</p>
//         </section>

//         <section className="space-y-6">
//           <div className="mb-6 space-y-1">
//             <h1 className="sub-header">Patient Information</h1>
//           </div>
//         </section>

//         <CustomFrom
//           fieldType={FromFieldType.INPUT}
//           control={form.control}
//           name="name"
//           placeholder="John Doe"
//           label="Full Name"
//           iconSrc="/assets/icons/user.svg"
//           iconAlt="user"
//         />
//         <div className="flex flex-col gap-8 xl:flex-row">
//             <CustomFrom
//                 fieldType={FromFieldType.INPUT}
//                 control={form.control}
//                 name="email"
//                 placeholder="jahodoe@sws.ma"
//                 label="Email"
//                 iconSrc="/assets/icons/email.svg"
//                 iconAlt="email"
//             />
//             <CustomFrom
//                 fieldType={FromFieldType.PHONE_INPUT}
//                 control={form.control}
//                 name="phone"
//                 placeholder="(+1) 6 12 34 56 78"
//                 label="Phone number"
//                 iconSrc="" 
//                 iconAlt=""
//             />
//         </div>
        // <div className="flex flex-col gap-6 xl:flex-row">
        //     <CustomFrom
        //       fieldType={FromFieldType.DATE_PICKER}
        //       control={form.control}
        //       name="birthDate"
        //       label="Date of Birth" 

        //     />
        //     <CustomFrom
        //     fieldType={FromFieldType.SKELETON}
        //     control={form.control}
        //     name="gender"
        //     label="Gender"
        //     renderSkeleton={(field) => (
        //       <FormControl>
        //         <RadioGroup className="flex h-11 gap-6 xl:justify-between" onValueChange={field.onChange} defaultValue={field.value}>
        //           {GenderOptions.map((gender, i) => (
        //             <div className="radio-group" key={i}>
        //               <RadioGroupItem value={gender} id={gender} />
        //               <Label htmlFor={gender} className="cursor-pointer">{gender}</Label>
        //             </div>
        //           ))}
        //         </RadioGroup>
        //       </FormControl>
        //     )}/>
        // </div>

        // <div className="flex flex-col gap-6 xl:flex-row">
        //     <CustomFrom
        //         fieldType={FromFieldType.INPUT}
        //         control={form.control}
        //         name="address"
        //         label="Address"
        //         placeholder="123 Main St, Anytown, USA"
        //     />
        //     <CustomFrom
        //         fieldType={FromFieldType.INPUT}
        //         control={form.control}
        //         name="occupation"
        //         label="Occupation"
        //         placeholder="Doctor"
        //     />
        // </div>






        // <div className="flex flex-col gap-6 xl:flex-row">
        //     <CustomFrom
        //         fieldType={FromFieldType.INPUT}
        //         control={form.control}
        //         name="emergencyContactName"
        //         label="Emergency Contact Name"
        //         placeholder="Guardian"
        //     />
        //     <CustomFrom
        //         fieldType={FromFieldType.PHONE_INPUT}
        //         control={form.control}
        //         name="emergencyNumber"
        //         placeholder="(+1) 6 12 34 56 78"
        //         label="Emergency Contact Number"
        //     />
        // </div>
        // <section className="space-y-6">
        //   <div className="mb-9 space-y-2">
        //     <h1 className="sub-header" >Medical Information</h1>
        //   </div>
        // </section>

        // <CustomFrom
        //     fieldType={FromFieldType.SELECT}
        //     control={form.control}
        //     name="primaryPhysicion"
        //     label="Primary care physician"
        //     placeholder="Select a physician"
        //   >
        //     {Doctors.map((doctor, i) => (
        //       <SelectItem key={doctor.name + i} value={doctor.name}>
        //         <div className="flex cursor-pointer items-center gap-2">
        //           <Image
        //             src={doctor.image}
        //             width={32}
        //             height={32}
        //             alt="doctor"
        //             className="rounded-full border border-dark-500"
        //           />
        //           <p>{doctor.name}</p>
        //         </div>
        //       </SelectItem>
        //     ))}
        //   </CustomFrom>
        //   <div className="flex flex-col gap-6 xl:flex-row">
        //     <CustomFrom
        //         fieldType={FromFieldType.INPUT}
        //         control={form.control}
        //         name="insuranceProvider"
        //         label="Insurance Provider"
        //         placeholder="BlueCross BlueShield " 
        //     />
        //     <CustomFrom
        //         fieldType={FromFieldType.INPUT}
        //         control={form.control}
        //         name="insurancePolicyNumber"
        //         label="Insurance Policy Number"
        //         placeholder="ABC123456789"
        //     />
        //   </div>
        //   <div className="flex flex-col gap-6 xl:flex-row">
        //     <CustomFrom
        //         fieldType={FromFieldType.TEXTAREA}
        //         control={form.control}
        //         name="allergies"
        //         label="Allergies (if any)"
        //         placeholder="Peanuts, Gluten, Eggs" 
        //     />
        //     <CustomFrom
        //         fieldType={FromFieldType.TEXTAREA}
        //         control={form.control}
        //         name="currentMedication"
        //         label="Current Medications (if any)"
        //         placeholder="Aspirin, Ibuprofen, Caffeine"
        //     />
        // </div>




        //   <div className="flex flex-col gap-6 xl:flex-row">
        //     <CustomFrom
        //         fieldType={FromFieldType.TEXTAREA}
        //         control={form.control}
        //         name="famellyMedicalHestory"
        //         label="Family Medical History"
        //         placeholder="Diabetes, Hypertension" 
        //     />
        //     <CustomFrom
        //         fieldType={FromFieldType.TEXTAREA}
        //         control={form.control}
        //         name="pastMedicalHestory"
        //         label="Past Medical History"
        //         placeholder="Heart Disease , Asthma"
        //     />
        // </div>

        // <section className="space-y-6">
        //   <div className="mb-9 space-y-1">
        //     <h1 className="sub-header" >Identification and Verfication</h1>
        //   </div>
        // </section>

        // <CustomFrom
        //     fieldType={FromFieldType.SELECT}
        //     control={form.control}
        //     name="indentificationType"
        //     label="Identification Type"
        //     placeholder="Select an identification type"
        //   >
        //     {IdentificationTypes.map((type) => (
        //       <SelectItem key={type} value={type} >
        //         {type}
        //       </SelectItem>
        //     ))}
        //   </CustomFrom>

        //   <CustomFrom
        //         fieldType={FromFieldType.INPUT}
        //         control={form.control}
        //         name="identificationNumber"
        //         label="Identification Number"
        //         placeholder="123456789"
        //     />

        //     <CustomFrom
        //       fieldType={FromFieldType.SKELETON}
        //       control={form.control}
        //       name="identificationDocument"
        //       label="Scanned copy of your identification document"
        //       renderSkeleton={(field) => (
        //         <FormControl>
        //           <FileUploader files={field.value} onChange={field.onChange} />
        //         </FormControl>
        //     )}/>
        
        // <section className="space-y-6">
        //   <div className="mb-9 space-y-1">
        //     <h1 className="sub-header" >Consent and Privacy</h1>
        //   </div>
        // </section>

        // <CustomFrom
        //     fieldType={FromFieldType.CHECKBOX}
        //     control={form.control}
        //     name="treatmentConsent"
        //     label="I consent to receive treatment for my health condition."
        // />
        // <CustomFrom
        //     fieldType={FromFieldType.CHECKBOX}
        //     control={form.control}
        //     name="disclosureConsent"
        //     label="I consent to the use and disclosure of my health information for treatment purposes."
        // />
        // <CustomFrom
        //     fieldType={FromFieldType.CHECKBOX}
        //     control={form.control}
        //     name="privacyConsent"
        //     label="I acknowledge that I have reviewed and agree to the privacy policy"
        // />

//         <SubmitBtn isLoading={isLoading}>Get Started</SubmitBtn>
//       </form>
//     </Form>
//   );
// };

// export default RegisterForm;
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFrom from "./CustomFrom";
import SubmitBtn from "./SubmitBtn";
import { useState } from "react";
import { UserFormValidation } from "@/app/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/lib/actions/patient.actions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Doctors, GenderOptions, IdentificationTypes, PatientFormDefaultValues } from "@/constants";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import Image from "next/image";
import FileUploader from "../FileUploader";

export enum FromFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  CHECKBOX = "checkbox",
  SELECT = "select",
  SKELETON = "skeleton", // Corrected spelling
}

export const RegisterForm = ({user} : {user: User}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
      name: "",
      email: "",
      phone: "",
    },
  });
// hhh hhhh hhhh hhhh hhhh hhhh hhhh hhhh gg hhh hhh hhh hhhh hhhh hhhh hhhh
  const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = { name, email, phone };
      const newUser = await createUser(user);

      if (newUser) router.push(`/patients/${newUser.$id}/new-appointmen`);
} catch (error) {
      console.error("Error creating user:", error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-5 space-y-2">
          <h1 className="header">Welcome 🎉</h1>
          <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-6 space-y-1">
            <h1 className="sub-header">Patient Information</h1>
          </div>
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
        <div className="flex flex-col gap-8 xl:flex-row">
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
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFrom
              fieldType={FromFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of Birth" 

            />
            <CustomFrom
            fieldType={FromFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup className="flex h-11 gap-6 xl:justify-between" onValueChange={field.onChange} defaultValue={field.value}>
                  {GenderOptions.map((gender, i) => (
                    <div className="radio-group" key={i}>
                      <RadioGroupItem value={gender} id={gender} />
                      <Label htmlFor={gender} className="cursor-pointer">{gender}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}/>
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFrom
          fieldType={FromFieldType.INPUT}
          control={form.control}
                name="address"
                label="Address"
                placeholder="123 Main St, Anytown, USA"
            />
            <CustomFrom
                fieldType={FromFieldType.INPUT}
                control={form.control}
                name="occupation"
                label="Occupation"
                placeholder="Doctor"
            />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFrom
                fieldType={FromFieldType.INPUT}
                control={form.control}
                name="emergencyContactName"
                label="Emergency Contact Name"
                placeholder="Guardian"
            />
            <CustomFrom
                fieldType={FromFieldType.PHONE_INPUT}
                control={form.control}
                name="emergencyNumber"
                placeholder="(+1) 6 12 34 56 78"
                label="Emergency Contact Number"
            />
        </div>
        <section className="space-y-6">
          <div className="mb-9 space-y-2">
            <h1 className="sub-header" >Medical Information</h1>
          </div>
        </section>

        <CustomFrom
            fieldType={FromFieldType.SELECT}
            control={form.control}
            name="primaryPhysicion"
            label="Primary care physician"
            placeholder="Select a physician"
          >
            {Doctors.map((doctor, i) => (
              <SelectItem key={doctor.name + i} value={doctor.name}>
                <div className="flex cursor-pointer items-center gap-2">
                  <Image
                    src={doctor.image}
                    width={32}
                    height={32}
                    alt="doctor"
                    className="rounded-full border border-dark-500"
                  />
                  <p>{doctor.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFrom>
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFrom
                fieldType={FromFieldType.INPUT}
                control={form.control}
                name="insuranceProvider"
                label="Insurance Provider"
                placeholder="BlueCross BlueShield " 
            />
            <CustomFrom
                fieldType={FromFieldType.INPUT}
                control={form.control}
                name="insurancePolicyNumber"
                label="Insurance Policy Number"
                placeholder="ABC123456789"
            />
          </div>
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFrom
                fieldType={FromFieldType.TEXTAREA}
                control={form.control}
                name="allergies"
                label="Allergies (if any)"
                placeholder="Peanuts, Gluten, Eggs" 
            />
            <CustomFrom
                fieldType={FromFieldType.TEXTAREA}
                control={form.control}
                name="currentMedication"
                label="Current Medications (if any)"
                placeholder="Aspirin, Ibuprofen, Caffeine"
            />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFrom
                fieldType={FromFieldType.TEXTAREA}
                control={form.control}
                name="famellyMedicalHestory"
                label="Family Medical History"
                placeholder="Diabetes, Hypertension" 
            />
            <CustomFrom
                fieldType={FromFieldType.TEXTAREA}
                control={form.control}
                name="pastMedicalHestory"
                label="Past Medical History"
                placeholder="Heart Disease , Asthma"
            />
        </div>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h1 className="sub-header" >Identification and Verfication</h1>
          </div>
        </section>

        <CustomFrom
            fieldType={FromFieldType.SELECT}
            control={form.control}
            name="indentificationType"
            label="Identification Type"
            placeholder="Select an identification type"
          >
            {IdentificationTypes.map((type) => (
              <SelectItem key={type} value={type} >
                {type}
              </SelectItem>
            ))}
          </CustomFrom>

          <CustomFrom
                fieldType={FromFieldType.INPUT}
                control={form.control}
                name="identificationNumber"
                label="Identification Number"
                placeholder="123456789"
            />

            <CustomFrom
              fieldType={FromFieldType.SKELETON}
              control={form.control}
              name="identificationDocument"
              label="Scanned copy of your identification document"
              renderSkeleton={(field) => (
                <FormControl>
                  <FileUploader files={field.value} onChange={field.onChange} />
                </FormControl>
            )}/>
        
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h1 className="sub-header" >Consent and Privacy</h1>
          </div>
        </section>

        <CustomFrom
            fieldType={FromFieldType.CHECKBOX}
            control={form.control}
            name="treatmentConsent"
            label="I consent to receive treatment for my health condition."
        />
        <CustomFrom
            fieldType={FromFieldType.CHECKBOX}
            control={form.control}
            name="disclosureConsent"
            label="I consent to the use and disclosure of my health information for treatment purposes."
        />
        <CustomFrom
            fieldType={FromFieldType.CHECKBOX}
            control={form.control}
            name="privacyConsent"
            label="I acknowledge that I have reviewed and agree to the privacy policy"
        />

        <SubmitBtn isLoading={isLoading}>Submit and continue</SubmitBtn>
      </form>
    </Form>
  );
};

export default RegisterForm;
