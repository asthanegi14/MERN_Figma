import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import { FaSortDown, FaSearch } from 'react-icons/fa';
import union from "../assets/Union.png";
import { useState } from 'react';
import JoinGroup from './JoinGroup';

function WebNavbar() {
  const [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin(!login);
    console.log("login = " + login);
  }

  return (
    <>
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='flex justify-center items-center'>
            <p className="text-[#00A854]">AGT.</p><p>W</p>
            <p className='w-[20px]'><img src={union} alt="union" /></p>
            <p>RLD</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto w-full flex justify-center sm:m-0 m-2">
              <Form inline="true" className="sm:w-1/2 w-full relative">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaSearch className="text-gray-400" />
                  </span>
                  <FormControl
                    type="text"
                    placeholder="Search for your favorite groups in ATG"
                    className="w-full pl-10 rounded-full"
                  />
                </div>
              </Form>
            </Nav>
            <Navbar.Collapse className="sm:justify-content-end flex justify-center items-center">
              <Navbar.Text className='flex gap-2 text-nowrap'>
                Create account. <p className='text-blue-500 font-bold cursor-pointer' onClick={handleLogin}> It's free!</p>
                <FaSortDown />
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {login && <JoinGroup onClose={handleLogin} />}
    </>
  );
}

export default WebNavbar;
