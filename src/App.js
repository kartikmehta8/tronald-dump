import axios from 'axios';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import trump from './Trump.json';

function App() {
	const [quote, setQuote] = useState('');

	useEffect(() => {
		const options = {
			method: 'GET',

			url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
			headers: {
				accept: 'application/hal+json',
				'x-rapidapi-key': '357c923461msh805b4ad667aafefp15b7b5jsneeea83e2cd9c',
				'x-rapidapi-host': 'matchilling-tronald-dump-v1.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then((response) => {
				setQuote(response.data.value);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div>
			<div className='flex font-bold justify-center font p-3 bg-gray-700 text-white'>
				Tronald Dump
			</div>
			<div className='p-5 grid lg:grid-cols-2 grid-cols-1 pb-0'>
				<div className='grid justify-center items-center lg:mx-10 md:mx-5 font lg:text-4xl md:text-3xl text-gray-800 lg:pt-0 md:pt-16 pt-16 md:mb-24 lg:mb-0 sm:mb-24 lg:mt-0 md:mt-10'>
					{quote}
				</div>
				<div className='grid p-20 lg:pt-0 md:pt-0 sm:pt-24 pb-0 justify-center items-center'>
					<Lottie
						animationData={trump}
						className='lg:h-auto md:h-auto lg:w-auto md:w-auto h-96 w-96 hovering'
						onClick={refreshPage}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
