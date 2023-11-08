import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDefaultLayout } from '@/hooks/useLayout';
import SubmitProjectTab from '@/components/pages/hackathon/hackathonId/SubmitProjectTab';
import DiscussTab from '@/components/pages/hackathon/hackathonId/DiscussTab';
import ScheduleTab from '@/components/pages/hackathon/hackathonId/ScheduleTab';
import BountieTab from '@/components/pages/hackathon/hackathonId/BountieTab';
import JudgeTab from '@/components/pages/hackathon/hackathonId/JudgeTab';
import OverviewTab from '@/components/pages/hackathon/hackathonId/OverviewTab';
import SubmmitedProjectTab from '@/components/pages/hackathon/hackathonId/SubmmitedProjectTab';
import { useRouter } from 'next/router';
import axios from 'axios';
import changeISOtoUTC from '@/utils/changeISOtoUTC';

const tabList = ['overview', 'judge', 'bountie', 'schedule', 'discuss'];

export default function HackathonDetail() {
	const router = useRouter();
	const { hackathonId } = router.query;
	const [hackathonDetail, setHackathonDetail] = useState<any>();
	const [selectedTab, setSelectedTab] = useState<string>('overview');

	const selectTab = (tab: string) => {
		setSelectedTab(tab);
	};

	useEffect(() => {
		if (hackathonId) {
			const fetchData = async () => {
				let config = {
					method: 'get',
					maxBodyLength: Infinity,
					url: `${process.env.API_URL}/api/hackathon/get-hack-id?id=${hackathonId}`,
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NGQxZmZiMjI4OTk5OWU1MWNkMTUxMzkiLCJFbWFpbCI6ImR1bmdANWlyZS5vcmciLCJVc2VyVHlwZSI6ImFkbWluIiwiZXhwIjoxNjk4OTk2MjQ4Ljc1NTYyOH0.IqRedzGJNyyy9_yopUAUCGB78mUSHByObNLrflXC1Rc',
					},
				};

				await axios
					.request(config)
					.then((response) => {
						setHackathonDetail(response.data.message);
					})
					.catch((error) => {
						console.log(error);
					});
			};

			fetchData();
		}
	}, [hackathonId]);

	const renderTab = (tab: string) => {
		switch (tab) {
			case 'overview':
				return (
					<OverviewTab
						data={{
							overview: hackathonDetail?.overview,
							sponsorList: hackathonDetail?.sponsors,
						}}
					/>
				);
			case 'judge':
				return <JudgeTab data={hackathonDetail?.judges} />;
			case 'bountie':
				return <BountieTab data={hackathonDetail?.sponsors} />;
			case 'schedule':
				return (
					<ScheduleTab
						steps={[
							{
								title: 'Register starts',
								date: changeISOtoUTC(
									hackathonDetail.registration_start,
								).date,
								time: changeISOtoUTC(
									hackathonDetail.registration_start,
								).time,
							},
							{
								title: 'Register ends',
								date: changeISOtoUTC(
									hackathonDetail.registration_end,
								).date,
								time: changeISOtoUTC(
									hackathonDetail.registration_end,
								).time,
							},
							{
								title: 'Submission starts',
								date: changeISOtoUTC(
									hackathonDetail.submission_start,
								).date,
								time: changeISOtoUTC(
									hackathonDetail.submission_start,
								).time,
							},
							{
								title: 'Submission ends',
								date: changeISOtoUTC(
									hackathonDetail.submission_end,
								).date,
								time: changeISOtoUTC(
									hackathonDetail.submission_end,
								).time,
							},
							{
								title: 'Results Announced',
								date: changeISOtoUTC(
									hackathonDetail.result_announce,
								).date,
								time: changeISOtoUTC(
									hackathonDetail.result_announce,
								).time,
							},
						]}
					/>
				);
			case 'discuss':
				return <DiscussTab />;
			case 'submit-project':
				return <SubmitProjectTab />;
			case 'submitted-project':
				return <SubmmitedProjectTab />;
			default:
				break;
		}
	};

	return (
		<Container maxW={'1440px'}>
			<Grid
				templateColumns={'repeat(5, 1fr)'}
				gap={'1rem'}
			>
				<GridItem colSpan={1}>
					<Box
						position={'sticky'}
						top={'1rem'}
						left={0}
					>
						<VStack spacing={'1rem'}>
							<Box
								w={'100%'}
								display={'flex'}
								flexDirection={'column'}
								gap={'4px'}
								borderRadius={'base'}
								boxShadow={'base'}
								p={'1rem'}
							>
								{tabList.map((tab, key) => (
									<Button
										key={key}
										textTransform={'uppercase'}
										variant={'ghost'}
										colorScheme={`${
											selectedTab === tab
												? 'teal'
												: 'blackAlpha'
										}`}
										onClick={() => selectTab(tab)}
										py={'1.5rem'}
									>
										{tab}
									</Button>
								))}
							</Box>
							<Button
								textTransform={'uppercase'}
								variant={'solid'}
								colorScheme='teal'
								onClick={() => selectTab('submit-project')}
								py={'1.5rem'}
								w={'100%'}
							>
								Submit project
							</Button>
							<Button
								textTransform={'uppercase'}
								variant={'outline'}
								colorScheme='teal'
								onClick={() => selectTab('submitted-project')}
								py={'1.5rem'}
								w={'100%'}
							>
								View submitted project
							</Button>
						</VStack>
					</Box>
				</GridItem>
				<GridItem colSpan={4}>{renderTab(selectedTab)}</GridItem>
			</Grid>
		</Container>
	);
}

HackathonDetail.getLayout = useDefaultLayout;
