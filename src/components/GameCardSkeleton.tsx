import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import GameCardContainer from './GameCardContainer';

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton aspectRatio={16 / 9} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
