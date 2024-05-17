import {__} from '@wordpress/i18n';

const Navbar = () => {
  return (
	<div>
		<ul className='
			flex
			gap-2
			font-bold
			text-sm
			cursor-pointer
		'>
			<li>{__('Dashboard', 'wp-aws-mli')}</li>
			<li>{__('Uploads', 'wp-aws-mli')}</li>
			<li>{__('Authentication & Access Settinigs', 'wp-aws-mli')}</li>
			<li>{__('AWS Configuration')}</li>
		</ul>
	</div>
  )
}

export default Navbar