import React from 'react';
import {
	Center,
	Heading,
	IconButton,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import SponsorCard from './SponsorCard';
import { AddIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addNewSponsor } from '@/redux/slicers/createHackathonSlice';

export default function SponsorStep() {
	const dispatch = useDispatch();

	const addSponsorCard = () => {
		dispatch(addNewSponsor());
	};

	const sponsorCardList = useSelector(
		(state: RootState) => state.createHackthon.sponsor,
	);

	return (
		<Center>
			<VStack spacing='1rem'>
				<Heading size={'lg'}>Add sponsor</Heading>
				<Wrap
					spacing={'1rem'}
					justify={'center'}
				>
					{sponsorCardList.map((card, index) => (
						<WrapItem key={index}>
							<SponsorCard
								index={index}
								cardData={card}
							/>
						</WrapItem>
					))}
				</Wrap>
				<IconButton
					variant={'outline'}
					onClick={addSponsorCard}
					aria-label='add'
				>
					<AddIcon />
				</IconButton>
			</VStack>
		</Center>
	);
}
