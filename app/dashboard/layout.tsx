"use client"
import clsx from "clsx";
import { redirect } from "next/navigation";
import { useState } from "react";
import SideNav from '@/app/ui/dashboard/sidenav';


export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {

  const [darkmode, SetDarkmode] = useState(true);



  return (
    <div className={clsx(
      'flex h-screen flex-col md:flex-row md:overflow-hidden',
      {
        'bg-gray-100 text-gray-500': darkmode,
        'bg-green-500 text-black': !darkmode,
      },
    )}>
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        <button className="h-[100px]"
          onClick={() => {
            SetDarkmode(!darkmode);
          }}>
          Toogle Button
        </button> 
      </div>

    </div>
  )

}