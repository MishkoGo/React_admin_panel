import "./datatable.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const actionColumn = [{
        field: "action", 
        headerName: "Action",
        width: 200,
        renderCell: (params)=>{
            return(
                <div className="cellAction">
                 
                 <Link to={"/users/" + params.row.id}>
                    <div className="viewButton">View</div>
                </Link>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }];

  return (
    <div className="datatable">
        <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 10, pageSize: 10 },
          },
        }}
        pageSizeOptions={[9, 10]}
        
      />
    </div>
  )
}

export default Datatable
