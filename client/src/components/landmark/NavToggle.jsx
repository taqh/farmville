const NavToggle = ({ onClick, onToggle }) => {
	return (
		<button
			className='toggle'
			onClick={onClick}
			aria-haspopup='true'
			aria-expanded={onToggle}
			aria-controls='primary-navigation'
		>
			<span className='sr-only'>Open menu</span>
			<span className='line top' data-active={onToggle} aria-hidden='true'></span>
			{/* <span className='line mid' data-active={onToggle}></span> */}
			<span className='line bottom' data-active={onToggle} aria-hidden='true'></span>
		</button>
	);
};

export default NavToggle;