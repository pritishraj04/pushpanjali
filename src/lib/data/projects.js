import ratnaTowerThumbnail from '$lib/assets/images/projects/ratna-tower/thumbnail.jpeg';
import ratnaTowerThumbnailMobile from '$lib/assets/images/projects/ratna-tower/thumbnail-m.jpeg';
import ratnaTowerWalkthroughImg from '$lib/assets/images/projects/ratna-tower/walkthrough.jpeg';
import ratnaTowerFloorPlan from '$lib/assets/images/projects/ratna-tower/floor-plan.png';

import a1 from '$lib/assets/images/projects/ratna-tower/a1.jpeg';
import a2 from '$lib/assets/images/projects/ratna-tower/a2.jpeg';
import a3 from '$lib/assets/images/projects/ratna-tower/a3.jpeg';
import a4 from '$lib/assets/images/projects/ratna-tower/a4.jpeg';
import a5 from '$lib/assets/images/projects/ratna-tower/a5.jpeg';
import a6 from '$lib/assets/images/projects/ratna-tower/a6.jpeg';
import a7 from '$lib/assets/images/projects/ratna-tower/a7.jpeg';
import a8 from '$lib/assets/images/projects/ratna-tower/a8.jpeg';
import a9 from '$lib/assets/images/projects/ratna-tower/a9.jpeg';
import a10 from '$lib/assets/images/projects/ratna-tower/a10.jpeg';
import a11 from '$lib/assets/images/projects/ratna-tower/a11.jpeg';

