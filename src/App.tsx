import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import HomePage from "./components/HomePage";
import EventFormPage from "./components/EventFormPage";
import EventPage from "./components/EventPage";
import NavbarHeader from "./components/NavbarHeader"
import ExercisePage from './components/ExercisePage';

const App=()=> {
  return (
    <Authenticator>
    {() => (
      <>
    <Router>
    <NavbarHeader />
        <Routes>
        <Route path="/form" element={<EventFormPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/workshop" element={<EventPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
      </>
          )}
          </Authenticator>
  );
}

export default App;
