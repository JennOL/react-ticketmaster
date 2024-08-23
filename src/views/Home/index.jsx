import { useRef, useState } from 'react';

import Events from '../../components/Events'
import Navbar from '../../components/Navbar'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef();

    const handleNavbarSeach = (term) => {
        console.log(containerRef.current)
        setSearchTerm(term);
    };
  
    return (
        <>
            <Navbar onSearch={handleNavbarSeach} ref={containerRef} />
            <Events searchTerm={searchTerm} />
        </>
    )
};

export default Home;