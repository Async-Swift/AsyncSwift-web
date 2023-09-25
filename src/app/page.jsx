import { cookies } from "next/headers";
import Image from "next/image";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import AsyncSwiftLogo from "/public/AsyncLogo.png";
import TBDDesign from "/public/syncswift-2023-tbd-design.png";
import Footer from "./_views/_layouts/Footer";

import { CONFERENCE } from "../utils/consts";

export default async function Page({}) {
  const supabase = createServerComponentClient({ cookies });

  let {
    data: [{ title, subtitle, date, location }, ...arg],
    error,
  } = await supabase.from("conference").select("*");

  return (
    <main className="w-full h-screen">
      <div className="flex flex-col justify-between w-full h-full ">
        <header className="flex justify-between w-full pr-16 pt-9 pl-11 max-sm:flex-col-reverse max-sm:gap-6 max-sm:pt-12 max-sm:pl-4">
          <div className="text-3xl font-bold">
            <div>{title}</div>
            <div>{CONFERENCE.TEXT}</div>
          </div>

          <Image alt="AsyncSwift" src={AsyncSwiftLogo} width={62} />
        </header>
        <div className="flex flex-col items-center gap-32">
          <div className="w-10/12">
            <Image alt="SyncSwift 2023 TBD Design" src={TBDDesign}></Image>
          </div>
          <div className="mt">
            <div className="text-3xl text-center text-white font-extralight">
              {subtitle}
            </div>
            <div className="mt-2 text-base font-light leading-relaxed text-center text-white text-opacity-50">
              {new Intl.DateTimeFormat("ko-KR").format(new Date(date))}{" "}
              {location}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
