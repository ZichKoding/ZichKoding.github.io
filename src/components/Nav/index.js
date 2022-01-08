import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = `Chris Zichko's ${currentCategory.name}`;
    }, [currentCategory]);

    return (
        <header className='flex-row'>
            <h1><a className='yeller' href='/'>Chris Zichko (ZichKoding)</a></h1>
            <nav>
                <ul className='nav-flexgrid'>
                    {categories.map((category) => (
                        <li 
                        className={`li-design ${currentCategory.name === category.name && 'li-click'}`}
                        key={category.name}
                        onClick={() => {
                            setCurrentCategory(category);
                        }}
                        >
                            <span>
                                {category.name}
                            </span>
                        </li>
                    ))

                    }
                </ul>
            </nav>
        </header>
    )

}

export default Nav;