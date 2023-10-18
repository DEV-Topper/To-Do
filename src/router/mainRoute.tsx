import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../Component/Layout";
import AddTask from "../pages/AddTask";
export const MainRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				index: true,
				path: "add-task",
				element: <AddTask />,
			},
		],
	},
]);
