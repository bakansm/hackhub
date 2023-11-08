import {
	Box,
	Center,
	Heading,
	StackDivider,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import DescriptionSection from './DescriptionSection';
import { Key } from 'react';

export default function OverviewTab({ data }: { data: any }) {
	return (
		<VStack
			divider={<StackDivider borderColor='gray.200' />}
			spacing={4}
			align='stretch'
		>
			<Box>
				<Heading
					textTransform={'uppercase'}
					as={'h2'}
					size={'lg'}
					color={'blackAlpha.600'}
				>
					Overview
				</Heading>
				<DescriptionSection data={data?.overview} />
			</Box>
			<Box>
				<Heading
					textTransform={'uppercase'}
					as={'h2'}
					size={'lg'}
					color={'blackAlpha.600'}
				>
					sponsor
				</Heading>
				<Wrap spacing={'2rem'}>
					{data.sponsorList?.map((sponsor: any, key: Key) => (
						<WrapItem
							key={key}
							p={'3rem'}
							width={'min-content'}
							bg={'white'}
							boxShadow={'lg'}
							border={'1px'}
							borderColor={'teal'}
							borderRadius={'lg'}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
						>
							<Center
								whiteSpace={'nowrap'}
								fontWeight={'bold'}
							>
								{sponsor.sponsor_name}
							</Center>
						</WrapItem>
					))}
				</Wrap>
			</Box>
			<Box>
				<Heading
					textTransform={'uppercase'}
					as={'h2'}
					size={'lg'}
					color={'blackAlpha.600'}
				>
					hacker review
				</Heading>
			</Box>
			<Box>
				<Heading
					textTransform={'uppercase'}
					as={'h2'}
					size={'lg'}
					color={'blackAlpha.600'}
				>
					hacker feedback
				</Heading>
			</Box>
		</VStack>
	);
}
