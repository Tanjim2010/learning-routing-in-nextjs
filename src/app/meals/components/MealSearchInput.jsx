"use client"
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    // const [meals, setMeals] = useState([]);

    const router = useRouter();
    const pathName = usePathname()
    useEffect(() => {
        const searchQuery = {search}
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathName}?${urlQueryParam}`;
        router.push(url);
    }, [search])

    return (
        <div>
            <input className='border-b px-6 py-1  outline-none' type="text" placeholder="Search for meals..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
};

export default MealSearchInput;