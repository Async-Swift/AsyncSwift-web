// import { headers } from "next/headers";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { RequestCookies } from "@edge-runtime/cookies";
// import { cache } from "react";
import dynamic from "next/dynamic";

import Header from "./_views/_layouts/Header";
import Footer from "./_views/_layouts/Footer";
import Section from "./_views/_layouts/Section";

const Canvas = dynamic(() => import("./_views/_layouts/Canvas"), {
  ssr: false,
  loading: () => <section className="w-full h-screen"></section>,
});
// export const createSupabase = cache(() => {
//   const cookies = new RequestCookies(headers());
//   return createServerComponentClient({ cookies: () => cookies });
// });

export default async function Page({}) {
  // const supabase = createSupabase();
  // try {
  //   let {
  //     data: [{ title, subtitle, date, location }, ...arg],
  //     error,
  //   } = await supabase.from("conference").select("*");

  //   if (error) return <p>Error</p>;

  return (
    <main className="w-full">
      <div className="flex flex-col justify-between w-full h-full ">
        <Header />
        {/* <Canvas /> */}
        <Section />
        <Footer />
      </div>
    </main>
  );
  // } catch (error) {
  //   console.error("Error:", error);
  //   return null;
  // }
}
