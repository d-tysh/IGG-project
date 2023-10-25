import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { TablePage } from "./pages/TablePage";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AddDataPage } from "./pages/AddDataPage";

function App() {
  return (
    <div className="py-4 px-8">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/login' element={
            <RestrictedRoute redirectTo='/table' component={<LoginPage />} />
          } />
          <Route path='/table' element={
              <PrivateRoute redirectTo='/login' component={<TablePage />} />
          } />
          <Route path='/add-table-data' element={
              <PrivateRoute redirectTo='/login' component={<AddDataPage />} />
          } />
         <Route path='*' element={<div className="text-2xl text-center mt-4 ">Sorry, page not found</div>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
