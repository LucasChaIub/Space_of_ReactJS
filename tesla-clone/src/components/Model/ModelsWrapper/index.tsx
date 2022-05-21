import React, { ReactNode } from 'react';

import { Container } from './styles';

interface Props {
    children?: ReactNode;
}

const ModelsWrapper: React.FC<Props> = ({children}) => {
    return <Container>{children}</Container>
};

export default ModelsWrapper;
