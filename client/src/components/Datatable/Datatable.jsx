import React, { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

const Datatable = ({ columns, data }) => {
    // Ensure columns and data are memoized
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoizedData = useMemo(() => data, [data]);

    const table = useMaterialReactTable({
        columns: memoizedColumns,
        data: memoizedData,
    });

    return <MaterialReactTable table={table} />;
};

export default Datatable;
