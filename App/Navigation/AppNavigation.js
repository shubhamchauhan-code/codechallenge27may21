import React from 'react'
import 'react-native-gesture-handler';
import { Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ApprovedFoodList from '../Containers/ApprovedFoodList';
import Login from '../Containers/Auth/Login';
import Signup from '../Containers/Auth/Signup';
import { COLORS } from '../Utils/Colors';
import Dimension from '../Utils/Dimension';
import { ICONS } from '../Utils/Images';
import Home from '../Containers/Home';
import UserDetails from '../Containers/UserDetails';
import Posts from '../Containers/Posts';
import Profile from '../Containers/Profile';
import Search from '../Containers/Search';
import { connect } from 'react-redux';
import Loading from '../Containers/Loading';
import PostDetail from '../Containers/PostDetail';
import ChangePassword from '../Containers/ChangePassword';

const AuthNavigator = createStackNavigator();
const MainStack = createStackNavigator();
const PostStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();


const tabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? ICONS.HomeA
              : ICONS.HomeIn;
          } else if (route.name === 'Posts') {
            iconName = focused ? ICONS.PostA : ICONS.PostIn;
          } else if (route.name === 'Search') {
            iconName = focused ? ICONS.SearchA : ICONS.SearchIn;
          } else if (route.name === 'Profile') {
            iconName = focused ? ICONS.ProfileA : ICONS.ProfileIn;
          }
          return <Image source={iconName} style={{ height: 18, width: 18 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.BlackColor,
        inactiveTintColor: 'gray',
        activeBackgroundColor: COLORS.PrimaryColor,
        labelStyle: { fontSize: Dimension.normalize(12) }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posts" component={postStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="profileStack" component={profileStack} />
    </Tab.Navigator>
  )
}

const postStack = () => {
  return (
    <PostStack.Navigator>
      <PostStack.Screen name="Posts" component={Posts} options={{ headerShown: false }} />
      <PostStack.Screen name="PostDetail" component={PostDetail} options={{ headerShown: false }} />
    </PostStack.Navigator>)
}

const profileStack = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <ProfileStack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
    </ProfileStack.Navigator>)
}

const AppNavigation = (props) => {

  var userData = props.userData;

  return (
    <SafeAreaView style={{ flex: 1, }}>
      {
        userData.loading ?
          <Loading />
          :
          <NavigationContainer>

            {
              userData.login ?
                <MainStack.Navigator>
                  <MainStack.Screen name="TabNavigation" component={tabNavigation} options={{ headerShown: false }} />
                  <MainStack.Screen name="UserDetails" component={UserDetails} options={{ headerShown: false }} />

                </MainStack.Navigator>
                :
                <AuthNavigator.Navigator initialRouteName="Login">
                  <AuthNavigator.Screen name="Login" component={Login} options={{ headerShown: false }} />
                  <AuthNavigator.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                  <MainStack.Screen name="TabNavigation" component={tabNavigation} options={{ headerShown: false }} />
                </AuthNavigator.Navigator>
            }


          </NavigationContainer>
      }
    </SafeAreaView>
  );

}

const mapStateToProps = (state) => ({
  userData: state.userReducer,
});

export default connect(mapStateToProps)(AppNavigation);