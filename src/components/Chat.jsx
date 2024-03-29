import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { IoMdPersonAdd } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <div className="chatInfo-header">
                    <div className="displayName">
                        <span>{data.user?.displayName}</span>
                    </div>
                    <div className="displayImage">
                        <img src={data?.user?.photoURL} />
                    </div>
                </div>
                <div className="chatIcons">
                    <IoVideocamOutline />
                    <IoMdPersonAdd />
                    <MdOutlineMoreHoriz />
                    <button onClick={()=>signOut(auth)}><div>logout</div></button>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
