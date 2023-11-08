import { Grid, GridItem, Wrap } from '@chakra-ui/react';
import JudgeCard from './JudgeCard';
import { Key } from 'react';

export default function JudgeTab({ data }: { data: any }) {
	return (
		<Grid
			templateColumns={'repeat(4, 1fr)'}
			gap={'1rem'}
		>
			{data.map((judge: any, key: Key) => (
				<GridItem key={key}>
					<JudgeCard judge={judge} />
				</GridItem>
			))}
		</Grid>
	);
}
