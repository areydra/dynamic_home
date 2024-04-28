import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import homeStore from '../store/reducers/homeStore';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const height = Dimensions.get('window').height;

const ContentShimmer = () => {
  const opacity = useSharedValue(1);
  const shouldShowHomeComponent = homeStore().homeState.shouldShowHomeComponent;

  const [shouldShowShimmer, setShouldShowShimmer] = useState<boolean>(true);

  useEffect(() => {
    if (shouldShowHomeComponent) {
      fadeOut();
    }
  }, [shouldShowHomeComponent]);

  const fadeOut = () => { 
      opacity.value = withTiming(0, { 
          duration: 150, 
          easing: Easing.linear, 
      }, () => {
        runOnJS(setShouldShowShimmer)(false);
      }); 
  }; 

  const animatedStyle = useAnimatedStyle(() => { 
      return { 
        height: height - 260,
        backgroundColor: Colors.white,
        opacity: opacity.value,
      }; 
  });

  return shouldShowShimmer ? (
    <Animated.View style={animatedStyle}>
      <ShimmerPlaceHolder
        visible={false}
        style={styles.shimmer}
      />
      <ShimmerPlaceHolder
        visible={false}
        style={styles.shimmer}
      />
      <ShimmerPlaceHolder
        visible={false}
        style={styles.shimmer}
      />
      <ShimmerPlaceHolder
        visible={false}
        style={styles.shimmer}
      />
      <ShimmerPlaceHolder
        visible={false}
        style={styles.shimmer}
      />
    </Animated.View>
  ) : (
    <React.Fragment/>
  );
};

const styles = StyleSheet.create({
  shimmer: {
    width: '100%',
    marginBottom: 4,
    height: 130,
  },
});

export default ContentShimmer;
