import CheckLogin from "@/createData/CheckLogin";
import CheckUserIsExisit from "@/createData/CheckUserIsExisit";
import CreateCity from "@/createData/CreateCity";
import CreateeBranches from "@/createData/CreateeBranches";
import CreateeCarsData from "@/createData/CreateeCarsData";
import CreateeOffers from "@/createData/CreateeOffers";
import CreateeReview from "@/createData/CreateeReview";
import CreateeServices from "@/createData/CreateeServices";
import CreateServise from "@/createData/CreateServise";
import CreateUsers from "@/createData/CreateUsers";
import UploadCarImage from "@/createData/UploadCarImage";

import Image from "next/image";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            By khalid nadish
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-start flex-col gap-2  flex-wrap">
          <CreateCity />
          <CreateUsers />
          <CreateeBranches />
          <CreateeOffers />
          <CreateeServices />
          <CreateeReview />
          <CreateeCarsData />
          <UploadCarImage />
          <CreateServise />
        </div>

        <div className="w-full flex items-end  justify-start  flex-col gap-2  flex-wrap ">
          <CheckUserIsExisit />
          <CheckLogin />
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/oneStop.png"
          alt="oneStop"
          width={180}
          height={37}
          priority
        />
      </div>
      <p>Version: 1.0.50</p>
      <p>8/9/2024</p>
    </main>
  );
}
