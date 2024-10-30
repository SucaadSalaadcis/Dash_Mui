// File: ReusableDataTable.js
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'datatables.net-bs5'; // Bootstrap 5 DataTables
import 'datatables.net-responsive-bs5'; // Responsive DataTables

const ReusableDataTable = ({ columns, data, options = {} }) => {
    const tableRef = useRef(null);

    useEffect(() => {
        const table = $(tableRef.current).DataTable({
            data: data.map((item) =>
                columns.map((col) => item[col.data] || 'N/A') // Provide default value
            ),
            columns: columns.map((col) => ({ title: col.title, defaultContent: 'N/A' })), // Default content
            pageLength: 10,
            responsive: true,
            destroy: true,
            ...options,
        });

        return () => {
            table.destroy();
        };
    }, [columns, data, options]);

    return (
        <div className="container mt-4">
            <table
                ref={tableRef}
                className="table table-striped table-bordered"
                style={{ width: '100%' }}
            ></table>
        </div>
    );
};

export default ReusableDataTable;
