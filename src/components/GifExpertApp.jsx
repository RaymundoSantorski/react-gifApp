import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Dragon Ball', 'DeathNote'];
    const [categories, setCategories] = useState(['DeathNote']);

    // const handleAdd = () => {
    //     setCategories(['Naruto',...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map((category, idx) => 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>
        </>
    )
};

export default GifExpertApp;