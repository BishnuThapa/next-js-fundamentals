import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-300 p-3 mr-4">Admin Page Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
