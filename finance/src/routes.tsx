import { Routes as RouterRoutes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

const Routes = () => {
   return(
       <RouterRoutes>
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/goals" element={<Goals />} />
           <Route path="/transactions" element={<Transactions />} />
           <Route path="/reports" element={<Reports />} />
           <Route path="/profile" element={<Profile />} />
       </RouterRoutes>
   )
}

export default Routes;
