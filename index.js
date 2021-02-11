import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

const data = [
  'https://fsb.zobj.net/crop.php?r=HpG4T-6TbzJET0HaK0eOoDp7wmLDnmB4iMcxpXwSHZIoigkFZrRH7Gcznw8E-WB5Rx2cJq6Rk6uaLTdrwTMPRXb6qPD1JtaE6HN86L9bsQ2vQpHnBeaF3_jDMedQg2HeeKc_HgZYfzkB1vrR',
  'https://fsb.zobj.net/crop.php?r=a-cj8RhOBSKo137QuNSLx3Y8XhfNdg4JRRoFWufdRSHozbe6LmfvZjt8YRwouyZkEC7VIhE7KqB8FvtUEqTcSzTR_Ad_vQFY4XSVxIhBSkm7fKMsXcnYH6S2USnojZqfzQyFBezwWXldEAxY',
  'https://fsb.zobj.net/crop.php?r=__ugLYV9Dbm0VkoGpSz0j58KuHxr6j11P4SmkCAYPH_NG7jUa6f9kJQOw9HOHchmBvDddxurhI7mTs72PaRKphz_lT-W0lqzwkn4vDAjaVziq_8FdBmeATE2F_PmtcQHmf9KKXVjnpnS3G5-',
  'https://fsb.zobj.net/crop.php?r=BjFqMSberov5G9PZu-8QT8s5QqyJbns5HPOWIy_I3gYm2H6KBJCbP4KIvtrtfp9xhQu16M7Qz59--_7DUmjXExZyZjfneyuq6YmGg8Ikl4QYIVYeVMTkimPtMj0VxYON8rOjHb_nzCA7HzCz',
  'https://fsb.zobj.net/crop.php?r=bKBYYqsdFzzsPGDJJnxfPIjMdUgOR0WsqoQb4-T5b1h_WB4uWJ2Cq4bANr5qRxqFacym8ZkTcMAE6JyVpFrnGrf6dlGUiTGXp_WMdtsFWwGVRH0151Vafczy1G9igFkp37zFJ5n94VhR4mH5',
  'https://fsa.zobj.net/crop.php?r=UnwYYIGyLfMdmqdxs45QLShMHpVxd_FoHv2O_WnISqVCk_ptkDsbdLfAUTOCuo7cwSQICXWwje6Kd0mh_phqys9UsHBMpRknXVxDbt0MTeNxTHNYXwIPGCnvENEhkLAnMJ_Kbv7mkOIH0k2D',
  'https://fsa.zobj.net/crop.php?r=juGphS91a7omtrE2a0bR9-O1lraMQskBzbgqUDZ4FjyrdGsotn2e97PWESecaOgOmNMUi57LnL7pWVM8marVTYgO2dZHjRt-_H0ANiT-3C_tsLNo5yeVjbeNwFpQapZ4SPrdH-8JXz21jA9E',
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {data?.map((img, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={index}
              source={{uri: img}}
              style={[StyleSheet.absoluteFillObject, {opacity}]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        pagingEnabled
        horizontal
        data={data}
        renderItem={({item, index}) => (
          <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{
                width: imageW,
                height: imageH,
                resizeMode: 'cover',
                borderRadius: 16,
              }}
              source={{uri: item}}
            />
          </View>
        )}
        keyExtractor={(key) => key}
      />
    </View>
  );
};
