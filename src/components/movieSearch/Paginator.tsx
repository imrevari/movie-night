import { Pagination } from "@mui/material";
import { FC, useState } from "react";



const Paginator: FC<any> = ({pages, setPage}) => {

    const [curentPage, setCurrentPage] = useState<number>(1)

    const changePage =(newPage: number) => {
        setCurrentPage(newPage)
        setPage(newPage)
    }

    return(
        <Pagination 
        count={pages} 
        sx={{ margin: '15px 0 30px 0'}} 
        page={curentPage} 
        onChange={(_, page) => changePage(page)}
        size="large"/>
    )


}

Paginator.displayName = 'Paginator';

export default Paginator;