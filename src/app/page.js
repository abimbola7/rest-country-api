import Results from '@/components/results';
import Image from 'next/image'
import { Fragment } from 'react';

export default async function Home() {
  await new Promise(resolve=>setTimeout(resolve, 6000));
  const res = await fetch(`https://restcountries.com/v3.1/all`, { next: { revalidate: 10000 } })
  if (!res.ok) {
    throw new Error("Cannot fetch data")
  }
  const data =  await res.json();
  return (
    <Fragment>
      {
        !data && <div>No result found</div>
      }
      {
        data && (
          <Results results={data}/>
        )
      }
    </Fragment>
  )
}
