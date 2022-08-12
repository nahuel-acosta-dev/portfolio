import React, {useEffect} from 'react';
import Portfolio from './pages/Portfolio';
import AOS from 'aos';

const App = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>   
      <Portfolio />
    </>
)

}

export default App;
