import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import SearchHeader from "./SearchHeader";
import WebSearchResults from "./WebSearchResults";

function GoogleResume() {
  return (
    <>
      <SearchHeader />
      <NavBar />
      <WebSearchResults />
      <Footer />
    </>
  );
}

export default GoogleResume;
