import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import SearchBar from './components/search-bar/SearchBar';
import {useState} from 'react'
import AddNewTaskModal from './components/add-new-task-modal/AddNewTaskModal';

const App = () =>  {

  const [modalShow, setModalShow] = useState(false);

  const showModal = () => {
    setModalShow(true)
  }

    return (
      <Container>
        <Header showModal={showModal}/>
        <SearchBar/>
        <MainBody/>
        <AddNewTaskModal show={modalShow} onHide={() => setModalShow(false)}/>
      </Container>
    );
}

export default App;
