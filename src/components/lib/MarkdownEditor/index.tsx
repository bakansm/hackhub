import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { ContextStore } from '@uiw/react-md-editor';
import dynamic from 'next/dynamic';
import { ChangeEvent, useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function MarkdownEditor() {
	const [value, setValue] = useState<string>('');

	const handleChange = (
		value: string | undefined,
		event: ChangeEvent<HTMLTextAreaElement> | undefined,
		state: ContextStore | undefined,
	) => {
		if (value !== undefined) {
			setValue(value);
		}
	};

	return (
		<MDEditor
			height={200}
			value={value}
			onChange={handleChange}
		/>
	);
}
