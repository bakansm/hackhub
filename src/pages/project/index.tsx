import { useDefaultLayout } from '@/hooks/useLayout';
import { Container } from '@chakra-ui/react';

export default function Project() {
	return <Container maxW={'1440px'}></Container>;
}

Project.getLayout = useDefaultLayout;
