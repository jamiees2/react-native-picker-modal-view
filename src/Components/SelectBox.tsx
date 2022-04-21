// Global Imports
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Local Imports
import { ISelectBoxProps } from '@Interfaces';
import { ThemeProps } from './ITheme';

export class SelectBoxComponent extends React.PureComponent<ISelectBoxProps & ThemeProps, {}> {
	public render(): JSX.Element {
		const { openModal, selectedObject, chooseText, disabled, renderSelectView, items, theme } = this.props;
		const selectViewIsDisabled = (disabled || !items || items.length === 0);
		if (renderSelectView) {
			return (renderSelectView(selectViewIsDisabled, selectedObject, openModal.bind(this)))
		}
		return (
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => openModal()}
				style={[theme.SelectBoxStyle.pressBtn, selectViewIsDisabled && theme.SelectBoxStyle.disabledBtn]}
			>
				<View style={theme.SelectBoxStyle.container}>
					<Text style={[selectViewIsDisabled ? theme.SelectBoxStyle.disabledTxt : theme.SelectBoxStyle.chooseText]}>{
						(selectedObject && selectedObject.Name) ? selectedObject.Name : chooseText
					}</Text>
					<Image source={theme.Assets.Down}
						style={[theme.SelectBoxStyle.downBtn, selectViewIsDisabled && theme.SelectBoxStyle.disabledImage]}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}