export const projects = [
	{
		id: 1,
		slug: 'ratna-tower',
		name: 'PUSHPANJALI Ratna Tower',
		status: 'new', // new, ready, underconstruction, soldOut
		residentialType: 'Residential and Commercial',
		city: 'MUZAFFARPUR',
		location: 'AKHARAGHAT ROAD',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28654.774077417867!2d85.3548319!3d26.136539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1107ffce6363%3A0x17c354aaab1e46b6!2sPushpanjali%20TN%20tower!5e0!3m2!1sen!2sin!4v1743322894158!5m2!1sen!2sin',
			gmap_address: '49X4+FM9, Jaiprakash Nagar, Bairia, Muzaffarpur, Bihar 843108',
			time_to_reach: [
				{
					title: 'Nearest Bus Stand',
					distance: '1.5 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Nearest Railway Station',
					distance: '2 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Nearest Market',
					distance: '1 km',
					time: '10 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood:
			'Located in the prime location of Akharaghat Road, Muzaffarpur, this address offers seamless access to key landmarks and amenities.',
		time_of_possession: 'January 2030',
		images: [ratnaTowerThumbnail, ratnaTowerThumbnailMobile],
		walkthrough: {
			image: ratnaTowerWalkthroughImg,
			video: 'https://www.youtube.com/watch?v=OUQhiLpHYw4'
		},
		plans: [
			{
				name: 'Floor Plan',
				image: ratnaTowerFloorPlan
			}
		],
		amenities: [
			{
				id: 1,
				title: 'Swimming Pool',
				description: '200-litre swimming pool with free access to the pool',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 2,
				title: 'Gymnasium',
				description: '200-seater gymnasium with a fitness center',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 3,
				title: 'Air-conditioning',
				description: 'Central air-conditioning system for comfortable living',
				icon: 'iconamoon:lightning-1-thin'
			}
		],
		description:
			'Located in the heart of Noida, PUSHPANJALI Ratna Tower offers a premium residential and commercial complex with 3.5 and 4-bedroom apartments, perfect for families and bussinesses looking for a luxurious and stylish living experience.',
		gallery: [
			{
				id: 1,
				title: 'Living Room',
				image: a1
			},
			{
				id: 2,
				title: 'Bedroom 1',
				image: a2
			},
			{
				id: 3,
				title: 'Bedroom 2',
				image: a3
			},
			{
				id: 4,
				title: 'Bedroom 3',
				image: a4
			},
			{
				id: 5,
				title: 'Bedroom 4',
				image: a5
			},
			{
				id: 6,
				title: 'Living Room',
				image: a6
			},
			{
				id: 7,
				title: 'Bedroom 1',
				image: a7
			},
			{
				id: 8,
				title: 'Bedroom 2',
				image: a8
			},
			{
				id: 9,
				title: 'Bedroom 3',
				image: a9
			},
			{
				id: 10,
				title: 'Bedroom 4',
				image: a10
			},
			{
				id: 11,
				title: 'Bedroom 4',
				image: a11
			}
		],
		downloads: [
			{
				id: 1,
				title: 'Floor Plan',
				file: 'https://example.com/floor-plan.pdf'
			},
			{
				id: 2,
				title: 'Property Brochure',
				file: 'https://example.com/property-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '2 BHK',
				minimum_price: 73000000,
				maximum_price: 73000000
			},
			{
				id: 2,
				name: '3.5 BHK',
				minimum_price: 72000000,
				maximum_price: 113000000
			},
			{
				id: 3,
				name: '4 BHK',
				minimum_price: 94900000,
				maximum_price: 104900000
			},
			{
				id: 4,
				name: 'Studios',
				minimum_price: 4900000,
				maximum_price: 5900000
			}
		]
	},
	{
		id: 2,
		slug: 'pushpanjali-riverine',
		name: 'Pushpanjali Riverine',
		status: 'new', // new, ready, underconstruction, soldOut
		residentialType: 'Residential',
		city: 'Noida',
		location: 'Sector 44',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16628.972767115796!2d77.32912719590517!3d28.54936000269293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x302ec8d3d5cb8d1a!2sAmity%20University%20Noida!5e1!3m2!1sen!2sin!4v1737881955918!5m2!1sen!2sin',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=28.5591394,77.339106',
			gmap_address: 'H85Q+QH4, Block D, Sector 44, Noida, Uttar Pradesh 201303',
			time_to_reach: [
				{
					title: 'Noida Golf Course Road',
					distance: '1.5 km',
					time: '2 hours 30 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Botanical Garden',
					distance: '0.8 km',
					time: '1 hour 45 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Central Market',
					distance: '1.2 km',
					time: '1 hour 15 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood:
			'Located in the prime location of Pushpanjali Sector 44, Noida, this address offers seamless access to Noida Golf Course Road and the Botanical Garden.',
		time_of_possession: 'January 2030',
		images: [
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png'
		],
		walkthrough: {
			image: 'https://placehold.co/550x550/',
			video: 'https://www.youtube.com/watch?v=OUQhiLpHYw4'
		},
		plans: [
			{
				name: 'Master Plan',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				name: 'Floor Plan',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		amenities: [
			{
				id: 1,
				title: 'Swimming Pool',
				description: '200-litre swimming pool with free access to the pool',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 2,
				title: 'Gymnasium',
				description: '200-seater gymnasium with a fitness center',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 3,
				title: 'Air-conditioning',
				description: 'Central air-conditioning system for comfortable living',
				icon: 'iconamoon:lightning-1-thin'
			}
		],
		description:
			'Located in the heart of Noida, Pushpanjali Riverine offers a premium residential complex with 3.5 and 4-bedroom apartments, perfect for families and couples looking for a luxurious and stylish living experience.',
		gallery: [
			{
				id: 1,
				title: 'Living Room',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				id: 2,
				title: 'Bedroom 1',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		downloads: [
			{
				id: 1,
				title: 'Floor Plan',
				file: 'https://example.com/floor-plan.pdf'
			},
			{
				id: 2,
				title: 'Property Brochure',
				file: 'https://example.com/property-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '2 BHK',
				minimum_price: 73000000,
				maximum_price: 73000000
			},
			{
				id: 2,
				name: '3.5 BHK',
				minimum_price: 72000000,
				maximum_price: 113000000
			},
			{
				id: 3,
				name: '4 BHK',
				minimum_price: 94900000,
				maximum_price: 104900000
			},
			{
				id: 4,
				name: 'Studios',
				minimum_price: 4900000,
				maximum_price: 5900000
			}
		]
	},
	{
		id: 3,
		slug: 'sunset-grove',
		name: 'Sunset Grove',
		status: 'ready',
		residentialType: 'Luxury Villas',
		city: 'Bangalore',
		location: 'Whitefield',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.401956982765!2d77.7282958!3d12.968632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b6ab3ab65f%3A0x1b387ce2f1b91d5b!2sWhitefield%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1737881955918',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=12.968632,77.748345',
			gmap_address: 'Whitefield, Bengaluru, Karnataka 560066',
			time_to_reach: [
				{ title: 'ITPL', distance: '4 km', time: '15 minutes', icon: 'iconamoon:lightning-1-thin' },
				{
					title: 'Forum Value Mall',
					distance: '2 km',
					time: '10 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood: 'Experience tranquil living surrounded by lush greenery in Whitefield.',
		time_of_possession: 'December 2023',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		plans: [
			{ name: 'Master Plan', image: 'https://placehold.co/1146x1146/png' },
			{ name: 'Villa Layout', image: 'https://placehold.co/1146x1146/png' }
		],
		amenities: [
			{
				id: 1,
				title: 'Infinity Pool',
				description: 'A rooftop infinity pool for scenic views.',
				icon: 'iconamoon:pool-1-thin'
			},
			{
				id: 2,
				title: 'Jogging Track',
				description: 'Dedicated jogging and cycling tracks.',
				icon: 'iconamoon:fitness-1-thin'
			}
		],
		description: 'Sunset Grove offers luxury villas in the heart of Bangalore’s tech hub.',
		gallery: [
			{ id: 1, title: 'Main Villa Entrance', image: 'https://placehold.co/1146x1146/png' },
			{ id: 2, title: 'Clubhouse', image: 'https://placehold.co/1146x1146/png' }
		],
		downloads: [
			{ id: 1, title: 'Villa Brochure', file: 'https://example.com/sunset-grove-brochure.pdf' }
		],
		prices: [
			{ id: 1, name: '3 BHK Villas', minimum_price: 150000000, maximum_price: 170000000 },
			{ id: 2, name: '4 BHK Villas', minimum_price: 200000000, maximum_price: 230000000 }
		]
	},
	{
		id: 4,
		slug: 'azure-heights',
		name: 'Azure Heights',
		status: 'underconstruction',
		residentialType: 'Apartments',
		city: 'Mumbai',
		location: 'Andheri West',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116116.18415558094!2d72.80549971254716!3d19.1199191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c88b5e12c8eb%3A0x1b56b1f9e313cdfc!2sAndheri%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1737881955918',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=19.1199191,72.815499',
			gmap_address: 'Andheri West, Mumbai, Maharashtra 400058',
			time_to_reach: [
				{
					title: 'Juhu Beach',
					distance: '5 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Infinity Mall',
					distance: '2 km',
					time: '10 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood: 'Located in Mumbai’s bustling suburb of Andheri, close to all major landmarks.',
		time_of_possession: 'June 2026',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		plans: [
			{ name: 'Site Plan', image: 'https://placehold.co/1146x1146/png' },
			{ name: 'Unit Layout', image: 'https://placehold.co/1146x1146/png' }
		],
		amenities: [
			{
				id: 1,
				title: 'Rooftop Lounge',
				description: 'A rooftop lounge with panoramic views.',
				icon: 'iconamoon:skyline-1-thin'
			},
			{
				id: 2,
				title: 'Yoga Deck',
				description: 'Outdoor yoga and meditation spaces.',
				icon: 'iconamoon:meditation-1-thin'
			}
		],
		description: 'Azure Heights redefines urban living in Mumbai with premium apartments.',
		gallery: [{ id: 1, title: 'Model Apartment', image: 'https://placehold.co/1146x1146/png' }],
		downloads: [
			{
				id: 1,
				title: 'Azure Heights Brochure',
				file: 'https://example.com/azure-heights-brochure.pdf'
			}
		],
		prices: [
			{ id: 1, name: '2 BHK', minimum_price: 95000000, maximum_price: 115000000 },
			{ id: 2, name: '3 BHK', minimum_price: 130000000, maximum_price: 150000000 }
		]
	},
	{
		id: 5,
		slug: 'pushpanjali-riverine',
		name: 'Pushpanjali Riverine',
		status: 'new', // new, ready, underconstruction, soldOut
		residentialType: 'Residential',
		city: 'Noida',
		location: 'Sector 44',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16628.972767115796!2d77.32912719590517!3d28.54936000269293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x302ec8d3d5cb8d1a!2sAmity%20University%20Noida!5e1!3m2!1sen!2sin!4v1737881955918!5m2!1sen!2sin',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=28.5591394,77.339106',
			gmap_address: 'H85Q+QH4, Block D, Sector 44, Noida, Uttar Pradesh 201303',
			time_to_reach: [
				{
					title: 'Noida Golf Course Road',
					distance: '1.5 km',
					time: '2 hours 30 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Botanical Garden',
					distance: '0.8 km',
					time: '1 hour 45 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Central Market',
					distance: '1.2 km',
					time: '1 hour 15 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood:
			'Located in the prime location of Pushpanjali Sector 44, Noida, this address offers seamless access to Noida Golf Course Road and the Botanical Garden.',
		time_of_possession: 'January 2030',
		images: [
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png'
		],
		walkthrough: {
			image: 'https://placehold.co/550x550/',
			video: 'https://www.youtube.com/watch?v=OUQhiLpHYw4'
		},
		plans: [
			{
				name: 'Master Plan',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				name: 'Floor Plan',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		amenities: [
			{
				id: 1,
				title: 'Swimming Pool',
				description: '200-litre swimming pool with free access to the pool',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 2,
				title: 'Gymnasium',
				description: '200-seater gymnasium with a fitness center',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 3,
				title: 'Air-conditioning',
				description: 'Central air-conditioning system for comfortable living',
				icon: 'iconamoon:lightning-1-thin'
			}
		],
		description:
			'Located in the heart of Noida, Pushpanjali Riverine offers a premium residential complex with 3.5 and 4-bedroom apartments, perfect for families and couples looking for a luxurious and stylish living experience.',
		gallery: [
			{
				id: 1,
				title: 'Living Room',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				id: 2,
				title: 'Bedroom 1',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		downloads: [
			{
				id: 1,
				title: 'Floor Plan',
				file: 'https://example.com/floor-plan.pdf'
			},
			{
				id: 2,
				title: 'Property Brochure',
				file: 'https://example.com/property-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '2 BHK',
				minimum_price: 73000000,
				maximum_price: 73000000
			},
			{
				id: 2,
				name: '3.5 BHK',
				minimum_price: 72000000,
				maximum_price: 113000000
			},
			{
				id: 3,
				name: '4 BHK',
				minimum_price: 94900000,
				maximum_price: 104900000
			},
			{
				id: 4,
				name: 'Studios',
				minimum_price: 4900000,
				maximum_price: 5900000
			}
		]
	},
	{
		id: 6,
		slug: 'green-haven',
		name: 'Green Haven',
		status: 'underconstruction',
		residentialType: 'Luxury',
		city: 'Gurgaon',
		location: 'Sector 55',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16628.972767115796!2d77.32912719590517!3d28.54936000269293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x302ec8d3d5cb8d1a!2sAmity%20University%20Noida!5e1!3m2!1sen!2sin!4v1737881955918!5m2!1sen!2sin',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=28.5591394,77.339106',
			gmap_address: 'Sector 55, Gurgaon, Haryana',
			time_to_reach: [
				{
					title: 'Cyber City',
					distance: '10 km',
					time: '30 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'MG Road Metro Station',
					distance: '8 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood:
			'Green Haven offers a tranquil lifestyle amidst lush greenery in Gurgaon, Sector 55.',
		time_of_possession: 'December 2026',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=OUQhiLpHYw4'
		},
		plans: [
			{
				name: 'Master Plan',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				name: 'Floor Plan',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		amenities: [
			{
				id: 1,
				title: 'Clubhouse',
				description: 'A state-of-the-art clubhouse with modern facilities',
				icon: 'iconamoon:clubhouse-1-thin'
			},
			{
				id: 2,
				title: 'Children’s Play Area',
				description: 'Play area designed for kids of all ages',
				icon: 'iconamoon:kids-1-thin'
			}
		],
		description: 'Green Haven combines luxury and serenity to offer a premium residential complex.',
		gallery: [
			{
				id: 1,
				title: 'Main Entrance',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		downloads: [
			{
				id: 1,
				title: 'Brochure',
				file: 'https://example.com/green-haven-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '3 BHK',
				minimum_price: 85000000,
				maximum_price: 90000000
			}
		]
	},
	{
		id: 7,
		slug: 'sunset-grove',
		name: 'Sunset Grove',
		status: 'ready',
		residentialType: 'Luxury Villas',
		city: 'Bangalore',
		location: 'Whitefield',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.401956982765!2d77.7282958!3d12.968632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b6ab3ab65f%3A0x1b387ce2f1b91d5b!2sWhitefield%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1737881955918',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=12.968632,77.748345',
			gmap_address: 'Whitefield, Bengaluru, Karnataka 560066',
			time_to_reach: [
				{ title: 'ITPL', distance: '4 km', time: '15 minutes', icon: 'iconamoon:lightning-1-thin' },
				{
					title: 'Forum Value Mall',
					distance: '2 km',
					time: '10 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood: 'Experience tranquil living surrounded by lush greenery in Whitefield.',
		time_of_possession: 'December 2023',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		plans: [
			{ name: 'Master Plan', image: 'https://placehold.co/1146x1146/png' },
			{ name: 'Villa Layout', image: 'https://placehold.co/1146x1146/png' }
		],
		amenities: [
			{
				id: 1,
				title: 'Infinity Pool',
				description: 'A rooftop infinity pool for scenic views.',
				icon: 'iconamoon:pool-1-thin'
			},
			{
				id: 2,
				title: 'Jogging Track',
				description: 'Dedicated jogging and cycling tracks.',
				icon: 'iconamoon:fitness-1-thin'
			}
		],
		description: 'Sunset Grove offers luxury villas in the heart of Bangalore’s tech hub.',
		gallery: [
			{ id: 1, title: 'Main Villa Entrance', image: 'https://placehold.co/1146x1146/png' },
			{ id: 2, title: 'Clubhouse', image: 'https://placehold.co/1146x1146/png' }
		],
		downloads: [
			{ id: 1, title: 'Villa Brochure', file: 'https://example.com/sunset-grove-brochure.pdf' }
		],
		prices: [
			{ id: 1, name: '3 BHK Villas', minimum_price: 150000000, maximum_price: 170000000 },
			{ id: 2, name: '4 BHK Villas', minimum_price: 200000000, maximum_price: 230000000 }
		]
	},
	{
		id: 8,
		slug: 'azure-heights',
		name: 'Azure Heights',
		status: 'underconstruction',
		residentialType: 'Apartments',
		city: 'Mumbai',
		location: 'Andheri West',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116116.18415558094!2d72.80549971254716!3d19.1199191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c88b5e12c8eb%3A0x1b56b1f9e313cdfc!2sAndheri%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1737881955918',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=19.1199191,72.815499',
			gmap_address: 'Andheri West, Mumbai, Maharashtra 400058',
			time_to_reach: [
				{
					title: 'Juhu Beach',
					distance: '5 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Infinity Mall',
					distance: '2 km',
					time: '10 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood: 'Located in Mumbai’s bustling suburb of Andheri, close to all major landmarks.',
		time_of_possession: 'June 2026',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		plans: [
			{ name: 'Site Plan', image: 'https://placehold.co/1146x1146/png' },
			{ name: 'Unit Layout', image: 'https://placehold.co/1146x1146/png' }
		],
		amenities: [
			{
				id: 1,
				title: 'Rooftop Lounge',
				description: 'A rooftop lounge with panoramic views.',
				icon: 'iconamoon:skyline-1-thin'
			},
			{
				id: 2,
				title: 'Yoga Deck',
				description: 'Outdoor yoga and meditation spaces.',
				icon: 'iconamoon:meditation-1-thin'
			}
		],
		description: 'Azure Heights redefines urban living in Mumbai with premium apartments.',
		gallery: [{ id: 1, title: 'Model Apartment', image: 'https://placehold.co/1146x1146/png' }],
		downloads: [
			{
				id: 1,
				title: 'Azure Heights Brochure',
				file: 'https://example.com/azure-heights-brochure.pdf'
			}
		],
		prices: [
			{ id: 1, name: '2 BHK', minimum_price: 95000000, maximum_price: 115000000 },
			{ id: 2, name: '3 BHK', minimum_price: 130000000, maximum_price: 150000000 }
		]
	},
	{
		id: 9,
		slug: 'pushpanjali-riverine',
		name: 'Pushpanjali Riverine',
		status: 'new', // new, ready, underconstruction, soldOut
		residentialType: 'Residential',
		city: 'Noida',
		location: 'Sector 44',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16628.972767115796!2d77.32912719590517!3d28.54936000269293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x302ec8d3d5cb8d1a!2sAmity%20University%20Noida!5e1!3m2!1sen!2sin!4v1737881955918!5m2!1sen!2sin',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=28.5591394,77.339106',
			gmap_address: 'H85Q+QH4, Block D, Sector 44, Noida, Uttar Pradesh 201303',
			time_to_reach: [
				{
					title: 'Noida Golf Course Road',
					distance: '1.5 km',
					time: '2 hours 30 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Botanical Garden',
					distance: '0.8 km',
					time: '1 hour 45 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Central Market',
					distance: '1.2 km',
					time: '1 hour 15 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood:
			'Located in the prime location of Pushpanjali Sector 44, Noida, this address offers seamless access to Noida Golf Course Road and the Botanical Garden.',
		time_of_possession: 'January 2030',
		images: [
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png'
		],
		walkthrough: {
			image: 'https://placehold.co/550x550/',
			video: 'https://www.youtube.com/watch?v=OUQhiLpHYw4'
		},
		plans: [
			{
				name: 'Master Plan',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				name: 'Floor Plan',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		amenities: [
			{
				id: 1,
				title: 'Swimming Pool',
				description: '200-litre swimming pool with free access to the pool',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 2,
				title: 'Gymnasium',
				description: '200-seater gymnasium with a fitness center',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 3,
				title: 'Air-conditioning',
				description: 'Central air-conditioning system for comfortable living',
				icon: 'iconamoon:lightning-1-thin'
			}
		],
		description:
			'Located in the heart of Noida, Pushpanjali Riverine offers a premium residential complex with 3.5 and 4-bedroom apartments, perfect for families and couples looking for a luxurious and stylish living experience.',
		gallery: [
			{
				id: 1,
				title: 'Living Room',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				id: 2,
				title: 'Bedroom 1',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		downloads: [
			{
				id: 1,
				title: 'Floor Plan',
				file: 'https://example.com/floor-plan.pdf'
			},
			{
				id: 2,
				title: 'Property Brochure',
				file: 'https://example.com/property-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '2 BHK',
				minimum_price: 73000000,
				maximum_price: 73000000
			},
			{
				id: 2,
				name: '3.5 BHK',
				minimum_price: 72000000,
				maximum_price: 113000000
			},
			{
				id: 3,
				name: '4 BHK',
				minimum_price: 94900000,
				maximum_price: 104900000
			},
			{
				id: 4,
				name: 'Studios',
				minimum_price: 4900000,
				maximum_price: 5900000
			}
		]
	},
	{
		id: 10,
		slug: 'green-haven',
		name: 'Green Haven',
		status: 'underconstruction',
		residentialType: 'Luxury',
		city: 'Gurgaon',
		location: 'Sector 55',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16628.972767115796!2d77.32912719590517!3d28.54936000269293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x302ec8d3d5cb8d1a!2sAmity%20University%20Noida!5e1!3m2!1sen!2sin!4v1737881955918!5m2!1sen!2sin',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=28.5591394,77.339106',
			gmap_address: 'Sector 55, Gurgaon, Haryana',
			time_to_reach: [
				{
					title: 'Cyber City',
					distance: '10 km',
					time: '30 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'MG Road Metro Station',
					distance: '8 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood:
			'Green Haven offers a tranquil lifestyle amidst lush greenery in Gurgaon, Sector 55.',
		time_of_possession: 'December 2026',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=OUQhiLpHYw4'
		},
		plans: [
			{
				name: 'Master Plan',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				name: 'Floor Plan',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		amenities: [
			{
				id: 1,
				title: 'Clubhouse',
				description: 'A state-of-the-art clubhouse with modern facilities',
				icon: 'iconamoon:clubhouse-1-thin'
			},
			{
				id: 2,
				title: 'Children’s Play Area',
				description: 'Play area designed for kids of all ages',
				icon: 'iconamoon:kids-1-thin'
			}
		],
		description: 'Green Haven combines luxury and serenity to offer a premium residential complex.',
		gallery: [
			{
				id: 1,
				title: 'Main Entrance',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		downloads: [
			{
				id: 1,
				title: 'Brochure',
				file: 'https://example.com/green-haven-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '3 BHK',
				minimum_price: 85000000,
				maximum_price: 90000000
			}
		]
	},
	{
		id: 11,
		slug: 'sunset-grove',
		name: 'Sunset Grove',
		status: 'ready',
		residentialType: 'Luxury Villas',
		city: 'Bangalore',
		location: 'Whitefield',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.401956982765!2d77.7282958!3d12.968632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b6ab3ab65f%3A0x1b387ce2f1b91d5b!2sWhitefield%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1737881955918',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=12.968632,77.748345',
			gmap_address: 'Whitefield, Bengaluru, Karnataka 560066',
			time_to_reach: [
				{ title: 'ITPL', distance: '4 km', time: '15 minutes', icon: 'iconamoon:lightning-1-thin' },
				{
					title: 'Forum Value Mall',
					distance: '2 km',
					time: '10 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood: 'Experience tranquil living surrounded by lush greenery in Whitefield.',
		time_of_possession: 'December 2023',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		plans: [
			{ name: 'Master Plan', image: 'https://placehold.co/1146x1146/png' },
			{ name: 'Villa Layout', image: 'https://placehold.co/1146x1146/png' }
		],
		amenities: [
			{
				id: 1,
				title: 'Infinity Pool',
				description: 'A rooftop infinity pool for scenic views.',
				icon: 'iconamoon:pool-1-thin'
			},
			{
				id: 2,
				title: 'Jogging Track',
				description: 'Dedicated jogging and cycling tracks.',
				icon: 'iconamoon:fitness-1-thin'
			}
		],
		description: 'Sunset Grove offers luxury villas in the heart of Bangalore’s tech hub.',
		gallery: [
			{ id: 1, title: 'Main Villa Entrance', image: 'https://placehold.co/1146x1146/png' },
			{ id: 2, title: 'Clubhouse', image: 'https://placehold.co/1146x1146/png' }
		],
		downloads: [
			{ id: 1, title: 'Villa Brochure', file: 'https://example.com/sunset-grove-brochure.pdf' }
		],
		prices: [
			{ id: 1, name: '3 BHK Villas', minimum_price: 150000000, maximum_price: 170000000 },
			{ id: 2, name: '4 BHK Villas', minimum_price: 200000000, maximum_price: 230000000 }
		]
	},
	{
		id: 12,
		slug: 'azure-heights',
		name: 'Azure Heights',
		status: 'underconstruction',
		residentialType: 'Apartments',
		city: 'Mumbai',
		location: 'Andheri West',
		map_data: {
			gmap_embed:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116116.18415558094!2d72.80549971254716!3d19.1199191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c88b5e12c8eb%3A0x1b56b1f9e313cdfc!2sAndheri%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1737881955918',
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=19.1199191,72.815499',
			gmap_address: 'Andheri West, Mumbai, Maharashtra 400058',
			time_to_reach: [
				{
					title: 'Juhu Beach',
					distance: '5 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Infinity Mall',
					distance: '2 km',
					time: '10 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		neighbourhood: 'Located in Mumbai’s bustling suburb of Andheri, close to all major landmarks.',
		time_of_possession: 'June 2026',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		walkthrough: {
			image: 'https://placehold.co/550x550/png',
			video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		plans: [
			{ name: 'Site Plan', image: 'https://placehold.co/1146x1146/png' },
			{ name: 'Unit Layout', image: 'https://placehold.co/1146x1146/png' }
		],
		amenities: [
			{
				id: 1,
				title: 'Rooftop Lounge',
				description: 'A rooftop lounge with panoramic views.',
				icon: 'iconamoon:skyline-1-thin'
			},
			{
				id: 2,
				title: 'Yoga Deck',
				description: 'Outdoor yoga and meditation spaces.',
				icon: 'iconamoon:meditation-1-thin'
			}
		],
		description: 'Azure Heights redefines urban living in Mumbai with premium apartments.',
		gallery: [{ id: 1, title: 'Model Apartment', image: 'https://placehold.co/1146x1146/png' }],
		downloads: [
			{
				id: 1,
				title: 'Azure Heights Brochure',
				file: 'https://example.com/azure-heights-brochure.pdf'
			}
		],
		prices: [
			{ id: 1, name: '2 BHK', minimum_price: 95000000, maximum_price: 115000000 },
			{ id: 2, name: '3 BHK', minimum_price: 130000000, maximum_price: 150000000 }
		]
	}
];
