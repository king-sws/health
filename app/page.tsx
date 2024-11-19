import Image from "next/image";
import PatientForm from "./components/form/PatientForm";
import Link from "next/link";
import PassKeyModal from "./components/PassKey";

export default function Home({searchParams}: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PassKeyModal /> }
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[496px]">
          <Image src="/assets/icons/logo-full.svg" alt="logo" width={1000} height={1000} className="mb-10 h-10 w-fit" />

          <PatientForm />

          <div className="text-14-regular mt-10 flex justify-between pb-10 ">
            <p className="justify-items-end text-dark-600 xl:text-left " >© 2024 CarePulse</p>
            <Link href="/?admin=true" className="text-green-500">Admin</Link>
          </div>
        </div>
      </section>
      <Image src="/assets/images/onboarding-img.png" alt="patient" width={1000} height={1000} className="side-img max-w-[50%]" />
    </div>
  );
}
