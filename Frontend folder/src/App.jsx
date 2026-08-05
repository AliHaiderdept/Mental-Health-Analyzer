import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import Info from "./pages/Info";
import Quiz from "./components/Quiz";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import GlobalShader from "./components/ui/global-shader";

const routes = {
    "/": <Home />,
    "/dashboard": <Dashboard />,
    "/info": <Info />,
    "/analysis": <Analysis />,
    "/quiz": <Quiz />,
    "/login": <Login />,
    "/register": <Register />,
};

function App() {
    const currentPage = routes[window.location.pathname] || <Home />;

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <GlobalShader />
            <div style={{ position: 'relative', zIndex: 10 }}>
                <Navbar />
                {currentPage}
            </div>
        </div>
    );
}

export default App;
