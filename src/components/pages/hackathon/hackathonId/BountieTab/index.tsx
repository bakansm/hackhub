import {
	Box,
	Center,
	Heading,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from '@chakra-ui/react';
import TrackSection from './TrackSection';
import { Key } from 'react';

export default function BountieTab({ data }: { data: any }) {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={'1rem'}
		>
			{/* Total Pool */}
			<Center
				display={'flex'}
				flexDirection={'column'}
				bg={'blackAlpha.800'}
				borderRadius={'xl'}
				paddingY={'2rem'}
			>
				<Text
					color={'gold'}
					textTransform={'uppercase'}
					fontSize={'5xl'}
					fontWeight={'black'}
				>
					Prize Pool
				</Text>
				<Text
					color={'whiteAlpha.900'}
					textTransform={'uppercase'}
					fontSize={'4xl'}
					fontWeight={'black'}
				>
					sadadasdsdasdasd
				</Text>
			</Center>

			{/* Sponsor Pool */}
			<Tabs
				position='relative'
				variant='unstyled'
			>
				<TabList>
					{data.map((tab: any, key: Key) => (
						<Tab
							key={key}
							as={'h4'}
							fontSize={'md'}
							fontWeight={'bold'}
						>
							{tab.sponsor_name}
						</Tab>
					))}
				</TabList>
				<TabIndicator
					height='2px'
					bg='teal'
					borderRadius='1px'
				/>
				<TabPanels>
					{data.map((sponsor: any, key: Key) => (
						<TabPanel key={key}>
							<Heading
								as={'h4'}
								size={'lg'}
							>
								{sponsor.sponsor_name}
							</Heading>
							<Text
								fontSize={'2xl'}
								fontWeight={'bold'}
								color={'blackAlpha.600'}
							>
								${sponsor.prize_pool.toLocaleString()}
							</Text>
							<VStack
								spacing={'1rem'}
								justify={'stretch'}
							>
								{sponsor.track.map((track: any, key: Key) => (
									<TrackSection
										key={key}
										title={track.track_name}
										description={track.description}
										prizeList={track.prizes}
									/>
								))}
							</VStack>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</Box>
	);
}
