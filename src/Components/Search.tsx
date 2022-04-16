// Global Imports
import * as React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

// Local Imports
import { ISearch } from '@Interfaces';

export class SearchComponent extends React.PureComponent<ISearch, {}> {
	public render(): JSX.Element {
		const { SearchInputProps, placeholderTextColor, onClose, setText, forceSelect, searchText, onBackRequest, backButtonDisabled, theme } = this.props;
		return (
			<View style={theme.SearchStyle.searchArea}>
				{
					!backButtonDisabled &&
						this.touchableOpacityButton(onBackRequest, theme.Assets.LeftArrow, theme.SearchStyle.leftBtn, theme.SearchStyle.backButton)
				}
				<TextInput
					placeholder={searchText}
					placeholderTextColor={placeholderTextColor}
					style={[theme.SearchStyle.textInput, forceSelect && theme.SearchStyle.nonCloseButton, backButtonDisabled && theme.SearchStyle.nonBackButton]}
					underlineColorAndroid={'transparent'}
					onChangeText={(text: string) => setText(text)}
					{...SearchInputProps}
				/>
				{!forceSelect &&
					this.touchableOpacityButton(onClose, theme.Assets.Close, theme.SearchStyle.leftBtn, theme.SearchStyle.closeButton)

				}
			</View>
		);
	}
	public touchableOpacityButton(onPress, imgSrc, buttonStyle, imgStyle): JSX.Element {
		return (
			<TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
				<Image source={imgSrc} style={imgStyle} />
			</TouchableOpacity>
		)
	}
}
