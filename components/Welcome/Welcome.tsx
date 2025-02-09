import { Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Tutaj będzie jakaś śliczna strona powitalna 💜
      </Title>
    </>
  );
}
