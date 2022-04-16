// Global Imports
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Local Import
import { IListItemInDto } from '@Interfaces';

export class ListItemComponent extends React.PureComponent<IListItemInDto, {}> {
	public render(): JSX.Element {
		const { onSelectMethod, defaultSelected, theme, list: { Name } } = this.props;
		return (
			<TouchableOpacity
				style={theme.ListItemStyle.container}
				activeOpacity={0.7}
				onPress={() => onSelectMethod(this.props.list)}
			>
				<View style={theme.ListItemStyle.btnContainer}>
					<Text style={[(defaultSelected && Name === defaultSelected.Name) && theme.ListItemStyle.selected]}>{Name}</Text>
				</View >
			</TouchableOpacity>
		);
	}
}
