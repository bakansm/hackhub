import { useDefaultLayout } from '@/hooks/useLayout';
import { Button, ButtonGroup, Container, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import SponsorStep from '../../components/pages/create-hackathon/SponsorStep';
import TrackStep from '../../components/pages/create-hackathon/TrackStep';
import ScheduleStep from '../../components/pages/create-hackathon/ScheduleStep';
import JudgeStep from '../../components/pages/create-hackathon/JudgeStep';
import DescriptionStep from '@/components/pages/create-hackathon/DescriptionStep';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function CreateHackathon() {
	const [step, setStep] = useState<number>(1);
	const router = useRouter();

	const sponsorAmount = useSelector(
		(state: RootState) => state.createHackthon.sponsor.length,
	);

	const nextStep = () => {
		if (step < 5) setStep(step + 1);
	};

	const prevStep = () => {
		if (step > 1) setStep(step - 1);
	};

	const renderStep = (step: number) => {
		switch (step) {
			case 1:
				return <SponsorStep />;
			case 2:
				return <TrackStep />;
			case 3:
				return <JudgeStep />;
			case 4:
				return <ScheduleStep />;
			case 5:
				return <DescriptionStep />;
			default:
				break;
		}
	};

	return (
		<Container maxW={'1440px'}>
			{renderStep(step)}
			<Flex
				justify={'flex-end'}
				mt={'1rem'}
			>
				<ButtonGroup>
					{step > 1 ? (
						<Button
							variant={'ghost'}
							onClick={prevStep}
						>
							Prev Step
						</Button>
					) : (
						<Button
							variant={'ghost'}
							onClick={() => router.push('/hackathon')}
						>
							Cancel
						</Button>
					)}
					{step < 5 ? (
						<Button
							variant={'ghost'}
							colorScheme='teal'
							onClick={nextStep}
						>
							Next Step
						</Button>
					) : (
						<Button
							variant={'solid'}
							colorScheme='teal'
							onClick={nextStep}
						>
							Preview
						</Button>
					)}
				</ButtonGroup>
			</Flex>
		</Container>
	);
}

CreateHackathon.getLayout = useDefaultLayout;
