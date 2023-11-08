import { useSignInRedirect } from '@/hooks/useSignInRedirect';
import { useAuthStore } from '@/stores/auth';
import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Container,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const MainHeader = () => {
	const signedIn = useAuthStore((store) => store.signedIn);
	const accountId = useAuthStore((store) => store.accountId);
	const logOut = useAuthStore((store) => store.logOut);
	const { requestAuthentication } = useSignInRedirect();
	const router = useRouter();

	return (
		<Center
			height={'84px'}
			overflow={'hidden'}
		>
			<Container
				maxW={'1440px'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<Box
					onClick={() => router.push('/')}
					cursor={'pointer'}
				>
					<Image
						src={'/logo-text.svg'}
						alt='logo-text'
						width={500}
						height={100}
					/>
				</Box>

				<Flex gap={'1rem'}>
					<Button
						variant={'link'}
						onClick={() => router.push('/')}
					>
						Home
					</Button>
					<Button
						variant={'link'}
						onClick={() => router.push('/')}
					>
						Blog
					</Button>
					<Button
						variant={'link'}
						onClick={() => router.push('/')}
					>
						Event
					</Button>
					<Button
						variant={'link'}
						onClick={() => router.push('/hackathon')}
					>
						Hackathon
					</Button>
					<Button
						variant={'link'}
						onClick={() => router.push('/sandbox')}
					>
						Sandbox
					</Button>
				</Flex>

				{signedIn ? (
					<Flex gap={'1rem'}>
						<Text
							color='teal'
							fontSize={'lg'}
							fontWeight={'semibold'}
							p={0}
							m={0}
						>
							{accountId}
						</Text>
						<Button
							type='button'
							colorScheme={'blackAlpha'}
							onClick={logOut}
						>
							Log Out
						</Button>
					</Flex>
				) : (
					<ButtonGroup gap={'1'}>
						<Button
							type='button'
							onClick={() => requestAuthentication(true)}
						>
							Create Account
						</Button>
						<Button
							type='button'
							colorScheme='teal'
							onClick={() => requestAuthentication()}
						>
							Sign In
						</Button>
					</ButtonGroup>
				)}
			</Container>
		</Center>
	);
};
