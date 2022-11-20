import Head from 'next/head';
import A from '../components/A';
import layoutStyles from '../styles/layout.module.scss';
export function MainLayout({ children, title = 'Next App', keywords }) {
	return (
		<>
			<Head>
				<title>{title} | Next Training</title>
				<meta charSet="utf-8" />
				<meta name="keywords" content={`next,js,React,nextjs` + keywords} />
				<meta name="description" content="This is Next training App" />
			</Head>
			<nav className={layoutStyles.navbar}>
				<A className={layoutStyles.link} href={'/'} text={'Link to MainPage'} />
				<A
					className={layoutStyles.link}
					href={'/users'}
					text={'Link to UsersListPage'}
				/>
			</nav>
			<main className={layoutStyles.main}>{children}</main>
		</>
	);
}
