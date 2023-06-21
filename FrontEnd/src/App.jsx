import './App.scss';
//routing
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import LayoutAdmin from './layout/admin/LayoutAdmin'
import Home from './views/Home'
import HomeAdmin from './views/admin/HomeAdmin'
import NotFound from './views/NotFound';
import HaveService from './views/ViborgHaveservice'
import HaveServiceSlider from './views/ViborgHaveserviceSlider'
import Vejret from './views/Vejret'
import Nyheder from './views/Nyheder'
import Energidata from './views/Energidata'
import EditService from './views/admin/EditService';
import CreateService from './views/admin/CreateService';
import AdminService from './views/admin/AdminService';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* PUBLIC */}

        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='viborghaveservice' element={<HaveService />} />
          <Route path='haveservice' element={<HaveServiceSlider />} />
          <Route path='vejret' element={<Vejret />} />
          <Route path='nyheder' element={<Nyheder />} />
          <Route path='energidata' element={<Energidata />} />

          <Route path='*' element={<NotFound />} />
        </Route>

        {/* ADMIN */}

        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path='adminservice' element={<AdminService />} />
          <Route path='createservice' element={<CreateService />} />
          <Route path='editservice/:id' element={<EditService />} />
          <Route path='*' element={<NotFound />} />
        </Route>

      </>
    )
  )

  return (
    <main className='container'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;