import React from "react";
import Sidebar from "./component/sidebar";
import Main from "./component/Main";
import Background from "./component/Background";
import PageProvider from "./hooks/pageContext";

function App() {
  return (
    <div className="h-full flex flex-row">
      <PageProvider>
        <Sidebar/>
        <Background/>
        <Main />
      </PageProvider>
    </div>
  );
}

export default App;
