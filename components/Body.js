import { useState } from 'react';
import Search from './Searchbar';
import Searchbar from './Searchbar';

function Body() {
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	return (
		<section className='flex-grow py-4 ml-24 space-y-8 bg-black md:max-w-6xl md:mr-2.5'>
			<Searchbar search={search} setSearch={setSearch} />
			<div className='grid grid-cols-2 p-4 py-4 overflow-y-scroll scrollbar-hide h-96 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'></div>
		</section>
	);
}

export default Body;
