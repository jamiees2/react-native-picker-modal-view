// Global Imports
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Local Import
import { IListItemInDto } from '@Interfaces';
import { ThemeProps } from './ITheme';

export class ListItemComponent extends React.PureComponent<IListItemInDto & ThemeProps, {}> {
	public render(): JSX.Element {
		const { onSelectMethod, defaultSelected, theme, list: { Name } } = this.props;
		return (
			<TouchableOpacity
				style={theme.ListItemStyle.container}
				activeOpacity={0.7}
				onPress={() => onSelectMethod(this.props.list)}
			>
				<View style={theme.ListItemStyle.btnContainer}>
					<Text style={[theme.ListItemStyle.itemText, (defaultSelected && Name === defaultSelected.Name) && theme.ListItemStyle.selected]}>{Name}</Text>
				</View >
			</TouchableOpacity>
		);
	}
}
