import React from 'react'
import ReusableDataTable from '../../src/reusible/Reusible_data_table'

export default function Customers() {

  // Define columns for the DataTable
  const columns = [
    { title: 'No', data: 'no' },
    { title: 'Name', data: 'name' },
    { title: 'Contact', data: 'contact' },
    { title: 'Address', data: 'address' },
    { title: 'Description', data: 'description' },
    { title: 'Agency', data: 'agency' },
  ];

  // Sample data to display
  const data = [
    { no: 1, name: 'Sam coreign', contact: '0615888069', address: '123 Main St', description: 'here are notes', agency: 'GCO' },
    { no: 2, name: 'Smith feo', contact: '0618663322', address: '456 Elm St', description: 'Hello customer', agency: 'DER' },
    { no: 3, name: 'John Doe', contact: '0612345678', address: '789 Oak St', description: 'Important notes', agency: 'ABC' },
    { no: 4, name: 'Jane Smith', contact: '0612345679', address: '321 Pine St', description: 'Order details', agency: 'XYZ' },
    { no: 5, name: 'Emily Davis', contact: '0612345680', address: '654 Maple St', description: 'Delivery schedule', agency: 'LMN' },
    { no: 6, name: 'Michael Johnson', contact: '0612345681', address: '987 Birch St', description: 'Customer service', agency: 'OPQ' },
    { no: 7, name: 'Jessica Brown', contact: '0612345682', address: '135 Cedar St', description: 'Feedback required', agency: 'RST' },
    { no: 8, name: 'Chris Wilson', contact: '0612345683', address: '246 Walnut St', description: 'Sales inquiry', agency: 'UVW' },
    { no: 9, name: 'Patricia Garcia', contact: '0612345684', address: '357 Spruce St', description: 'New arrival', agency: 'XYZ' },
    { no: 10, name: 'David Martinez', contact: '0612345685', address: '468 Ash St', description: 'Discount offer', agency: 'GHI' },
    { no: 11, name: 'Linda Rodriguez', contact: '0612345686', address: '579 Cherry St', description: 'Special event', agency: 'JKL' },
    { no: 12, name: 'James Hernandez', contact: '0612345687', address: '680 Fir St', description: 'Gift ideas', agency: 'MNO' },
    { no: 13, name: 'Elizabeth Lopez', contact: '0612345688', address: '791 Magnolia St', description: 'Appointment confirmation', agency: 'PQR' },
    { no: 14, name: 'Charles Walker', contact: '0612345689', address: '802 Dogwood St', description: 'Service reminder', agency: 'STU' },
    { no: 15, name: 'Sarah Hall', contact: '0612345690', address: '913 Willow St', description: 'Warranty details', agency: 'VWX' },
    { no: 16, name: 'Robert Allen', contact: '0612345691', address: '124 Alder St', description: 'Consultation', agency: 'YZA' },
    { no: 17, name: 'Nancy Young', contact: '0612345692', address: '235 Palm St', description: 'New releases', agency: 'BCD' },
    { no: 18, name: 'Daniel King', contact: '0612345693', address: '346 Cypress St', description: 'Booking details', agency: 'EFG' },
    { no: 19, name: 'Laura Wright', contact: '0612345694', address: '457 Larch St', description: 'Property listing', agency: 'HIJ' },
    { no: 20, name: 'Matthew Scott', contact: '0612345695', address: '568 Hemlock St', description: 'Policy information', agency: 'KLM' },
    { no: 21, name: 'Sophia Green', contact: '0612345696', address: '679 Hickory St', description: 'Ticket details', agency: 'NOP' },
    { no: 22, name: 'Anthony Adams', contact: '0612345697', address: '780 Maplewood St', description: 'Session schedule', agency: 'QRS' },
    { no: 23, name: 'Olivia Nelson', contact: '0612345698', address: '891 Ashwood St', description: 'Class registration', agency: 'TUV' },
    { no: 24, name: 'William Carter', contact: '0612345699', address: '912 Birchwood St', description: 'Recipe suggestions', agency: 'WXY' },
    { no: 25, name: 'Ava Mitchell', contact: '0612345700', address: '103 Cedarwood St', description: 'Seasonal tips', agency: 'ZAB' },
    { no: 26, name: 'James Perez', contact: '0612345701', address: '214 Pinewood St', description: 'Style guide', agency: 'CDE' },
    { no: 27, name: 'Mia Roberts', contact: '0612345702', address: '325 Oakwood St', description: 'Latest trends', agency: 'FGH' },
    { no: 28, name: 'Lucas Turner', contact: '0612345703', address: '436 Maplewood St', description: 'Learning resources', agency: 'IJK' },
    { no: 29, name: 'Charlotte Phillips', contact: '0612345704', address: '547 Walnutwood St', description: 'Care tips', agency: 'LMN' },
    { no: 30, name: 'Henry Campbell', contact: '0612345705', address: '658 Firwood St', description: 'DIY ideas', agency: 'OPQ' },
  ];
  


  // Optional DataTable configuration options
  const options = {
    paging: true,
    search: true,
    info: true,
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h4 className="text-center">Customers Table</h4>
      <ReusableDataTable columns={columns} data={data} options={options} />
    </div>
  );
};


