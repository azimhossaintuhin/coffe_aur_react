import { createBrowserRouter, createRoutesFromElements , Route } from "react-router-dom";
import App from "../App";
import CompletedTodo from "../components/completed_todo";
import Dashboard from "../components/Dashboard/Dashboard";
export const Routes =
    createBrowserRouter(
        createRoutesFromElements(
            <>
            <Route path="/" element={<App/>} />
            <Route path="/completed" element={<CompletedTodo/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            </>
        )
    )
