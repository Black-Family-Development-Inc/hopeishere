import * as React from "react";
import { ErrorComp } from "../components/ErrorComp";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const NotFoundPage = () => {
  return (
    <main>
      <title>Page Not found</title>
      <DefaultLayout variant="error">
        <ErrorComp />
      </DefaultLayout>
    </main>
  );
};

export default NotFoundPage;
