import React, { ReactElement, useState } from 'react';
import {
	Center,
	Heading,
	IconButton,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import JudgeCard from './JudgeCard';
import { useDispatch, useSelector } from 'react-redux';
import { addNewJudge } from '@/redux/slicers/createHackathonSlice';
import { RootState } from '@/redux/store';

export default function SponsorStep() {
	const dispatch = useDispatch();

	const addJudgeCard = () => {
		dispatch(addNewJudge());
	};

	const judgeList = useSelector(
		(state: RootState) => state.createHackthon.judge,
	);

	return (
		<Center>
			<VStack spacing='1rem'>
				<Heading size={'lg'}>Add Judge</Heading>
				<Wrap
					spacing={'1rem'}
					justify={'center'}
				>
					{judgeList.map((judge, index) => (
						<WrapItem key={index}>
							<JudgeCard
								judgeData={judge}
								index={index}
							/>
						</WrapItem>
					))}
				</Wrap>
				<IconButton
					variant={'outline'}
					onClick={addJudgeCard}
					aria-label='add'
				>
					<AddIcon />
				</IconButton>
			</VStack>
		</Center>
	);
}
