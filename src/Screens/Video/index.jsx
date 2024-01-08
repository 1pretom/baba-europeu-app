import * as React from "react";
import { Button } from "react-native";
import { ResizeMode } from "expo-av";
import * as S from "./styles";
import { useRef, useState, useEffect } from "react";
import { videoList } from "./constants";
export const WatchVideos = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  const playNextVideo = () => {
    if (currentVideoIndex < videoList.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  useEffect(() => {
    checkLastSeconds(status);
  }, [status]);
  const checkLastSeconds = (status) => {
    const videoDuration = status.durationMillis;
    const currentPosition = status.positionMillis;

    if (videoDuration - currentPosition <= 10000) {
      setShowNextButton(true);
    } else {
      setShowNextButton(false);
    }
  };

  return (
    <S.Container>
      <S.VideoContent
        ref={video}
        source={{
          uri: videoList[currentVideoIndex],
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <S.Buttons>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() => {
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync();
          }}
        />
        {showNextButton && (
          <Button title="Next Video" onPress={playNextVideo} />
        )}
      </S.Buttons>
    </S.Container>
  );
};
