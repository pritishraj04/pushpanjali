export const formatPrice = (price) => {
	if (price >= 10000000) {
		// Convert to crore
		const crore = (price / 10000000).toFixed(1);
		return `${removeTrailingZero(crore)} crore`;
	} else if (price >= 100000) {
		// Convert to lakh
		const lakh = (price / 100000).toFixed(1);
		return `${removeTrailingZero(lakh)} lakh`;
	} else if (price >= 1000) {
		// Convert to lakh
		const thousand = (price / 1000).toFixed(1);
		return `${removeTrailingZero(thousand)} thousand`;
	}
	return `${price}`; // If it's less than a lakh, return as is
};
const removeTrailingZero = (value) => {
	return value.endsWith('.0') ? value.slice(0, -2) : value;
};

export const getPrice = (projects) => {
	if (projects.prices?.length === 0) return 'Price available on request';
	const prices = projects.prices?.map((price) => price.minimum_price);
	const minPrice = Math.min(...prices);

	return `INR ${formatPrice(minPrice)} onwards`;
};

export const getStatus = (project) => {
	const status = project.status;
	if (status.includes('soldOut')) {
		return { name: 'Sold Out', icon: 'bi:building-dash', color: 'red' };
	} else if (status.includes('ready')) {
		return { name: 'Possession Ready', icon: 'flowbite:building-outline', color: 'green' };
	} else if (status.includes('underconstruction')) {
		return { name: 'Under Construction', icon: 'carbon:construction', color: 'orange' };
	} else {
		return {
			name: 'New Launch',
			icon: 'material-symbols-light:fiber-new-outline',
			color: 'blue'
		};
	}
};

export const getHeaderImage = (project, device = 'desktop') => {
	const images = project.images;
	return images?.length > 0
		? device == 'desktop'
			? images[0]
			: images[1]
		: 'https://placehold.co/1200x700/png';
};

// Utility function to add scroll-based animations with different effects
export function addScrollAnimations() {
	const elements = document.querySelectorAll('[data-animate]');

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const animationType = entry.target.getAttribute('data-animate');
					entry.target.classList.add('visible', animationType);
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.1 } // Trigger when 10% of the element is visible
	);

	elements.forEach((element) => {
		observer.observe(element);
	});
}
