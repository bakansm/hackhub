import {
	AbsoluteCenter,
	Box,
	Card,
	Divider,
	Heading,
	Text,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function PrizeCard({ prize }: { prize: any }) {
	const medalPath = (prizePosition: number) => {
		switch (prizePosition) {
			case 1:
				return '/icons/medal.png';
			case 2:
				return '/icons/medal2.png';
			case 3:
				return '/icons/medal3.png';
			default:
				return '/icons/medal4.png';
		}
	};

	const positionText = (prizePosition: number) => {
		switch (prizePosition) {
			case 1:
				return '1st';
			case 2:
				return '2nd';
			case 3:
				return '3rd';
			default:
				return `${prizePosition}th`;
		}
	};

	return (
		<Card
			size={'sm'}
			gap={'1rem'}
			direction={'row'}
			p={'1rem'}
			w={'fit-content'}
			minW={'20rem'}
		>
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Image
					src={medalPath(prize.place)}
					alt='medal'
					width={64}
					height={64}
				/>
			</Box>
			<Box>
				<Box position='relative'>
					<Divider
						width={'3xs'}
						borderColor={'teal'}
					/>
					<AbsoluteCenter bg='white'>
						<Heading
							size={'md'}
							mb={0}
							px={'1rem'}
							whiteSpace={'nowrap'}
						>
							{positionText(prize.place)} Prize
						</Heading>
					</AbsoluteCenter>
				</Box>

				<Text
					color={'blackAlpha.700'}
					fontWeight={'bold'}
					fontSize={'xl'}
					mb={0}
					p={0}
				>
					$ {prize.reward.toLocaleString()}
				</Text>
				<Text
					color={'blackAlpha.500'}
					fontWeight={'bold'}
					fontSize={'lg'}
					mb={0}
					p={0}
				>
					{prize.quantity.toLocaleString()} prize
				</Text>
			</Box>
		</Card>
	);
}
