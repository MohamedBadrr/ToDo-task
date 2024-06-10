import React, { useState } from "react";

const TaskForm = ({ addTask, language, showform }) => {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskTime) {
      addTask({ name: taskName, time: taskTime, completed: false });
      setTaskName("");
      setTaskTime("");
      alert(language === "en" ? "Task added!" : "تم إضافة المهمة!");
    }
    showform(false);
  };
  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 add-task-form"
      >
        <div className="task-title">
          <h4>{language === "en" ? "New Task" : " مهمة جديدة"}</h4>
          <span>
            <i
              class="fa-solid fa-xmark"
              onClick={() => {
                showform(false);
              }}
            ></i>
          </span>
        </div>
        <p>
          {language === "en"
            ? "Add now task from here"
            : "اضف  مهمة جديدة من هنا "}
        </p>
        <input
          type="text"
          placeholder={language === "en" ? "Task Name" : "اسم المهمة"}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2"
        />
        <input
          type="time"
          placeholder={language === "en" ? "Task Time" : "وقت المهمة"}
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="text-white ">
          {language === "en" ? "Create Task" : "أضف مهمة"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
