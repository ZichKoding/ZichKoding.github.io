import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header className='flex-row'>
            <h2><a href='/'>Chris Zichko (ZichKoding)</a></h2>
            <nav>
                <ul className='nav-flexgrid'>
                    {categories.map((category) => (
                        <li 
                        className='li-design'
                        key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}
                            >
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