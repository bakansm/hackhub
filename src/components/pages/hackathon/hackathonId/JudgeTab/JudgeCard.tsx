import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	IconButton,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

export default function JudgeCard({ judge }: { judge: any }) {
	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					alt='Judge'
					borderRadius='lg'
				/>
				<Stack mt='3'>
					<Heading size='md'>{judge.name}</Heading>
					<Text>{judge.role}</Text>
				</Stack>
			</CardBody>
			<CardFooter>
				<ButtonGroup spacing='2'>
					<IconButton
						variant='outline'
						colorScheme='teal'
						aria-label='Call Segun'
						icon={<PhoneIcon />}
					/>
					<IconButton
						variant='outline'
						colorScheme='teal'
						aria-label='Send email'
						icon={<EmailIcon />}
					/>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
}
