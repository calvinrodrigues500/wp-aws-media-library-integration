const Button = ({ onClick }) => {
	return (
		<div
			className='
			bg-blue-500
			hover:bg-blue-700
			text-white
			font-bold
			py-2
			px-4
			rounded
			max-w-16
			cursor-pointer
		'
		onClick={onClick}
		>
			Save
		</div>
	)
}

export default Button