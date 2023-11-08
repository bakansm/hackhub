import { useDefaultLayout } from '@/hooks/useLayout';
import { Box, Button, ButtonGroup, Center, Heading } from '@chakra-ui/react';

export default function HomePage() {
	return (
		<Center
			width={'full'}
			height={'prose'}
			flexDirection={'column'}
			gap={'2rem'}
		>
			<Box>
				<Heading
					size={'2xl'}
					textAlign={'center'}
				>
					Welcome to <span style={{ color: '#c09e71' }}>Hackhub</span>
				</Heading>
				<Heading
					size={'lg'}
					textAlign={'center'}
				>
					The All-In-One Transparency Hackathon Platform
				</Heading>
			</Box>
			<ButtonGroup>
				<Button
					size={'lg'}
					colorScheme='teal'
				>
					Create a hackthon
				</Button>
				<Button
					size={'lg'}
					colorScheme='teal'
					variant={'outline'}
				>
					Join a hackathon
				</Button>
			</ButtonGroup>
		</Center>
	);
}

HomePage.getLayout = useDefaultLayout;
