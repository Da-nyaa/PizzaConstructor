import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Routes, Route,   } from 'react-router-dom';
import Constructor from './components/constructor/Constructor';
import Header from './components/Header/Header';
import Basket from './components/bascket/Bascket';

function App() {
    return (
            <div className="App">
                <Header/>   
                <Container fluid="xxl" className={'AppStyle'}>
                    <Routes window={window.scrollTo(0, 0)}>
                        <Route path="/" element={<Constructor />}></Route>
                        <Route path="/backet" element={<Basket />}></Route>
                    </Routes>
                </Container>
            </div>
    );
}

export default App;
