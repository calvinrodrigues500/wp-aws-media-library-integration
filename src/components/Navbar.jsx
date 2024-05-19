import { __ } from '@wordpress/i18n';

const Navbar = () => {

	const navItems = [
		'Dashboard',
		'Uploads',
		'Authentication & Access Settinigs',
		'AWS Configuration'
	];

	return (
		<div className='
		bg-orange-200	
		p-4
	'>
			<ul className='
			flex
			flex-col
			gap-2
			font-bold
			text-sm
			cursor-pointer
			justify-between
		'>
				{navItems.map((item) => {

					return <li
						className='
							text-cyan-600
						'>
						{__(item, 'wp-aws-mli')}
					</li>
				})
				}
			</ul>
		</div>
	)
}

export default Navbar