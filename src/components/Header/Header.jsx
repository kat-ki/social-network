import React from 'react';
import styleCl from './Header.module.css';

const Header =() => {
    return (
        <header className={styleCl.header}>
            <img src="https://1.bp.blogspot.com/-qpBd0FUz7Gs/VSgVBhWlsJI/AAAAAAAAIrw/0qPzLBhEYMs/s1600/abstract-collection-image.jpg"
                 alt="logo"/>
        </header>
    )
}
export default Header;