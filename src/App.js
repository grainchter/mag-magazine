import s from './App.module.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
