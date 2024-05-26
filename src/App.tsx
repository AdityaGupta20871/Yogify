import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import HomePage from "./components/HomePage";
import EventFormPage from "./components/EventFormPage";
import EventPage from "./components/EventPage";
import NavbarHeader from "./components/NavbarHeader"
import ExercisePage from './components/ExercisePage';
import UploadImage from './components/UploadImage';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Footer from './components/Footer';


const App=()=> {
  return (
    <Authenticator socialProviders={['google']} variation='modal'>
    {() => (
      <>
    <Router>
    <NavbarHeader />
        <Routes>
        <Route path="/form" element={<EventFormPage />} />
        <Route path="/uploadimage" element={<UploadImage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/workshop" element={<EventPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
      <Footer />
    </Router>
      </>
          )}
        </Authenticator>
          
  );
}

export default App;
