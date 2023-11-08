import { useDefaultLayout } from '@/hooks/useLayout';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Container,
	Flex,
	Heading,
	Text,
	Wrap,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Hackathon() {
	const router = useRouter();
	const [hackathonList, setHackthonList] = useState<any[]>([]);

	useEffect(() => {
		const nearWallet = JSON.parse(
			localStorage.getItem('near_app_wallet_auth_key') as string,
		);

		const fetchData = async () => {
			let config = {
				method: 'get',
				maxBodyLength: Infinity,
				url: `${process.env.API_URL}/api/hackathon/get-hack-creator?creator=${nearWallet.accountId}`,
				headers: {},
			};

			await axios
				.request(config)
				.then((response) => {
					console.log(response.data.message)
					setHackthonList(response.data.message);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchData();
	}, []);

	return (
		<Container maxW={'1440px'}>
			<Flex justify={'flex-end'}>
				<Button
					onClick={() => router.push('create-hackathon')}
					variant={'solid'}
					colorScheme='teal'
				>
					Create hackathon
				</Button>
			</Flex>
			<Box>
				<Heading></Heading>
				<Wrap spacing={'2rem'}>
					{hackathonList?.map((hackathon, key) => (
						<Card
							key={key}
							minW={'21rem'}
						>
							<CardHeader>
								<Heading
									m={0}
									p={0}
									size={'lg'}
								>
									Name
								</Heading>
								<Text color={'blackAlpha.600'}>
									Short description
								</Text>
							</CardHeader>
							<CardBody
								mb={0}
								pb={0}
							>
								<Heading
									m={0}
									p={0}
									size={'sm'}
								>
									From
								</Heading>
								<Text color={'blackAlpha.600'}>
									{hackathon.registration_start}
								</Text>
								<Heading
									m={0}
									p={0}
									size={'sm'}
								>
									To
								</Heading>
								<Text color={'blackAlpha.600'}>
									{hackathon.result_announce}
								</Text>
								<Heading
									m={0}
									p={0}
									size={'sm'}
								>
									Place
								</Heading>
								<Text color={'blackAlpha.600'}>
									Lisbon, Portugal
								</Text>
							</CardBody>
							<CardFooter
								justify={'center'}
								mt={0}
								pt={0}
							>
								<Button
									variant={'ghost'}
									colorScheme={'teal'}
									onClick={() =>
										router.push(
											`/hackathon/${hackathon._id}`,
										)
									}
								>
									See detail
								</Button>
							</CardFooter>
						</Card>
					))}
				</Wrap>
			</Box>
		</Container>
	);
}

Hackathon.getLayout = useDefaultLayout;
