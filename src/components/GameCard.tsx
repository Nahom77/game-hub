import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import type { Game } from '../hooks/useGames';
import PlatformIcon from './PlatformIcon';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    // Box container to wrap the skeletons and main card with the same styling, it takes childrens as a prop
    <GameCardContainer>
      <Card>
        {/* Game cover image */}
        <Image
          aspectRatio={3 / 2}
          // height='150px'
          src={getCroppedImageUrl(game.background_image)}
        />
        <CardBody>
          {/* Game title */}
          <Heading fontSize='2xl'>{game.name}</Heading>
          <HStack justifyContent='space-between'>
            {/* To display icons of platforms, we will do mapping each platform name to its icon in creating other component */}
            <PlatformIcon
              platforms={game.parent_platforms.map(p => p.platform)}
            />
            {/* Badge (rating score) */}
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
