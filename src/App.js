import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import SearchBar from './components/search-bar/SearchBar';
import {useState} from 'react'
import AddNewTaskModal from './components/add-new-task-modal/AddNewTaskModal';
import EditTaskModal from './components/edit-task-modal/EditTaskModal';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const App = () =>  {

  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false)

  const showAddModal = () => {
    setAddModalShow(true)
  }

  const showEditModal = () => {
    setEditModalShow(true)
  }

  const confirmDelete = () => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }

    return (
      <Container>
        <Header showAddModal={showAddModal}/>
        <SearchBar/>
        <MainBody showEditModal={showEditModal} confirm={confirmDelete  }/>
        <AddNewTaskModal show={addModalShow} onHide={() => setAddModalShow(false)}/>
        <EditTaskModal show={editModalShow} onHide={() => setEditModalShow(false)}/>
      </Container>
    );
}

export default App;
