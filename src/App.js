import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import SearchBar from './components/search-bar/SearchBar';
import {useState, useEffect} from 'react'
import AddNewTaskModal from './components/add-new-task-modal/AddNewTaskModal';
import EditTaskModal from './components/edit-task-modal/EditTaskModal';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';

const App = () =>  {

  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false)

  const [tasks, setTasks] = useState([])
  

  const [selectedValue, setselectedValue] = useState("")
  const [sortstatus, setSortStatus] = useState(false);

  const [data, setData] = useState({
    taskname: "",
    name: "",
    price: "",
    delivery: "",
    tag: "",
    status: "",
    imageurl: ""
  })

  const [editData, setEditData] = useState({
    id: "",
    taskname: "",
    name: "",
    price: "",
    delivery: "",
    tag: "",
    status: "",
    imageurl: ""
  })


  const handleAddTask = (e) => {
    const newData = {...data}
    console.log(newData)
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const handleEditTask = (e) => {
    const newData = {...editData}
    newData[e.target.id] = e.target.value
    setEditData(newData)
  }

  const addNewTask = (e) => {
      e.preventDefault();
      axios.post('https://us-central1-drugstoc-cc402.cloudfunctions.net/app/api/create', {
        taskname: data.taskname,
        name: data.name,
        price: data.price,
        delivery: data.delivery,
        tag: data.tag,
        status: data.status,
        imageurl: data.imageurl
      })
        .then(res => {
            console.log(res.data)
        })
  }

  const editTask = (e, taskid) => {
    console.log(taskid)
    e.preventDefault();
    axios.put(`https://us-central1-drugstoc-cc402.cloudfunctions.net/app/api/update/${taskid}`, {
      taskname: editData.taskname,
      name: editData.name,
      price: editData.price,
      delivery: editData.delivery,
      tag: editData.tag,
      status: editData.status,
      imageurl: editData.imageurl
    })
      .then(res => {
          console.log(res.data)
      })
}

  const showAddModal = () => {
    setAddModalShow(true)
  }


  const showEditModal = (task) => {
    setEditModalShow(true)
    const newData = {...editData}
    newData.id = task.id
    newData.name = task.name
    newData.taskname = task.taskname
    newData.delivery = task.delivery
    newData.price = task.price
    newData.tag = task.tag
    newData.imageurl = task.imageurl
    newData.status = task.status
    setEditData(newData)
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

  // Delete task from list

  const deleteTask = (taskid) => {
    axios.delete(`https://us-central1-drugstoc-cc402.cloudfunctions.net/app/api/delete/${taskid}`)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
    const newTaskList = tasks.filter(task => {
      return task.id !== taskid
    })
    setTasks(newTaskList)
  }

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
          tasks={tasks}
          deleteTask={deleteTask}
        />
        <AddNewTaskModal 
          show={addModalShow} 
          onHide={() => setAddModalShow(false)}
          addNewTask={addNewTask}
          handleAddTask={handleAddTask}
          data={data}
        />
        <EditTaskModal 
          show={editModalShow} 
          onHide={() => setEditModalShow(false)}
          editData={editData}
          handleEditTask={handleEditTask}
          editTask={editTask}
        />
      </Container>
    );
}

export default App;
