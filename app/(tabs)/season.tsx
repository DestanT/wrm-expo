import ParallaxScrollView from '@/components/ParallaxScrollView';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Avatar, Button, Card, ListItem, Text, View } from 'react-native-ui-lib';

const posts = [
  {
    height: 310,
    avatar:
      'https://images.pexels.com/photos/3496994/pexels-photo-3496994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'Jack',
    nickname: '@jackywhite',
    description:
      'Join our live webinar and discover the secrets of successful serverless monitoring.',
    time: '1h',
    link: {
      website: 'helloworld.com',
      description: 'Live Webinar: Secrets of Serverless monitoring. Register Now!',
      thumbnail:
        'https://images.pexels.com/photos/3271010/pexels-photo-3271010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    icons: [
      require('../../assets/icons/magnifying-glass.png'),
      require('../../assets/icons/star-rating.png'),
      require('../../assets/icons/vinyl-disc.png'),
    ],
  },
  // Additional posts...
];

export default function SeasonScreen() {
  const keyExtractor = (item) => item.nickname;

  const renderPost = (post, id) => (
    <View padding-page key={id}>
      <ListItem height={post.height} containerStyle={styles.post}>
        <ListItem.Part left containerStyle={{ justifyContent: 'space-between' }}>
          <Avatar
            source={post.avatar ? { uri: post.avatar } : undefined}
            containerStyle={styles.avatar}
          />
        </ListItem.Part>
        <ListItem.Part middle column>
          <View row centerV>
            <Text text80M>{post.name}</Text>
            <Text grey40>{post.nickname}</Text>
            <Text grey40>{' • ' + post.time}</Text>
          </View>
          <Text>{post.description}</Text>
          {post.link && (
            <Card style={{ marginTop: 10 }} height={200}>
              <Card.Section
                imageSource={{ uri: post.link.thumbnail }}
                imageStyle={{ height: 120 }}
              />
              <View padding-s3>
                <Text grey40>{post.link.website}</Text>
                <Text>{post.link.description}</Text>
              </View>
            </Card>
          )}
          <View row style={{ justifyContent: 'space-between', marginVertical: 10 }}>
            {post.icons &&
              post.icons.map((iconSource, index) => (
                <Button
                  key={index}
                  iconSource={iconSource}
                  iconStyle={styles.icon}
                  backgroundColor={'transparent'}
                />
              ))}
          </View>
        </ListItem.Part>
      </ListItem>
    </View>
  );

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <FlatList
        data={posts}
        renderItem={({ item, index }) => renderPost(item, index)}
        keyExtractor={keyExtractor}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
  },
  avatar: {
    alignSelf: 'flex-start',
    marginRight: 8,
    marginTop: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
