import * as React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
export class SearchComponent extends React.PureComponent {
    render() {
        const { SearchInputProps, onClose, setText, forceSelect, searchText, onBackRequest, backButtonDisabled, theme } = this.props;
        return (React.createElement(View, { style: theme.SearchStyle.searchArea },
            !backButtonDisabled &&
                this.touchableOpacityButton(onBackRequest, theme.Assets.LeftArrow, theme.SearchStyle.leftBtn, theme.SearchStyle.backButton),
            React.createElement(TextInput, Object.assign({ placeholder: searchText, placeholderTextColor: theme.SearchStyle.placeHolderText.color, style: [theme.SearchStyle.textInput, forceSelect && theme.SearchStyle.nonCloseButton, backButtonDisabled && theme.SearchStyle.nonBackButton], underlineColorAndroid: 'transparent', onChangeText: (text) => setText(text) }, SearchInputProps)),
            !forceSelect &&
                this.touchableOpacityButton(onClose, theme.Assets.Close, theme.SearchStyle.leftBtn, theme.SearchStyle.closeButton)));
    }
    touchableOpacityButton(onPress, imgSrc, buttonStyle, imgStyle) {
        return (React.createElement(TouchableOpacity, { onPress: () => onPress(), style: buttonStyle },
            React.createElement(Image, { source: imgSrc, style: imgStyle })));
    }
}
//# sourceMappingURL=Search.js.map