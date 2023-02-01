import React, {useContext, useEffect} from 'react';
import Layout from "./components/Layout/Layout";
import AllRoutes from "./components/navigation/routes/Routes";
import {Context} from "./components/store/Context";

function App() {
    const auth = useContext(Context)
  return (
    <div className="App">
        <Layout />
        <AllRoutes />
    </div>
  );
}

export default App;
