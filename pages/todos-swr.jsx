import axios from 'axios';
import useSWR from 'swr';

const fetcher = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos').catch((error) => console.log(error));
  return response.data;
};
const TodosSwrPage = () => {
  const { data, error } = useSWR('todos', fetcher);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosSwrPage;
