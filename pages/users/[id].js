import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
export default function User({user}) {
	const { query } = useRouter();
	return (
		<MainLayout title='User'>
			<h3>User: {query.id}</h3>
			<h4>Name: {user.username}</h4>
		</MainLayout>
	);
}


export async function getServerSideProps({params}) {
	const response = await fetch(`${process.env.TYPI_URL}/users/${params.id}`);
	const data = await response.json();

	return {
		props: {
			user: data,
		},
	};
}
