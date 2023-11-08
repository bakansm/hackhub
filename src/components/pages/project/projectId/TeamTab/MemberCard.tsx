import { Card, CardBody, Heading, Image, Text, VStack } from '@chakra-ui/react';
export default function MemberCard() {
	return (
		<Card
			w={'md'}
			direction={'row'}
			variant={'elevated'}
			align={'center'}
			px={'1rem'}
		>
			<Image
				src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
				alt='Member'
				borderRadius='lg'
				w={100}
				h={100}
			/>
			<CardBody>
				<VStack
					mt='3'
					align={'stretch'}
				>
					<Heading
						m={0}
						p={0}
						size='md'
					>
						Bao Khanh - San
					</Heading>
					<Text
						m={0}
						p={0}
					>
						VBI Frotend Senior Internship
					</Text>
					<Text
						m={0}
						p={0}
						color={'blackAlpha.600'}
					>
						khuynhbao5@gmail.com
					</Text>
				</VStack>
			</CardBody>
		</Card>
	);
}
