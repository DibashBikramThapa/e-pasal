import React, { useState } from "react";
import Head from "next/head";

import Layout from "@/components/Layout/View";
import HomeView from "@/components/Home/View"


export default function Home() {
  const [mobile_view, setMobileView] = useState(false);

  return (
    <>
      <Head>
        <title>E-Pasal</title>
        <link rel="icon" href="/logo-ic.png" />
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <div className="flex">
        <Layout setMobileView={setMobileView} mobile_view={mobile_view}>
          <HomeView mobile_view={mobile_view}/>
        </Layout>
      </div>
    </>
  );
}
