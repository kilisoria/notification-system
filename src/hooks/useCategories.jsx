import { useEffect, useState } from 'react';

import { getCategories } from '../actions/categories';

const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const categoriesData = await getCategories();
            setCategories(categoriesData);
        }

        loadCategories();
    }, [setCategories]);


    return {
        categories,
    }
};

export default useCategories;
