import Head from 'next/head'
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Home = (data) => {
  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name='description' content={data.meta.desc} />
      </Head>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-3xl font-medium title-font text-white mb-12 text-center'>
            Shayari
          </h1>
          <div className='flex flex-wrap -m-4'></div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      `https://api.ratrey.co/v1/good-reads/quote/`
    );
    return { props: data };
  } catch (e) {
    return {
      props: {
        error: "e.response.data",
      },
    };
  }
};

export default Home;
