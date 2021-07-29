import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import SearchBar from './components/search-bar/SearchBar';
import {useState, useEffect} from 'react'
import AddNewTaskModal from './components/add-new-task-modal/AddNewTaskModal';
import EditTaskModal from './components/edit-task-modal/EditTaskModal';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';

const App = () =>  {

  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false)

  const [tasks, setTasks] = useState([])
  

  const [selectedValue, setselectedValue] = useState("")
  const [sortstatus, setSortStatus] = useState(false);


  // const [taskslist, setTasklist] = useState([])

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


  
  // call Api on load
  useEffect(() => {
    axios.get('https://us-central1-drugstoc-cc402.cloudfunctions.net/app/api/read')
      .then(res => {
        setTasks(res.data)
      })
        .catch(error => {
          console.log(error)
        })
  },[])

    // /Sort Function by name
    const compareWithName = (a, b) => {
      // Using toUpperCase() to ignore character casing
      const nameA = a.taskname.toLowerCase();
      const nameB = b.taskname.toLowerCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    };

    //Sort Function by price in Descending order
    const compareWithPrice = (a, b) => {
      return b.price - a.price;
    };
  
    const sortTasks = (value) => {
      if(value === "price"){
        setselectedValue("price");
        setTasks([...tasks.sort(compareWithPrice)])
      }else{
        setselectedValue("alphabet")
        setTasks([...tasks.sort(compareWithName)])
      }
    }

    const flipSort = () => {
      if (selectedValue === "price" && sortstatus === false) {
        setTasks([...tasks.sort(compareWithPrice)].reverse());
        setSortStatus(true);
      } 
      else if (selectedValue === "price" && sortstatus) {
        setTasks([...tasks.sort(compareWithPrice)]);
        setSortStatus(false);
      } 
      else if (selectedValue === "alphabet" && sortstatus === false) {
        setTasks([...tasks.sort(compareWithName)].reverse());
        setSortStatus(true);
      } 
      else if (selectedValue === "alphabet" && sortstatus) {
        setTasks([...tasks.sort(compareWithName)]);
        setSortStatus(false);
      }
    }

    return (
      <Container>
        <Header showAddModal={showAddModal}/>
        <SearchBar 
          sortTasks={sortTasks}
          flipSort={flipSort}
        />
        <MainBody 
          showEditModal={showEditModal} 
          confirm={confirmDelete} 
          tasks={tasks}

        />
        <AddNewTaskModal 
          show={addModalShow} 
          onHide={() => setAddModalShow(false)}
        />
        <EditTaskModal 
          show={editModalShow} 
          onHide={() => setEditModalShow(false)}
        />
      </Container>
    );
}

export default App;
