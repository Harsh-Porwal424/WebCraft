import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

// // Your agency page component
// const AgencyPage = () => {
//   return (
//     <div>
//       <h1>Agency Page</h1>
//       {/* Add your agency page content here */}
//     </div>
//   );
// };

const Page = async () => {
    const authUser = await currentUser()
    if(!authUser) return redirect('/sign-in')
    return <div>Agency</div>
}

export default Page

// const Page = async () => {
//     const authUser = await currentUser()
//     if (authUser) return redirect('/sign-in')
//     return <div>Agency</div>
// }

// export default Page;
// export default AgencyPage;

