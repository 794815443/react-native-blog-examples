import React from 'react';
import {FlatList, View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';

export const videoList = [
  "http://wvideo.spriteapp.cn/video/2016/0328/56f8ec01d9bfe_wpd.mp4",
  "http://bbt.lcedu.net:8810/SD/2017qingdao/xiaoxueshuxue/grade1/1.mp4",
  "http://bbt.lcedu.net:8810/SD/2017qingdao/xiaoxueEnglish/grade1/b/1.mp4",
  "http://bbt.lcedu.net:8810/SD/2017qingdao/xiaoxueEnglish/grade2/b/1.mp4",
  "http://bbt.lcedu.net:8810/SD/2017qingdao/xiaoxueshuxue/grade2/1.mp4",
  "http://bbt.lcedu.net:8810/SD/2017qingdao/xiaoxueEnglish/grade5/b/1.mp4",
  "http://bbt.lcedu.net:8810/SD/2017qingdao/xiaoxueshuxue/grade5/1.mp4",
  "http://bbt.lcedu.net:8810/SD/2017qingdao/xiaoxueEnglish/grade3/a/1.mp4"
];

export default class VideoListScreen extends React.Component {
  
  static navigationOptions = {
    headerTitle: '视频列表'
  };
  
  render() {
    return (
      <FlatList
        data={videoList}
        renderItem={this._renderRow}
        keyExtractor={(item) => item}
      />
    )
  }
  
  _renderRow = (item) => {
    let url = item.item;
    return (
      <TouchableHighlight underlayColor={'#dcdcdc'} onPress={() => {this.itemSelected(url)}}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>视频{item.index+1}</Text>
          <Image source={require('../image/icon_right.png')} style={styles.rightIcon}/>
        </View>
      </TouchableHighlight>
    )
  };
  
  itemSelected(url) {
    this.props.navigation.navigate('VideoPlay', {url: url});
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection:'row',
    alignItems:'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  title: {
    fontSize: 16,
    color: '#000',
    flex: 1
  },
  title_active: {
    color: '#00c08d'
  },
  rightIcon: {
    width: 15,
    height: 15
  }
});