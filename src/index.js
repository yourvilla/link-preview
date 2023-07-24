import "react-app-polyfill/ie11"; // required for IE11
import "react-app-polyfill/stable"; // required for IE11
import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PageNavigationListener from "./utils/PageNavigationListener.utils";
import "./index.sass";
import { BLOG_LINK } from "./utils/Constants.utils";
import { Testing } from "./pages/testing";
import { Marvel } from "./pages/Marvel";

const APP = (
  <BrowserRouter>
    <PageNavigationListener />
    <Switch>
      <Route exact path="/" component={Marvel} />
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path={BLOG_LINK} component={Blog} />
      <Route exact path={`${BLOG_LINK}:blogPostFileName`} component={BlogPost} />
    </Switch>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// const prefersColorSchemeWatcher = window.matchMedia("(prefers-color-scheme: dark)");

// prefersColorSchemeWatcher.addEventListener("change", () => {
//   const favicon = document.querySelector('link[rel="icon"]');
//   favicon.href = null;
//   favicon.href = "/favicon.svg";
// });
