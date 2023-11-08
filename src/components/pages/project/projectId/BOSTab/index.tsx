import { VmComponent } from '@/components/vm/VmComponent';

export default function BOSTab({ link }: { link: string }) {
	return <VmComponent src={`${link}`} />;
}
