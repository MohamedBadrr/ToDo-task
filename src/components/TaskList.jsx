import React from "react";

const TaskList = ({ tasks, deleteTask, toggleTask, language }) => {
  return (
    <ul className="">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-top border p-2 mt-3 m-auto one-task"
        >
          <div>
            <p>Task #{index + 1}</p>
            <p className={task.completed ? "line-through" : ""}>{task.name}</p>
            <p>{task.time}</p>
          </div>
          <div>
            <button
              onClick={() => toggleTask(index)}
              className="text-success p-2 mr-2"
            >
              {task.completed
                ? language === "en"
                  ? "Undo"
                  : "تراجع"
                : language === "en"
                ? "Complete"
                : "إنهاء"}
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="text-danger p-2"
            >
              {language === "en" ? "Delete" : "حذف"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
