// import { headers } from "next/headers";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { RequestCookies } from "@edge-runtime/cookies";
// import { cache } from "react";

import Header from "./_views/_layouts/Header";
import Main from "./_views/_layouts/Main";
import Footer from "./_views/_layouts/Footer";

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
    <main className="w-full h-screen">
      <div className="flex flex-col justify-between w-full h-full ">
        <Header />
        <Main />
        <Footer />
      </div>
    </main>
  );
  // } catch (error) {
  //   console.error("Error:", error);
  //   return null;
  // }
}
