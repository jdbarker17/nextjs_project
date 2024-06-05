import { Metadata } from 'next';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import notFound from '../invoices/[id]/edit/not-found';
import CustomersTable from '@/app/ui/customers/table';
 
export const metadata: Metadata = {
  title: 'Customers Page',
};


export default async function Page({
    searchParams,
  }: {
    searchParams? :{
      query?: string;
      page?: string;
    };
  })  {

  // Will either pull the query or set the query parameter to ''
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  
  const [customers] = await Promise.all([
    //fetchCustomers(),
    fetchFilteredCustomers(query),
  ]);
  
  if (!customers) {
    notFound();
  }
    return (
        <div>
          <CustomersTable customers = {customers}/> 
        </div>
      
    )
};