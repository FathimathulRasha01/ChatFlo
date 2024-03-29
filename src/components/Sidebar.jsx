import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

import {signOut} from "firebase/auth"
import { auth } from '../firebase'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
      {/* <button onClick={()=>signOut(auth)}><div>logout</div></button> */}
    </div>
  );
};

export default Sidebar;
