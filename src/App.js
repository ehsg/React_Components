import Route from "./components/Route";
import DropDownPage from "./pages/DropDownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import Sidebar from "./components/Sidebar";


function App() {
    return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar />
    <div className="col=span-5">
        <Route path="/accordion">
            <AccordionPage />
        </Route>
        <Route path="/">
            <DropDownPage />
        </Route>
        <Route path="/buttons">
            <ButtonPage />
        </Route>
        <Route path="/modal">
            <ModalPage />
        </Route>
    </div>
    </div>
)};

export default App;