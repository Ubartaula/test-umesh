import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import ListNote from "./features/notes/ListNote";
import AddNote from "./features/notes/AddNote";
import DashHome from "./component/DashHome";

import Layout from "./component/Layout";
import DashLayout from "./component/DashLayout";
import Prefetch from "./features/auth/Prefetch";

import EditNote from "./features/notes/EditNote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route element={<Prefetch />}>
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<DashHome />} />
            <Route path="notes">
              <Route index element={<ListNote />} />
              <Route path="new" element={<AddNote />} />
              <Route path=":id" element={<EditNote />} />
            </Route>
            <Route path="users">
              <Route index element={""} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
