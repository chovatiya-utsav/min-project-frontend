import Layout from './componet/commonComponet/layout/Layout';
import './styles/app.css'

function App() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Layout />
      <div className='top_arrow_circle' onClick={scrollToTop} >
        <img src="./images/top-arrow-different.jpg" alt="truck images" width={30} height={30} />
      </div>
    </>
  );
}

export default App;
