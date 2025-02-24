import { Container, Image, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import IMAGES from './images';
import classes from './FeaturesImages.module.css';

const data = [
  {
    image: 'aerialHoop',
    title: 'Aerial Hoop',
    description: 'Spektakularne figury na kole, rozwijające siłę i elastyczność.',
  },
  {
    image: 'aerialHammock',
    title: 'Aerial Hammock',
    description: 'Trening w hamaku, który wzmacnia ciało i odpręża umysł.',
  },
  {
    image: 'poleDance',
    title: 'Pole Dance',
    description: 'Siła, gracja, pełna kontrola nad ciałem.',
  },
  {
    image: 'Yoga',
    title: 'Yoga',
    description: 'Wzmacniająca harmonia ciała i umysłu.',
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant="gradient"
        gradient={{ from: 'grape', to: 'violet', deg: 152 }}
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <Image src={IMAGES[item.image]} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>Unieś swój trening na wyższy poziom</Text>

      <Title className={classes.title} order={2}>
        Zbuduj swoją bazę <span className={classes.highlight}>figur</span> i{' '}
        <span className={classes.highlight}>inspiracji</span>!
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Stwórz własną kolekcję figur, ucz się nowych pozycji i twórz płynne sekwencje, które
          podkreślą Twój styl!
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
