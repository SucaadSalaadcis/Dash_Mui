// File: ExampleUsage.js
import React from 'react';
import ReusableDataTable from '../../src/reusible/Reusible_data_table'

import VisibilityIcon from '@mui/icons-material/Visibility';

const Agents = () => {
  // Define columns for the DataTable
  const columns = [
    { title: 'No', data: 'no' },
    { title: 'Name', data: 'name' },
    { title: 'Bussiness', data: 'business' },
    { title: 'Contact', data: 'contact' },
  ];

  // Sample data to display
  const data = [
    { no: 1, name: 'John Doe', business: 'Clothes', contact: '0615888069', },
    { no: 2, name: 'Jane Smith', business: 'Shoes', contact: '0618663322', },
    { no: 3, name: 'Michael Brown', business: 'Foods', contact: '0619642345', },
    { no: 4, name: 'Jama Abdi', business: 'CGC', contact: '0612432567', },
    { no: 5, name: 'Amina Ali', business: 'Electronics', contact: '0613355421', },
    { no: 6, name: 'Ali Hussein', business: 'Furniture', contact: '0612987765', },
    { no: 7, name: 'Fatima Noor', business: 'Jewelry', contact: '0614156899', },
    { no: 8, name: 'Hassan Yusuf', business: 'Construction', contact: '0617291834', },
    { no: 9, name: 'Maryam Ahmed', business: 'Books', contact: '0611235490', },
    { no: 10, name: 'Ahmed Omar', business: 'Car Rentals', contact: '0614528789', },
    { no: 11, name: 'Sophia Ibrahim', business: 'Beauty Products', contact: '0616782457', },
    { no: 12, name: 'Ismail Farah', business: 'IT Services', contact: '0619991342', },
    { no: 13, name: 'Layla Mohamed', business: 'Pharmacy', contact: '0612228745', },
    { no: 14, name: 'Omar Hassan', business: 'Travel Agency', contact: '0614895621', },
    { no: 15, name: 'Nadia Warsame', business: 'Cleaning Services', contact: '0613492184', },
    { no: 16, name: 'Mohamed Ali', business: 'Bakery', contact: '0615856943', },
    { no: 17, name: 'Farah Abdullahi', business: 'Logistics', contact: '0611234568', },
    { no: 18, name: 'Ibrahim Musa', business: 'Tailoring', contact: '0617291843', },
    { no: 19, name: 'Yasmin Hassan', business: 'Real Estate', contact: '0618712456', },
    { no: 20, name: 'Abdi Karim', business: 'Fitness Center', contact: '0617485231', },
    { no: 21, name: 'Salma Yusuf', business: 'Photography', contact: '0615634879', },
    { no: 22, name: 'Ahmed Saleh', business: 'Marketing', contact: '0614782135', },
    { no: 23, name: 'Hodan Isse', business: 'Stationery', contact: '0612436871', },
    { no: 24, name: 'Jama Farah', business: 'Telecom', contact: '0619978142', },
    { no: 25, name: 'Abdirahman Ali', business: 'Grocery Store', contact: '0618867453', },
    { no: 26, name: 'Halima Mohamed', business: 'Pet Supplies', contact: '0613291864', },
    { no: 27, name: 'Mohamud Yusuf', business: 'Auto Repair', contact: '0618471923', },
    { no: 28, name: 'Ali Jama', business: 'Consulting', contact: '0614527819', },
    { no: 29, name: 'Khadija Hassan', business: 'Event Planning', contact: '0612296741', },
    { no: 30, name: 'Said Omar', business: 'Catering', contact: '0613482157', }

  ];


  // Optional DataTable configuration options
  const options = {
    paging: true,
    search: true,
    info: true,
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h4 className="text-center">Agents Table</h4>
      <ReusableDataTable columns={columns} data={data} options={options} />
    </div>
  );
};

export default Agents;
