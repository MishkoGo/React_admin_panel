import { width } from "@mui/system";

export const userColumns = [{ field: "id", headerName: "ID", width: 70}, {
    field: "user", headerName: "№", width: 230, renderCell: (params)=> {
        return (
            <div className="cellWithImg">
                
                {params.row.username}
            </div>
         );
     },
   },
   {
        field: "email", 
        headerName: "Список объектов",
        width: 230,
   },
    {
        
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];


export const userRows = [
    {
        id: 1,
        username: "1200",
        email: "Инструкция ТЭЦ-600",

    },
    {
        id: 2,
        username: "1200",
        email: "Инструкция ТЭЦ-600",

    },
    {
        id: 3,
        username: "1200",
        email: "Инструкция ТЭЦ-600",
    },
    {
        id: 4,
        username: "1200",
        email: "Инструкция ТЭЦ-600",
    },
    {
        id: 5,
        username: "1200",
        email: "Инструкция ТЭЦ-600",

    },
    {
        id: 6,
        username: "1200",
        email: "Инструкция ТЭЦ-600",

    },
    {
        id: 7,
        username: "1200",
        email: "Инструкция ТЭЦ-600",

    },
    {
        id: 8,
        username: "1200",
        email: "Инструкция ТЭЦ-600",
    },
    {
        id: 9,
        username: "1200",
        email: "Инструкция ТЭЦ-600",
    },
    {
        id: 10,
        username: "1200",
        email: "Инструкция ТЭЦ-600",

    }
];