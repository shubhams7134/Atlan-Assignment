import React from 'react';
import Table from 'react-bootstrap/Table';
function ReactTable(props) {
  return (
    <div >
      <div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>Contact Title</th>
              <th>Address</th>
              <th>Country</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {props.tabledata.map(details => {
              return (
                <tr>
                  <td>{details.customerID}</td>
                  <td>{details.companyName}</td>
                  <td>{details.contactName}</td>
                  <td>{details.contactTitle}</td>
                  <td>{details.address.street},  {details.address.city}, {details.address.postalCode}, {details.address.country}</td>
                  <td>{details.address.country}</td>
                  <td>{details.address.phone}</td>
                </tr>
            )
            }
            )
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ReactTable;
