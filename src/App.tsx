import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/mainRoute";

function App() {
	return (
		<div>
			<RouterProvider router={MainRouter} />
		</div>
	);
}

export default App;
