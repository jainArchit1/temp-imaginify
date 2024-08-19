import React from "react";

import { UserButton } from "@clerk/nextjs";

import { auth } from "@clerk/nextjs";

const Home = () => {
  const { userId } = auth();
  return (
    <div>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default Home;
