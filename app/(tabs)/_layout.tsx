import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarStyle: Platform.select({
					ios: {
						backgroundColor: '#FFFFFF',
						borderTopColor: '#E5E5E7',
						borderTopWidth: 1,
					},
					default: {
						backgroundColor: '#FFFFFF',
						borderTopColor: '#E5E5E7',
						borderTopWidth: 1,
					},
				}),
			}}>
			<Tabs.Screen
				name='home'
				options={{
					title: 'Home',
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <Ionicons size={28} name='home-outline' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='conversations'
				options={{
					title: 'Conversations',
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name='inbox-full-outline' color={color} />,
				}}
			/>
		</Tabs>
	);
}
