import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import DateEvents from '@/components/DateEvents';

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeChella</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner>Boas-vindas ao #CodeChella2023!</Banner>
      <DateEvents />
    </>
  );
}
