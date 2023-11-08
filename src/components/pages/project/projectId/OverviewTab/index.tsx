import {
	Badge,
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	ListItem,
	Text,
	Textarea,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';
import { Key } from 'react';

const technologiesList = ['bos', 'rust', 'near protocol', 'smart contract'];

export default function OverviewTab({ data }: { data: any }) {
	return (
		<VStack
			spacing={'2rem'}
			align={'stretch'}
		>
			<Box>
				<Heading size={'lg'}>Summary</Heading>
				<Box>
					<Text
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						{data?.solution}
					</Text>
				</Box>
			</Box>
			<Box>
				<Heading size={'lg'}>Challenges</Heading>
				<Text
					fontSize={'lg'}
					color={'blackAlpha.700'}
					textAlign={'justify'}
				>
					{data?.challenges}
				</Text>
			</Box>
			<Box>
				<Heading size={'lg'}>Technologies Used</Heading>
				<HStack spacing={'1rem'}>
					{data?.technologies.map((technology: string, key: Key) => (
						<Badge
							key={key}
							py={'.5rem'}
							px={'1rem'}
						>
							{technology}
						</Badge>
					))}
				</HStack>
			</Box>
			<Box>
				<Heading size={'lg'}>Project Link</Heading>
				<UnorderedList>
					<ListItem
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						<Button variant={'link'}>{data?.video_link}</Button>
					</ListItem>
					<ListItem
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						<Button variant={'link'}>{data?.external_link}</Button>
					</ListItem>
				</UnorderedList>
			</Box>
			<Divider borderColor={'teal'} />
			<VStack
				spacing={'.5rem'}
				align={'stretch'}
			>
				<Heading size={'md'}>Comment</Heading>
				<Textarea
					h={'5rem'}
					resize={'none'}
				/>
				<Flex
					gap={'.5rem'}
					justify={'flex-end'}
				>
					<Button
						variant={'ghost'}
						colorScheme='teal'
					>
						Cancel
					</Button>
					<Button colorScheme='teal'>Send</Button>
				</Flex>
			</VStack>
		</VStack>
	);
}
