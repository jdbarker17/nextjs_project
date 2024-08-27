import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Exercises Page',
};


export default async function Page({
    searchParams,
  }: {
    searchParams? :{
      query?: string;
      page?: string;
    };
  }){


    
    return <p>Exercises Page</p>;
  }