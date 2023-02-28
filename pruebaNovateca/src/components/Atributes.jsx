import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';

function Atributes() {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>TIPO</th>
            <th>DESCRIPCION</th>
            <th>CONSTRAINTS</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>
              <Form.Select aria-label="Default select example">
                <option>DECIMAL </option>
                <option value="1">One</option>
              </Form.Select>
            </td>
            <td>Atributo para xyz</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>CELULAR</td>
            <td><Form.Select aria-label="Default select example">
                <option>CHAR </option>
                <option value="1">One</option>
              </Form.Select></td>
            <td>Atributo para xyz</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Atributes;
