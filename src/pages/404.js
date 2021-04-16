import * as React from "react";
import { navigate } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <button onClick={() => navigate(-1)}>Go back</button>
    </main>
  );
};

export default NotFoundPage;
