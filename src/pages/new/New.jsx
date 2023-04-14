import "./New.scss";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useRef, useState } from "react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { storage } from "../../firebase";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState();
  const formRef = useRef(null);
  const inputRefs = useRef(null);
  const navigate =useNavigate()

  useEffect(() => {
    const uploadFile = () => {
      if (!file) return;
      const imageName = new Date().getTime() + file.name;
      
     
      const storageRef = ref(storage, `images/${imageName}`);
      

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              console.log("default case");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setData((prev) => ({
              ...prev,
              img: downloadURL,
            }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        Timestamp: serverTimestamp(),
      });
      formRef.current.reset();
      inputRefs.current.value = ''
      navigate(-1)
      console.log('ref')
    } catch (err) {
      console.log(err);
    }
  };
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
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form ref={formRef} onSubmit={handleAdd}>
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
              {inputs.map((input, index) => (
                <div className="formInput" key={index}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    ref={inputRefs}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
