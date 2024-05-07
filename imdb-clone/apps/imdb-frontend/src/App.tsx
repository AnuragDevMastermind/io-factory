import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import {
  LOGIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  IMDB_MOVIES_ENDPOINT,
  SAVED_MOVIES_ENDPOINT,
  ADD_MOVIES_ENDPOINT,
  EDIT_MOVIES_ENDPOINT,
  PROFILE_ENDPOINT,
  HOME_ENDPOINT,
} from "./constants/strings"
import ImdbMovies from "./pages/ImdbMovies"
import { NavBar } from "./components/Navbar"
import SavedMovies from "./pages/SavedMovies"
import AddMovie from "./pages/AddMovie"
import EditMovie from "./pages/EditMovie"
import Profile from "./pages/Profile"
import { CustomSnackBar } from "./components/CustomSnackbars"
import { AuthRoute, ProtectedRoute } from "./components/Route"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <CustomSnackBar />
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path={SIGNUP_ENDPOINT} element={<SignUp />} />
            <Route path={LOGIN_ENDPOINT} element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={HOME_ENDPOINT} element={<SavedMovies />} />
            <Route path={ADD_MOVIES_ENDPOINT} element={<AddMovie />} />
            <Route path={EDIT_MOVIES_ENDPOINT} element={<EditMovie />} />
            <Route path={PROFILE_ENDPOINT} element={<Profile />} />
            <Route path={"*"} element={<SavedMovies />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

// function App() {
//   return (
//     <>
//       <Router>
//         <NavBar />
//         <CustomSnackBar />
//         <Routes>
//           <Route path="/" element={<ImdbMovies />} />
//           <Route path={IMDB_MOVIES_ENDPOINT} element={<ImdbMovies />} />
//           <Route path={SIGNUP_ENDPOINT} element={<SignUp />} />
//           <Route path={LOGIN_ENDPOINT} element={<Login />} />
//           <Route path={SAVED_MOVIES_ENDPOINT} element={<SavedMovies />} />
//           <Route path={ADD_MOVIES_ENDPOINT} element={<AddMovie />} />
//           <Route path={EDIT_MOVIES_ENDPOINT} element={<EditMovie />} />
//           <Route path={PROFILE_ENDPOINT} element={<Profile />} />

//           <Route path={"*"} element={<ImdbMovies />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

export default App
