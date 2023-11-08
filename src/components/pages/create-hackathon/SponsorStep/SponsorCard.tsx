import { Sponsor, submitSponsor } from '@/redux/slicers/createHackathonSlice';
import { RootState } from '@/redux/store';
import {
	Button,
	Card,
	CardHeader,
	Divider,
	FormControl,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function SponsorCard({
	cardData,
	index,
}: {
	cardData: Sponsor;
	index: number;
}) {
	const [name, setName] = useState<string>(cardData.name);
	const [prizePool, setPrizePool] = useState<number>(cardData.prizePool);
	const [walletAddress, setWalletAddress] = useState<string>(
		cardData.walletAddress,
	);
	const [logoImage, setLogoImage] = useState<File | null>(cardData.logoImage);
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<Sponsor>();

	const isSubmitted = useSelector(
		(state: RootState) => state.createHackthon.sponsor[index].isSubmitted,
	);

	const onSubmit: SubmitHandler<Sponsor> = (data) => {
		console.log(data);
		if (!isSubmitted) {
			dispatch(
				submitSponsor({
					index,
					sponsor: {
						...data,
						track: [
							{
								name: '',
								description: '',
								prize: {
									firstPrize: {
										bounty: 0,
										amount: 0,
									},
									secondPrize: {
										bounty: 0,
										amount: 0,
									},
									thirdPrize: {
										bounty: 0,
										amount: 0,
									},
								},
								isSubmitted: false,
							},
						],
						isSubmitted: true,
					},
				}),
			);
		} else {
			dispatch(
				submitSponsor({
					index,
					sponsor: {
						...data,
						track: [
							{
								name: '',
								description: '',
								prize: {
									firstPrize: {
										bounty: 0,
										amount: 0,
									},
									secondPrize: {
										bounty: 0,
										amount: 0,
									},
									thirdPrize: {
										bounty: 0,
										amount: 0,
									},
								},
								isSubmitted: false,
							},
						],
						isSubmitted: false,
					},
				}),
			);
		}
	};

	return (
		<Card
			width={'fit-content'}
			p={'1rem'}
			gap={'1rem'}
		>
			<CardHeader
				m={0}
				p={0}
				textAlign={'center'}
			>
				<Heading
					m={0}
					p={0}
				>
					{name}
				</Heading>
			</CardHeader>
			<Divider
				borderColor={'teal'}
				m={0}
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isRequired>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Sponsor name'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={name}
							disabled={isSubmitted}
							{...register('name', {
								required: true,
								onChange(event) {
									setName(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Prize pool'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							value={prizePool}
							disabled={isSubmitted}
							{...register('prizePool', {
								required: true,
								onChange(event) {
									setPrizePool(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Wallet address'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={walletAddress}
							disabled={isSubmitted}
							{...register('walletAddress', {
								required: true,
								onChange(event) {
									setWalletAddress(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Logo image'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='file'
							border={'none'}
							value={logoImage?.toString()}
							disabled={isSubmitted}
							w={'min-content'}
							accept='image/*'
							{...register('logoImage', {
								required: true,
								onChange(event) {
									setLogoImage(event.target.files[0]);
								},
							})}
						/>
					</InputGroup>
					{isSubmitted ? (
						<Button
							colorScheme='teal'
							variant={'outline'}
							type='submit'
							w={'100%'}
						>
							Edit
						</Button>
					) : (
						<Button
							colorScheme='teal'
							type='submit'
							w={'100%'}
						>
							Submit
						</Button>
					)}
				</FormControl>
			</form>
		</Card>
	);
}
