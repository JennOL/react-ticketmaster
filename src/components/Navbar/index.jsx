import { useState, forwardRef, useImperativeHandle } from "react";
import styles from './Navbar.module.css';

// eslint-disable-next-line react/prop-types
const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');
    
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.key === "Enter"){
            onSearch(search);
        }
    }

    useImperativeHandle(ref, () => ({
        search,
    }));

    return (
        <div ref={ref} className={styles.navbarContainer}>
            <div className={styles.navbarTitle}>
                Mi Boletera
            </div>
            <div className={styles.navbarSearch}>
                <input 
                    placeholder="Busca tu evento favorito" 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    className={styles.navbarSearchInput}
                    />
            </div>
        </div>
    )
});

Navbar.displayName = 'Navbar';

export default Navbar;