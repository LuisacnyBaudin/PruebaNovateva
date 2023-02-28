import Atributes from './components/Atributes';
import Relaciones from './components/Relaciones';
import Navbar from './components/Navbar'
import { Form } from 'react-bootstrap';
import './App.css'


function App() {
 

  return (
    <div className="App">
      <header> 
      <Navbar/>
      </header>

      <main>
      <container>
      <Form>
      <Form.Group className="mb-3 formBasicEmail " controlId="formBasicEmail">
        <Form.Label className='labelForm'>Nombre </Form.Label>
        <Form.Control type="text" placeholder="Person" />
        <Form.Label className='labelForm' >Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Tabla usada para x y z" />
        
      </Form.Group>
      </Form>
      <br/> 
      </container>
      <div>
      <Atributes/>
      </div>
      <div>
      <Relaciones/>
      </div>
      
      </main>

    
    </div>
  )
}

export default App; 
