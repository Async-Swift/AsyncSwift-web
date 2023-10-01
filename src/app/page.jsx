import { cookies } from "next/headers";

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Header from "./_views/_layouts/Header";
import Main from "./_views/_layouts/Main";
import Footer from "./_views/_layouts/Footer";

export default async function Page({}) {
  // const supabase = createServerComponentClient({ cookies });

  // let {
  //   data: [{ title, subtitle, date, location }, ...arg],
  //   error,
  // } = await supabase.from("conference").select("*");

  // if (error) return <p>Error</p>;

  const title = "title";
  const subtitle = "subtitle";
  const location = "location";
  const date = new Date();

  return (
    <main className="w-full h-screen">
      <div className="flex flex-col justify-between w-full h-full ">
        <Header title={title} />
        <Main subtitle={subtitle} location={location} date={date} />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
