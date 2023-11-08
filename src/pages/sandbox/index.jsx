import { VmComponent } from '@/components/vm/VmComponent';
import { useDefaultLayout } from '@/hooks/useLayout';
import {
	Button,
	Flex,
	Grid,
	GridItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	VStack,
} from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

export default function Sandbox() {
	const [code, setCode] = useState('return (<div>Hello World</div>)');

	const handleCodeChange = (value) => {
		console.log(value);
		setCode(value);
	};

	return (
		<Grid
			gap={'2rem'}
			templateColumns={'repeat(2, 1fr)'}
			mx={'2rem'}
		>
			<GridItem
				colSpan={1}
				h={'90vh'}
				borderRadius={'xl'}
				border={'1px'}
				borderColor={'teal'}
				overflow={'hidden'}
				py={'1rem'}
			>
				<Editor
					value={code}
					defaultLanguage='javascript'
					onChange={handleCodeChange}
					theme='light'
				/>
			</GridItem>
			<GridItem
				colSpan={1}
				h={'90vh'}
				borderRadius={'xl'}
				border={'1px'}
				borderColor={'teal'}
				overflowX={'hidden'}
			>
				<Tabs
					isFitted
					colorScheme='teal'
				>
					<TabList mb='1em'>
						<Tab py={'1rem'}>Preview</Tab>
						<Tab py={'1rem'}>Library</Tab>
					</TabList>
					<TabPanels>
						<TabPanel
							padding={'1rem'}
							overflowX={'hidden'}
						>
							<VmComponent
								src='near/widget/DIG.Theme'
								props={{
									children: <VmComponent code={code} />,
								}}
							/>
						</TabPanel>
						<TabPanel overflow={'hidden'}>
							<iframe
								src='https://flashui.vercel.app'
								width={'100%'}
								height={756}
							/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</GridItem>
		</Grid>
	);
}

Sandbox.getLayout = useDefaultLayout;
