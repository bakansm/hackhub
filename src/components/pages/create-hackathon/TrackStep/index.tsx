import React, { useState } from 'react';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	VStack,
} from '@chakra-ui/react';
import TrackCard from './TrackCard';
import { AddIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addNewTrack } from '@/redux/slicers/createHackathonSlice';

export default function TrackStep() {
	const dispatch = useDispatch();

	const handleAddTrack = (index: number) => {
		dispatch(addNewTrack(index));
	};

	const getTrackList = (index: number) => {
		const trackList = useSelector(
			(state: RootState) => state.createHackthon.sponsor[index].track,
		);
		return trackList;
	};

	const sponsorList = useSelector(
		(state: RootState) => state.createHackthon.sponsor,
	);

	return (
		<VStack spacing={'1rem'}>
			<Accordion
				allowToggle
				w={'100%'}
			>
				{sponsorList.map((sponsor, sponsorIndex) => (
					<AccordionItem key={sponsorIndex}>
						<AccordionButton>
							<Box
								as='span'
								flex='1'
								textAlign='left'
								fontWeight={'semibold'}
								fontSize={'xl'}
							>
								{sponsor.name}
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							<VStack spacing={'1rem'}>
								{getTrackList(sponsorIndex).map(
									(track, trackIndex) => (
										<TrackCard
											key={trackIndex}
											trackData={track}
											sponsorIndex={sponsorIndex}
											trackIndex={trackIndex}
										/>
									),
								)}
							</VStack>
							<Button
								mt={'1rem'}
								variant={'outline'}
								colorScheme={'blackAlpha'}
								py={0}
								onClick={() => handleAddTrack(sponsorIndex)}
							>
								<AddIcon mr={'.5rem'} /> Add track
							</Button>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</VStack>
	);
}
