// Global Imports
import { StyleSheet, ViewStyle, TextStyle, ImageStyle, View } from 'react-native';

export const SelectBoxStyle = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		paddingHorizontal: 10,
		paddingVertical: 10,
		position: 'relative',
		borderWidth: 1,
		borderColor: '#616161',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
	} as ViewStyle,
	chooseText: {
		fontWeight: '500',
	} as TextStyle,
	downBtn: {
		width: 10,
		height: 10,
	} as ImageStyle,
	pressBtn: {
		marginVertical: 10,
	} as ViewStyle,
	disabledBtn: {
		borderColor: '#222',
	} as ViewStyle,
	disabledTxt: {
		color: '#222',
	} as TextStyle,
	disabledImage: {
		opacity: 0.2,
	} as ImageStyle,
});
