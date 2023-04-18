import React, { useEffect, useState } from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widget from "../../components/Widget";
import Featured from "../../components/Featured";
import Chart from "../../components/Chart";
import Tabel from "../../components/Tabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [isMessageShown, setIsMessageShown] = useState(false);

  useEffect(() => {
    if (!isMessageShown) {
      // Show the toast message
      toast.success("Welcome user..", {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: false,
      });

      // Set the flag to true indicating that the message has been shown
      setIsMessageShown(true);
    }
  }, [isMessageShown]);

  return (
    <div className="home">
      <ToastContainer />
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tabel />
        </div>
      </div>
    </div>
  );
};

export default Home;
