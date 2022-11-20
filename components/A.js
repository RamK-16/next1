import Link from "next/link";
import linkStyle from '../styles/link.module.css'
function A({ text, href, className }) {
	return (
		<Link className={`${className} ${linkStyle.link}`} href={href}>
			{text}
		</Link>
	);
}

export default A;
