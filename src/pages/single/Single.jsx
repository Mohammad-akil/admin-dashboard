import "./Single.scss";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
import Chart from './../../components/Chart';
import Tabel from './../../components/Tabel';


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane doe</h1>
                <div className="detailItem">
                  <div className="itemkey">Email:</div>
                  <div className="itemValue">janedoe@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemkey">Phone:</div>
                  <div className="itemValue">+123456789</div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title={' title="User Spending ( Last 6 Months)'}/>
          </div>
        </div>
        <div className="bottom">
          <Tabel/>
        </div>
      </div>
    </div>
  );
};

export default Single;
