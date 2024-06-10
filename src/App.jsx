import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [language, setLanguage] = useState("en");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm , setShowForm] = useState(false);

  useEffect((e) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))||[];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };


  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      
    <div className={` ${language === "ar" ? "rtl" : "ltr"} screen`}>
      <div className="home-form">
        <div className="search-section">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            language={language}
          />
          <button className=" text-center" onClick={()=>{setShowForm(true)}}>
            {language === "en" ? "+ Add Task" : "أضف مهمة + "}
            
          </button>
<div className="tranlate">
<span>EN</span>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleLanguage}
            />
          </div>
          <span>AR</span>
</div>
        </div>
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          language={language}
        />
        {showForm && <TaskForm addTask={addTask} language={language} showform={setShowForm}/>}
      </div>
    </div>
    </>
  );
};

export default App;


const Search = ({ searchTerm, setSearchTerm, language }) => {
  return (
    <input
      type="text" 
      placeholder={language === 'en' ? 'Search Tasks' : 'ابحث في المهام'}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="input-search"
    />
  );
};