import React from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import MetaDecorator from "../components/Util/MetaDecorator";
// import metaThumbnail from "../data/images/meta/testing.jpg";

export const Marvel = () => {
  const title = "Marvel";

  return (
    <>
      <MetaDecorator
        description="Marvel Captain America"
        title="Fan Page Marvel"
        imageUrl="https://s3.amazonaws.com/images.seroundtable.com/google-submit-url-1516800645.jpg"
        // imageUrl={metaThumbnail}
        imageAlt="Marvel"
      />
      <NavigationBar />
      <div>{title}</div>
    </>
  );
};
