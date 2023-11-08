import { VmComponent } from '@/components/vm/VmComponent';

export default function DescriptionSection({ data }) {
	// const code = `return (<Markdown text={${data}} />)`;
	const code = `return (<Markdown text={'# Hello World'} />)`;

	return (
		<VmComponent
			src='near/widget/DIG.Theme'
			props={{ children: <VmComponent code={code} /> }}
		/>
	);
}
