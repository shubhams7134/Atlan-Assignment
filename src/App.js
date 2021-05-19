import React from 'react';
import Form from 'react-bootstrap/Form';
import Footer from './Data/Footer';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import data from "./Data/Employee";
import UKdata from "./Data/UKEmployee";
import UKSales from "./Data/UKSales";
import Owner from "./Data/Owner";
import Table from 'react-bootstrap/Table';
import ReactTable from './ReactTable';
function App() {
  var [query, setQuery] = React.useState(0); 
  var [output,setOutput] = React.useState(data);
  function changeQuery(e) {
    setQuery(e);
    console.log(query);
  }
  function UpdateQuery(e) {
    {
      if (query == 1) {
        setOutput(UKdata);
        console.log(output);
      }
      else if (query == 2) {
        setOutput(UKSales);
        console.log(output);
      }
      else if (query == 3) {
        setOutput(Owner);
      }
      else {
        setOutput(data);  
      }
    }
  }
  return (
    <div style={{ paddingLeft: '1%', paddingRight: '1%', backgroundColor: '#fdfaf6' }} >
      <div>
        <div>
          <Navbar bg="dark" variant="dark" style={{ paddingRight: '2%', hegiht: '50px' }}>
            <Navbar.Brand href="#home">
              <img
                style={{ marginLeft: '5%', marginRight: '3%' }}
                alt=""
                src="https://cloudblogs.microsoft.com/uploads/prod/sites/32/2020/05/SQL.png"
                width="70"
                height="40"
              />{' '}
            </Navbar.Brand>
            <span style={{ padding: '.5%', fontWeight: '700', fontSize: '150%', color: 'white' }}>Dummy SQL Server </span>
          </Navbar>
         </div>
        <div style={{ padding: "8% 3%", width: '100%' }}>
          <Form   >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Write the SQL Query</Form.Label>
              <Form.Control type="number" placeholder="Enter SQL Query" onChange={(e) => changeQuery(e.target.value)} />
              <Form.Text className="text-muted">
                <br />
                <Button variant="primary" type="button" style={{ marginLeft: 'auto', marginRight: 'auto' }} onClick={(e) => UpdateQuery()}>
                  Submit
  </Button>
                <Button variant="danger" type="button" style={{ marginLeft: '3%', marginRight: 'auto' }} href="#footerjs">
                  Contact Us
  </Button>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Query</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>SELECT * FROM TABLE WHERE Country = "UK"</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>SELECT * FROM TABLE WHERE Country = "UK" AND ContactTitle ="Sales Representative"</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>SELECT * FROM TABLE WHERE ContactTitle = "Owner"</td>
                    </tr>
                    <tr>
                      <td>Else</td>
                      <td>SELECT * FROM TABLE</td>
                    </tr>
                  </tbody>
                </Table>
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </div>
      
      <ReactTable tabledata={output}  />
      <div id="footerjs" style={{}}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
