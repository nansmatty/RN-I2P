import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<SafeAreaView>
			<View className='flex h-full justify-center items-center'>
				<Text>Index</Text>
			</View>
		</SafeAreaView>
	);
}
