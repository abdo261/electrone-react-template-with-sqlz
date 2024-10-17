import { Route } from "react-router-dom";
import List from "./List";
import Layout from "../../layout/Layout";


export const categoryRoutes = (
    <Route path="/categories" element={<Layout/>}>
        <Route index element={<List/>}/>
    </Route>
)