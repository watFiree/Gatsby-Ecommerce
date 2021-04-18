import * as React from "react";
import { navigate } from "gatsby";

import Button from "components/Button";

const NotFoundPage = () => {
  return (
    <main className="w-full h-screen bg-index flex flex-col justify-center items-center text-white">
      <title>Not found</title>

      <h1 className="text-9xl">404</h1>
      <h2 className="text-4xl my-6">Looks like you are lost</h2>
      <div className="flex w-100 ">
        <Button onClick={() => navigate("/")}>Go home</Button>
        <span className="mx-4"></span>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
