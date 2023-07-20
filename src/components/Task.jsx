export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const toggleDoneOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/*
      HINTS: if task is completed, below "span" will show like this 
        <span className="text-decoration-line-through">{title}</span>
        But if task is not completed : 
        <span>{title}</span>
      */}
      {
        <span
          onClick={toggleDoneOnClick}
          className={
            completed ? "text-decoration-line-through" : "text-decoration-none"
          }
        >
          {title}
        </span>
      }
      <button className="btn btn-success" onClick={toggleDoneOnClick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
