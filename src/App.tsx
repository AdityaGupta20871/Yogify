import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import HomePage from "./components/HomePage";
import EventFormPage from "./components/EventFormPage";
import EventPage from "./components/EventPage";
import NavbarHeader from "./components/NavbarHeader"

const App=()=> {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <Authenticator>
    {() => (
      <>
    <Router>
    <NavbarHeader />
        <Routes>
        <Route path="/form" element={<EventFormPage />} />
        <Route path="/workshop" element={<EventPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
      {/* <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div> */}
      </>
          )}
          </Authenticator>
  );
}

export default App;
