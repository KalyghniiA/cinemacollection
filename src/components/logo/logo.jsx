import {logo} from  "./logo.module.css";

const Logo = () => {
	return (
		<button className={logo} onClick={() => {}}>
			<img src="/public/bookmark.svg" alt="logo" />
		</button>
	);
};

export default Logo;