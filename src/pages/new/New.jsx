import "./New.scss";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({inputs,title}) => {

  const [file,setFile] = useState(null)

 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {
                inputs.map((input,index)=>(
                <div className="formInput" key={index}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
                ))
              }
              <button >send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
