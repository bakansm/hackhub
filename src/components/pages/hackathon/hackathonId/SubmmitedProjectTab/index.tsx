import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SubmmitedProjectTab() {
	const router = useRouter();
	const { hackathonId } = router.query;
	const [projectList, setProjectList] = useState<any[]>();

	useEffect(() => {
		if (hackathonId) {
			const fetchData = async () => {
				let config = {
					method: 'get',
					maxBodyLength: Infinity,
					url: `${process.env.API_URL}/api/hackathon/get-all-projects?id=${hackathonId}`,
					headers: {},
				};

				await axios
					.request(config)
					.then((response) => {
						setProjectList(response.data.message);
					})
					.catch((error) => {
						console.log(error);
					});
			};

			fetchData();
		}
	}, [hackathonId]);

	return (
		<VStack
			spacing={'1rem'}
			align={'stretch'}
		>
			{projectList?.map((project, key) => (
				<Card
					key={key}
					direction={'row'}
				>
					<CardHeader>
						<Image
							src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
							alt='Judge'
							borderRadius='lg'
							w={100}
							h={100}
						/>
					</CardHeader>
					<CardBody>
						<Heading size={'lg'}>{project.project_name}</Heading>
						<Text fontSize={'xl'}>{project.short_description}</Text>
					</CardBody>
					<CardFooter>
						<Button
							onClick={() =>
								router.push(`/project/${project.project_id}`)
							}
						>
							View detail
						</Button>
					</CardFooter>
				</Card>
			))}
		</VStack>
	);
}
