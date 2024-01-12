import React from 'react';
import { MotiView } from 'moti';
import { SkeletonProps } from './types';
import { SkeletonContainer } from './styles';

export const Skeleton  = ({
  height = 20,
  width = '100%',
  borderRadius = 4,
  backgroundColor = '#C4C4C4',
}:SkeletonProps) => {
  return (
    <SkeletonContainer height={height} width={width} borderRadius={borderRadius} backgroundColor={backgroundColor}>
      <MotiView
        from={{ opacity: 0.1 }}
        animate={{ opacity: 0.6 }}
        transition={{
          type: 'timing',
          loop: true,
          duration: 1000,
        }}
      />
    </SkeletonContainer>
  );
};

export default Skeleton;
