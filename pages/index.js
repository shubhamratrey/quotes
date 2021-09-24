import Head from 'next/head'
import React from "react";
import axios from "axios";

const Quotes = (data) => {
  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='description' content={data.meta.desc} />
        <meta name='author' content='Shubham Ratrey' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv='X-UA-Compatible' content='IE=Edge,chrome=1' />

        <meta property='og:title' content={data.meta.title} />
        <meta property='og:description' content={data.meta.desc} />
        <meta property='og:url' content='https://app.ratrey.co/quotes' />
        <meta property='og:type' content='website' />
        <meta
          property='og:site_name'
          property='og:site_name'
          content='quotes.ratrey.co'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@shubhamratrey' />
        <meta name='twitter:creator' content='@shubhamratrey' />
        <meta name='twitter:title' content={data.meta.title} />
        <meta name='twitter:description' content={data.meta.desc} />
      </Head>

      <div className='flex justify-center items-center h-screen relative'>
        <img
          src={data.image}
          className='w-full h-full absolute filter brightness-50 object-cover'
        />
        <div className='relative text-white text-center'>
          <h1 className='whitespace-pre-wrap text-xl md:text-4xl  font-bold p-4 md:p-52 select-none'>
            {data.quote}
          </h1>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      `https://quotes.ratrey.co/v1/good-reads/quote/`
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

export default Quotes;
