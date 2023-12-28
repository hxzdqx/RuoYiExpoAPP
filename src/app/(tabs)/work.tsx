import { Image, Text } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons'; // https://ionic.io/ionicons

import { View } from '@/components/Themed';

const images = [
  require('@/assets/images/banner/banner01.jpg'),
  require('@/assets/images/banner/banner02.jpg'),
  require('@/assets/images/banner/banner03.jpg'),
];

export default function Page() {
  /**
   * 点击事件
   */
  function gridClick(index: number) {
    console.log('click', index);
  }
  return (
    <View style={styles.container}>
      {/* 轮播图 */}
      <View style={{ height: 150 }}>
        <Swiper height={150} style={styles.wrapper} loop autoplay autoplayTimeout={5}>
          {images.map((item, index) => (
            <Image
              key={index}
              source={item}
              style={styles.img}
              PlaceholderContent={<Text>Loading...</Text>}
            />
          ))}
        </Swiper>
      </View>
      <View style={styles.section}>
        <View style={styles.chunk} />
        <Text>系统管理</Text>
      </View>
      {/* 宫格布局 */}
      <View style={styles.grid}>
        <View style={styles.cell}>
          <Icon name="person" size={30} onPress={() => gridClick(0)} />
          <Text>用户管理</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="people-sharp" size={30} />
          <Text>角色管理</Text>
        </View>

        <View style={styles.cell}>
          <Icon name="color-palette-outline" size={30} />
          <Text>菜单管理</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="settings-outline" size={30} />
          <Text>部门管理</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="heart-outline" size={30} />
          <Text>岗位管理</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="reorder-four-outline" size={30} />
          <Text>字典管理</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="cog-outline" size={30} />
          <Text>参数设置</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="chatbox-ellipses-outline" size={30} />
          <Text>通知公告</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="wallet-outline" size={30} />
          <Text>日志管理</Text>
        </View>
        <View style={styles.cell} />
        <View style={styles.cell} />
        <View style={styles.cell} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapper: {},
  slide: {
    flex: 1,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#92BBD9',
  },
  img: {
    width: '100%',
    height: 150,
  },
  section: {
    flexDirection: 'row',
    marginTop: 15,
  },
  chunk: {
    width: 4,
    height: 15,
    backgroundColor: '#2979ff',
    borderRadius: 3,
    margin: 3,
    marginLeft: 5,
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 15,
    // 一行4个
  },
  cell: {
    width: '25%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
