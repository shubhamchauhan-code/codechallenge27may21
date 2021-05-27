import React from 'react'
import 'react-native-gesture-handler';
import {Image} from 'react-native'
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

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

class AppNavigation extends React.Component {

    tabNavigation() {
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
                    iconName = focused ? ICONS.SearchA : ICONS.SearchIn;
                  }else if (route.name === 'Search') {
                    iconName = focused ? ICONS.SearchA : ICONS.SearchIn;
                  }else if (route.name === 'Profile') {
                    iconName = focused ? ICONS.ProfileA : ICONS.ProfileIn;
                  }
      
                  return <Image source={iconName} style={{height: 18, width: 18}}/>;
                },
              })}
              tabBarOptions={{
                activeTintColor: COLORS.BlackColor,
                inactiveTintColor: 'gray',
                activeBackgroundColor:COLORS.PrimaryColor,
                labelStyle: {fontSize: Dimension.normalize(12)}
              }}
            >
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Posts" component={Posts} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        )
    }

    render() {
        return (
            <NavigationContainer>
                <MainStack.Navigator initialRouteName="Login">

                    <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <MainStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                    <MainStack.Screen name="TabNavigation" component={this.tabNavigation} options={{ headerShown: false }} />
                    <MainStack.Screen name="UserDetails" component={UserDetails} options={{ headerShown: false }} /> 
            
            </MainStack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigation;