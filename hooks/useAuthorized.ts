import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function useAuthorized() {
	const [authorized, setAuthorized] = useState(false);

	useEffect(() => {
		const checkAuthorization = async () => {
			// Simulate an async authorization check (e.g., API call)
			const isAuthorized = await AsyncStorage.getItem('authorized');
			setAuthorized(isAuthorized === 'true');
		};
		checkAuthorization();
	}, []);

	return { authorized };
}
