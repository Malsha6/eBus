import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import {
    EditUserProfileScreen,
    UserAccountScreen,
    ChangePasswordScreen,
    SetNewPasswordScreen,
    UserProfileScreen,
} from '../screens/Passenger';

import WalletNavigator from './WalletNavigator';
import Edit from '../screens/Passenger/Account/Edit';
import Profile from '../screens/Passenger/Account/Profile';
import Password from '../screens/Passenger/Account/Password'


const Stack = createStackNavigator();

const ProfileNavigator = () => (

    <Stack.Navigator>

        <Stack.Screen
            name="UserProfile"
            component={UserAccountScreen}
            options={{
                headerShown: false,
                headerLeft: null,
                title: 'User Profile'
            }}
        />

        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                headerShown: false,
                headerLeft: null,
                title: 'Profile'
            }}
        />

        <Stack.Screen
            name="EditUserProfile"
            component={Edit}
            options={{
                headerShown: true,
                headerLeft: null,
                title: 'Edit Profile'
            }}
        />

        <Stack.Screen
            name="SetNewPassword"
            component={SetNewPasswordScreen}
            options={{
                headerShown: false,
                headerLeft: null,
                title: 'Set New Password'
            }}
        />

        <Stack.Screen
            name="ChangePassword"
            component={Password}
            options={{
                headerShown: true,
                headerLeft: null,
                title: 'Change Password'
            }}
        />

        <Stack.Screen
            name="userWallet"
            component={WalletNavigator}
            options={{
                headerShown: false,
                headerLeft: null,
                title: 'My Wallet'
            }}
        />

    </Stack.Navigator>

)

export default ProfileNavigator;