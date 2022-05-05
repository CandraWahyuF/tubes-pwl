import React, { useState } from "react";
import Topbar from "../components/topbar/Topbar";
import Leftbar from "../components/leftbar/Leftbar";
import { LayoutStyle } from "./LayoutStyle";

function Layout() {
  const classes = LayoutStyle();
  const [isMobile, setMobile] = useState(false);
  const funcsetMobile = () => {
    setMobile(!isMobile);
  };

  return (
    <div className={classes.root}>
      <Leftbar isMobile={isMobile} funcsetMobile={funcsetMobile} />
      <Topbar funcsetMobile={funcsetMobile} />
      <main>
        <div className="classes.topbarWidth" />
        {/* {children} */}
        DISINI KONTEN MUNCUL LAH
      </main>
    </div>
  );
}

export default Layout;
