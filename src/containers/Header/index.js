import * as React from 'react';
import Container from '@material-ui/core/Container';
import Menu from '../../components/Menu';
import Cover from '../../components/Cover';

export default function Header(props) {
  const { navBar, cover } = props;
    return (
      <Container maxWidth="xl">
        <Cover cover={cover} />
      </Container>
    );
  }