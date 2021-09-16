import React, { useState } from "react";
import LoginForm from "./pages/LoginForm/LoginForm";
import LogoutModal from "./components/LogoutModal/LogoutModal";
import DeleteTweet from "./components/DeleteTweet/DeleteTweet";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <LoginForm />
      {/* <LogoutModal /> */}
      {/* <DeleteTweet /> */}
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
