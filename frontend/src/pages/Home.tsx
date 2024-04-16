// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { postNote } from '../apiServices/notesApi';
import { useNavigate } from 'react-router-dom';

import { firebaseAuth } from '../config/firebaseConfig';
import { signOut } from 'firebase/auth';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import '../styles/home/styles.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const user = firebaseAuth.currentUser;

  const logoutUser = async (e: any) => {
    e.preventDefault();

    await signOut(firebaseAuth);
    navigate("/");
  }

  const [noteContent, setNoteContent] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const updateNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => setNoteContent(event.target.value);
  const toggleShowToast = () => setShowToast(!showToast);
  const saveNote = async () => {
    if (await postNote(noteContent)) {
      toggleShowToast();
      setNoteContent("");
    }
  };
  return (
    <>
      <br />
      <h2 className='pageTitle'>Welcome {user?.email}! What would you like to save today? </h2>
      <br />
      <Form>
        <Form.Group>
          <Form.Control value={noteContent} id="textarea" as="textarea" rows={6} cols={20} onChange={updateNote} />
          <br />
          <Container fluid>
            <Row>
              <Col xs={12} md={4}></Col>
              <Col xs={12} md={4} className="d-flex justify-content-center">
                <Button
                  variant='primary'
                  style={{ width: '100%' }}
                  onClick={saveNote}
                >
                  Create New Note
                </Button>
              </Col>
              <Col xs={12} md={4}>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col xs={12} md={4}></Col>
              <Col xs={12} md={4} className="d-flex justify-content-center">
                <Button
                  variant='primary'
                  style={{ width: '100%' }}
                  onClick={(e) => logoutUser(e)}
                >
                  Logout
                </Button>
              </Col>
              <Col xs={12} md={4}>
              </Col>
            </Row>
            <ToastContainer position={'bottom-end'}>
              <Toast
                show={showToast}
                onClose={toggleShowToast}
                delay={3000}
                autohide
              >
                <Toast.Header></Toast.Header>
                <Toast.Body className='toastBody'>Post Successful!</Toast.Body>
              </Toast>
            </ToastContainer>
          </Container>
        </Form.Group>
      </Form>
      {/* <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary pt-3 pb-3" onClick={(e) => logoutUser(e)}>Logout</button>
      </div> */}
    </>
  );
};

export default Home;
