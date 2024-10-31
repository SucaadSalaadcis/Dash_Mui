// File: ExampleUsage.js
import React from 'react';
import ReusableDataTable from '../../src/reusible/Reusible_data_table'


const Products = () => {
  // Define columns for the DataTable
  const columns = [
    { title: 'No', data: 'no' },
    { title: 'Product Name', data: 'name' },
    { title: 'Price', data: 'price' },
    { title: 'Commission', data: 'commission' },
  ];

  // Sample data to display
  const data = [
    { no: 1, name: 'John Doe', price: '$450', commission: '$9.8' },
    { no: 2, name: 'Jane Smith', price: '$500', commission: '$12.5' },
    { no: 3, name: 'Michael Johnson', price: '$320', commission: '$8.0' },
    { no: 4, name: 'Emily Davis', price: '$275', commission: '$7.5' },
    { no: 5, name: 'Chris Brown', price: '$600', commission: '$14.0' },
    { no: 6, name: 'Sarah Wilson', price: '$350', commission: '$9.1' },
    { no: 7, name: 'David Clark', price: '$700', commission: '$16.5' },
    { no: 8, name: 'Laura Moore', price: '$420', commission: '$10.2' },
    { no: 9, name: 'James Taylor', price: '$390', commission: '$9.5' },
    { no: 10, name: 'Patricia Anderson', price: '$430', commission: '$11.0' },
    { no: 11, name: 'Robert Thomas', price: '$480', commission: '$12.8' },
    { no: 12, name: 'Mary Jackson', price: '$520', commission: '$13.0' },
    { no: 13, name: 'Daniel Lee', price: '$590', commission: '$14.8' },
    { no: 14, name: 'Jennifer Harris', price: '$410', commission: '$10.4' },
    { no: 15, name: 'Matthew Hall', price: '$650', commission: '$15.5' },
    { no: 16, name: 'Jessica Adams', price: '$380', commission: '$9.2' },
    { no: 17, name: 'Thomas Baker', price: '$450', commission: '$11.0' },
    { no: 18, name: 'Karen Gonzalez', price: '$570', commission: '$14.0' },
    { no: 19, name: 'Charles Scott', price: '$620', commission: '$15.5' },
    { no: 20, name: 'Nancy Evans', price: '$440', commission: '$10.8' },
    { no: 21, name: 'Paul Parker', price: '$480', commission: '$12.0' },
    { no: 22, name: 'Linda Roberts', price: '$530', commission: '$13.2' },
    { no: 23, name: 'Steven Walker', price: '$610', commission: '$15.0' },
    { no: 24, name: 'Susan Carter', price: '$460', commission: '$11.2' },
    { no: 25, name: 'Barbara Murphy', price: '$590', commission: '$14.5' },
    { no: 26, name: 'Kevin Thompson', price: '$610', commission: '$15.2' },
    { no: 27, name: 'Amanda Wright', price: '$360', commission: '$8.8' },
    { no: 28, name: 'Brian Green', price: '$500', commission: '$12.5' },
    { no: 29, name: 'Dorothy Lewis', price: '$470', commission: '$11.5' },
    { no: 30, name: 'Jason Young', price: '$550', commission: '$13.7' },
  ];



  // Optional DataTable configuration options
  const options = {
    paging: true,
    search: true,
    info: true,
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h4 className="text-center">Products Table</h4>
      <ReusableDataTable columns={columns} data={data} options={options} />
    </div>
  );
};

export default Products;
