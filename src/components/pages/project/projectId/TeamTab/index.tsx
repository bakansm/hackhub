import {
	Box,
	HStack,
	Heading,
	Text,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import MemberCard from './MemberCard';

export default function TeamTab() {
	return (
		<VStack
			spacing={'2rem'}
			align={'stretch'}
		>
			<Box>
				<Heading
					size={'md'}
					color={'blackAlpha.500'}
				>
					Team
				</Heading>
				<Text
					fontSize={'2xl'}
					fontWeight={'bold'}
				>
					OraSci
				</Text>
			</Box>
			<Box>
				<Heading
					size={'md'}
					color={'blackAlpha.500'}
				>
					Member
				</Heading>
				<HStack
					spacing={'1rem'}
					align={'stretch'}
					flexWrap={'wrap'}
				>
					{[...Array(6)].map((_, index) => (
						<MemberCard key={index} />
					))}
				</HStack>
			</Box>
		</VStack>
	);
}
