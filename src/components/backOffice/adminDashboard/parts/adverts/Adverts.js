import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../Header";
import UnderConstruction from '../../../../underConstruction/UnderConstruction';

const Adverts = () => {
    return (
        <>
            <UnderConstruction />
            <Box>
                <Header title="ADVERTS" subTitle="List of Adverts" />
                <Box sx={{ height: 650, mx: "auto" }}>
                    <DataGrid
                        checkboxSelection
                        slots={{
                            toolbar: GridToolbar,
                        }}
                        rows={rows}
                        // @ts-ignore
                        columns={columns}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Adverts;
