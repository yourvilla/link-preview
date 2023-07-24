import React, { useEffect } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import { firebaseAnalytics } from "../firebaseConfig";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/testing.jpg";

export const Testing = () => {
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  });

  return (
    <>
      <MetaDecorator
        description="Marvel Captain America"
        title="Fan Page Marvel"
        imageUrl={metaThumbnail}
        imageAlt="Marvel"
      />
      <NavigationBar />
      <div>Marvel</div>
    </>
  );
};
