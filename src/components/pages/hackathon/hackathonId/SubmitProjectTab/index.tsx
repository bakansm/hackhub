import { AddIcon } from '@chakra-ui/icons';
import {
	Badge,
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	IconButton,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type Project = {
	projectName: string;
	description: string;
	solution: string;
	projectImage: any[];
	challenges: string;
	bosLink: string;
	technologies: string[];
	projectVideo: string;
	projectPresentation: any[];
	externalLink: string[];
};

export default function SubmitProjectTab() {
	const [technologiesUsed, setTechnologiesUsed] = useState<string[]>([]);
	const [technology, setTechnology] = useState<string>('');
	const { register, handleSubmit } = useForm<Project>();
	const [externalLink, setExternalLink] = useState<string>('');
	const [externalLinkList, setExternalLinkList] = useState<string[]>([]);

	const handleExternalLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
		setExternalLink(event.target.value);
	};

	const addExternalLink = () => {
		setExternalLinkList([...externalLinkList, externalLink]);
	};

	const handleTechnologyChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTechnology(event.target.value);
	};

	const onSubmit: SubmitHandler<Project> = (data) => {
		console.log({ ...data, technologies: technologiesUsed });
	};
	const addTechnology = () => {
		setTechnologiesUsed([...technologiesUsed, technology]);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack
				spacing={'2rem'}
				align={'stretch'}
				mb={'2rem'}
			>
				<FormControl isRequired>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Project Name
					</FormLabel>
					<Input
						{...register('projectName', {
							required: true,
							max: 300,
						})}
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Short description
					</FormLabel>
					<Textarea
						h={'5rem'}
						resize={'none'}
						{...register('description', {
							required: true,
							max: 300,
						})}
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						What is your solution
					</FormLabel>
					<Textarea
						h={'20rem'}
						resize={'none'}
						{...register('solution', { required: true })}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project image
					</FormLabel>
					<Input
						type='file'
						border={'none'}
						w={'min-content'}
						{...register('projectImage')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						The challenges you have faced
					</FormLabel>
					<Textarea
						h={'10rem'}
						resize={'none'}
						{...register('challenges', {
							max: 600,
						})}
					/>
				</FormControl>
				<Flex direction={'column'}>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Technologies used
					</FormLabel>
					{technologiesUsed[0] && (
						<HStack
							spacing={'1rem'}
							mb={'1rem'}
						>
							{technologiesUsed.map((technology, key) => (
								<Badge
									key={key}
									fontSize={'xs'}
									rounded={'full'}
									py={'0.25rem'}
									px={'1rem'}
								>
									{technology}
								</Badge>
							))}
						</HStack>
					)}
					<HStack spacing={'1rem'}>
						<Input
							w={'10rem'}
							onChange={handleTechnologyChange}
						/>
						<Button
							variant={'ghost'}
							colorScheme='teal'
							onClick={addTechnology}
						>
							Add
						</Button>
					</HStack>
				</Flex>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project video link
					</FormLabel>
					<Input
						type='text'
						{...register('projectVideo')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your BOS link
					</FormLabel>
					<Input
						type='text'
						{...register('bosLink')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project presentation file
					</FormLabel>
					<Input
						type='file'
						border={'none'}
						w={'min-content'}
						{...register('projectPresentation')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						External Link
					</FormLabel>
					<VStack
						spacing={'1rem'}
						mb={'0.5rem'}
					>
						<Input
							type='text'
							onChange={handleExternalLinkChange}
						/>
					</VStack>
					<IconButton aria-label='add-btn'>
						<AddIcon />
					</IconButton>
				</FormControl>
				<Flex justify={'center'}>
					<Button
						variant={'solid'}
						colorScheme='teal'
						w={'min-content'}
						type='submit'
					>
						Submit
					</Button>
				</Flex>
			</VStack>
		</form>
	);
}
