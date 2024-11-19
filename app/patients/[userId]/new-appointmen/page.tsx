import AppointmenForm from "@/app/components/form/AppointmenForm";
import { getUser } from "@/app/lib/actions/patient.actions";
import Image from "next/image";

const newAppointement =  async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[700px] flex-1 justify-between">
          <Image src="/assets/icons/logo-full.svg" alt="logo" width={1000} height={1000} className="mb-10 h-10 w-fit" />

          <AppointmenForm user={user} />

            <p className="justify-items-end text-dark-600 xl:text-left mt-5 " >© 2024 CarePulse</p>
        </div>
      </section>
      <Image src="/assets/images/appointment-img.png" alt="patient" width={1000} height={1000} className="side-img max-w-[390px] bg-bottom " />
    </div>
  );
}
export default newAppointement