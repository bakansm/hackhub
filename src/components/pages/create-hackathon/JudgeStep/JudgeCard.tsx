import { Judge, submitJudge } from '@/redux/slicers/createHackathonSlice';
import { RootState } from '@/redux/store';
import {
	Button,
	Card,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function JudgeCard({
	judgeData,
	index,
}: {
	judgeData: Judge;
	index: number;
}) {
	const [name, setName] = useState<string>(judgeData.name);
	const [role, setRole] = useState<string>(judgeData.role);
	const [email, setEmail] = useState<string>(judgeData.email);
	const [wallet, setWallet] = useState<string>(judgeData.wallet);
	const [avatarImage, setAvatarImage] = useState<string>(
		judgeData.avatarImage,
	);
	const isSubmitted = useSelector(
		(state: RootState) => state.createHackthon.judge[index].isSubmitted,
	);

	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<Judge>();

	const onSubmit: SubmitHandler<Judge> = (data) => {
		dispatch(
			submitJudge({
				index: index,
				judge: { ...data, isSubmitted: true },
			}),
		);
	};

	return (
		<Card
			width={'fit-content'}
			p={'1rem'}
			gap={'1rem'}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isDisabled={isSubmitted}>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Name'
							minW={'5rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={name}
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
							children='Role'
							minW={'5rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={role}
							{...register('role', {
								required: true,
								onChange(event) {
									setRole(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Email'
							minW={'5rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							{...register('email', {
								required: true,
								onChange(event) {
									setEmail(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Wallet'
							minW={'5rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							{...register('wallet', {
								required: true,
								onChange(event) {
									setWallet(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Avatar'
							minW={'5rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='file'
							border={'none'}
							focusBorderColor='teal.500'
							{...register('avatarImage', {
								required: true,
								onChange(event) {
									setAvatarImage(event.target.value);
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
