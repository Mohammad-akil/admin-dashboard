import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./DataTable.scss";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../Datablesource";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const DataTable = () => {
  const [data, setData] = useState(userRows);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setData(list);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (err) {
      console.log(err);
    }
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      feild: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <div className="cellAction">
              <Link to="test" style={{ textDecoration: "none" }}>
                <div clsassName="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add new
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
