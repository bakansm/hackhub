import { ChevronDownIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function ScoreSubmitForm({
	isOpen,
	onClose,
}: {
	isOpen: any;
	onClose: any;
}) {
	const [score, setScore] = useState<number>(1);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Submit Score</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack
						spacing={'1rem'}
						align={'stretch'}
					>
						<Box>
							<Heading size={'sm'}>Score</Heading>
							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<ChevronDownIcon />}
									variant={'outline'}
									maxW={'5rem'}
								>
									{score}
								</MenuButton>
								<MenuList maxW={'5rem'}>
									<MenuItem onClick={() => setScore(1)}>
										1
									</MenuItem>
									<MenuItem onClick={() => setScore(2)}>
										2
									</MenuItem>
									<MenuItem onClick={() => setScore(3)}>
										3
									</MenuItem>
									<MenuItem onClick={() => setScore(4)}>
										4
									</MenuItem>
									<MenuItem onClick={() => setScore(5)}>
										5
									</MenuItem>
									<MenuItem onClick={() => setScore(6)}>
										6
									</MenuItem>
									<MenuItem onClick={() => setScore(7)}>
										7
									</MenuItem>
									<MenuItem onClick={() => setScore(8)}>
										8
									</MenuItem>
									<MenuItem onClick={() => setScore(9)}>
										9
									</MenuItem>
									<MenuItem onClick={() => setScore(10)}>
										10
									</MenuItem>
								</MenuList>
							</Menu>
						</Box>
						<Box>
							<Heading size={'sm'}>Comment</Heading>
							<Textarea minHeight={'10rem'} />
						</Box>
					</VStack>
				</ModalBody>

				<ModalFooter>
					<Button
						variant={'ghost'}
						mr={3}
						onClick={onClose}
						colorScheme='teal'
					>
						Close
					</Button>
					<Button
						variant='solid'
						colorScheme='teal'
					>
						Submit
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
