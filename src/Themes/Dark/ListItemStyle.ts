// Global Imports
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Local Imports
import { CommonStyle } from './CommonStyle';

export const ListItemStyle = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		height: CommonStyle.BTN_HEIGHT,
	} as ViewStyle,
	btnContainer: {
		flex: 1,
		marginLeft: 15,
		marginRight: 10,
		paddingVertical: 15,
		borderBottomWidth: 0.5,
		borderBottomColor: 'rgba(255,255,255,.05)',
	} as ViewStyle,
	selected: {
		color: '#fff',
		fontWeight: 'bold',
	} as TextStyle,
});
