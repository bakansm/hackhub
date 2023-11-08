import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
	Box,
	Divider,
	Flex,
	HStack,
	Heading,
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
} from '@chakra-ui/react';
import { Key } from 'react';

export default function ScheduleTab({ steps }: { steps: any }) {
	const { activeStep } = useSteps({
		index: 0,
		count: steps.length,
	});

	return (
		<Box>
			<Heading
				as={'h2'}
				size={'lg'}
				color='teal'
			>
				Hackathon Timeline
			</Heading>
			<Divider />
			<Stepper
				index={activeStep}
				orientation='vertical'
				gap={0}
			>
				{steps.map((step: any, key: Key) => (
					<Step key={key}>
						<StepIndicator>
							<StepStatus
								complete={<StepIcon />}
								incomplete={<StepNumber />}
								active={<StepNumber />}
							/>
						</StepIndicator>

						<Box flexShrink='0'>
							<StepTitle>
								<Heading
									as={'h3'}
									size={'md'}
								>
									{step.title}
								</Heading>
							</StepTitle>
							<StepDescription>
								<HStack
									padding={'1rem'}
									bg={'whitesmoke'}
									borderRadius={'xl'}
									border={'1px'}
									boxShadow={'lg'}
									spacing={'1rem'}
								>
									<Flex
										gap={'.5rem'}
										alignItems={'center'}
									>
										<CalendarIcon boxSize={'6'} />
										<Box
											alignItems={'center'}
											fontSize='xl'
										>
											{step.date}
										</Box>
									</Flex>
									<Flex gap={'.5rem'}>
										<TimeIcon boxSize={'6'} />
										<Box
											alignItems={'center'}
											fontSize='xl'
										>
											{step.time}
										</Box>
									</Flex>
								</HStack>
							</StepDescription>
						</Box>

						<StepSeparator />
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
