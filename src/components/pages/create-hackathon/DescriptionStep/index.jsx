import { VmComponent } from '@/components/vm/VmComponent';
import { useState } from 'react';

export default function DescriptionStep() {
	const [markdown, setMarkdown] = useState('# Hello World');

	const handleChange = (event) => {
		setMarkdown(event.target.value);
	};

	return (
		<>
			<VmComponent src='toch.near/widget/SocialPost' />
		</>
	);
}
