import { useEffect, useState } from 'react';
import A from '../components/A';
import { MainLayout } from '../components/MainLayout';

function Users({users}) {
	// const [users, setUsers] = useState([]);
	// console.log(users);
	// useEffect(() => {
	// 	fetch(`${process.env.TYPI_URL}/users`)
	// 		.then((response) => response.json())
	// 		.then((data) => setUsers(data));
	// }, []);
	return (
		<MainLayout title='Users List Page'>
			<h1>Users List:</h1>
			{users &&
				users.map((user) => (
					<li key={user.id}>
						<A href={`/users/${user.id}`} text={user?.name} />
					</li>
				))}
		</MainLayout>
	);
}

export default Users;

export async function getStaticProps() {
	const response = await fetch(`${process.env.TYPI_URL}/users`);
	const data = await response.json();

	return {
		props: {
			users: data,
		},
	};
}
