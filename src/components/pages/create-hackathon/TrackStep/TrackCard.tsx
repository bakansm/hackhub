import {
	Prize,
	Track,
	submitTrack,
} from '@/redux/slicers/createHackathonSlice';
import { RootState } from '@/redux/store';
import {
	Button,
	Card,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function TrackCard({
	trackData,
	sponsorIndex,
	trackIndex,
}: {
	trackData: Track;
	sponsorIndex: number;
	trackIndex: number;
}) {
	const { register, handleSubmit } = useForm<Track>();
	const [name, setName] = useState<string>(trackData.name);
	const [description, setDescription] = useState<string>(
		trackData.description,
	);
	const [prize, setPrize] = useState<Prize>(trackData.prize);
	const dispatch = useDispatch();

	const isSubmitted = useSelector(
		(state: RootState) =>
			state.createHackthon.sponsor[sponsorIndex].track[trackIndex]
				.isSubmitted,
	);

	const onSubmit: SubmitHandler<Track> = (data) => {
		if (!isSubmitted) {
			dispatch(
				submitTrack({
					sponsorIndex: sponsorIndex,
					track: { ...data, isSubmitted: true },
				}),
			);
		} else {
			dispatch(
				submitTrack({
					sponsorIndex: sponsorIndex,
					track: { ...data, isSubmitted: false },
				}),
			);
		}
	};

	return (
		<Card
			p='1rem'
			w={'100%'}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon
							children='Track name'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							mb={'1rem'}
							value={name}
							focusBorderColor='teal.500'
							{...register('name', {
								required: true,
								onChange(event) {
									setName(event.target.value);
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon
							children='Description'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Textarea
							focusBorderColor='teal.500'
							value={description}
							{...register('description', {
								required: true,
								onChange(event) {
									setDescription(event.target.value);
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup
						key={0}
						mt={'1rem'}
					>
						<InputLeftAddon
							children='1st Prize'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							value={prize.firstPrize.bounty}
							{...register('prize', {
								required: true,
								onChange(event) {
									setPrize((prevPrize) => ({
										firstPrize: {
											amount: prevPrize.firstPrize.amount,
											bounty: event.target.value,
										},
										secondPrize: prevPrize.secondPrize,
										thirdPrize: prevPrize.thirdPrize,
									}));
								},
							})}
						/>
						<InputLeftAddon
							ml={'1rem'}
							children='Amount'
							minW={'6rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							w={'4rem'}
							value={prize.firstPrize.amount}
							{...register('prize', {
								required: true,
								onChange(event) {
									setPrize((prevPrize) => ({
										...prevPrize,
										firstPrize: {
											...prevPrize.firstPrize,
											amount: event.target.value,
										},
									}));
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<InputGroup
					key={1}
					mt={'1rem'}
				>
					<InputLeftAddon
						children='2nd Prize'
						minW={'8rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='number'
						focusBorderColor='teal.500'
						value={prize.secondPrize.bounty}
						{...register('prize', {
							required: true,
							onChange(event) {
								setPrize((prevPrize) => ({
									...prevPrize,
									secondPrize: {
										...prevPrize.secondPrize,
										bounty: event.target.value,
									},
								}));
							},
						})}
					/>
					<InputLeftAddon
						ml={'1rem'}
						children='Amount'
						minW={'6rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='number'
						focusBorderColor='teal.500'
						w={'4rem'}
						value={prize.secondPrize.amount}
						{...register('prize', {
							required: true,
							onChange(event) {
								setPrize((prevPrize) => ({
									...prevPrize,
									secondPrize: {
										...prevPrize.secondPrize,
										amount: event.target.value,
									},
								}));
							},
						})}
					/>
				</InputGroup>
				<InputGroup
					key={2}
					mt={'1rem'}
				>
					<InputLeftAddon
						children='3rd Prize'
						minW={'8rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='number'
						focusBorderColor='teal.500'
						value={prize.thirdPrize.bounty}
						{...register('prize', {
							required: true,
							onChange(event) {
								setPrize((prevPrize) => ({
									...prevPrize,
									thirdPrize: {
										...prevPrize.thirdPrize,
										bounty: event.target.value,
									},
								}));
							},
						})}
					/>
					<InputLeftAddon
						ml={'1rem'}
						children='Amount'
						minW={'6rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='number'
						focusBorderColor='teal.500'
						w={'4rem'}
						value={prize.thirdPrize.amount}
						{...register('prize', {
							required: true,
							onChange(event) {
								setPrize((prevPrize) => ({
									...prevPrize,
									thirdPrize: {
										...prevPrize.thirdPrize,
										amount: event.target.value,
									},
								}));
							},
						})}
					/>
				</InputGroup>
				{isSubmitted ? (
					<Button
						variant={'outline'}
						colorScheme='teal'
						type='submit'
						w={'min-content'}
						mt={'1rem'}
					>
						Edit
					</Button>
				) : (
					<Button
						colorScheme='teal'
						type='submit'
						w={'min-content'}
						mt={'1rem'}
					>
						Submit
					</Button>
				)}
			</form>
		</Card>
	);
}
