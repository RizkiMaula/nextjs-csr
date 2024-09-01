import { useState, useEffect } from 'react';
import axios from 'axios';

const TodosPage = () => {
  const [data, setData] = useState(null);

  const getTodos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos').catch((error) => console.log(error));
    setData(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {data &&
          data.map((todo) => (
            <li key={todo.id}>
              {todo.id} - {todo.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodosPage;
