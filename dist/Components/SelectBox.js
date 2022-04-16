import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
export class SelectBoxComponent extends React.PureComponent {
    render() {
        const { openModal, selectedObject, chooseText, disabled, renderSelectView, items, theme } = this.props;
        const selectViewIsDisabled = (disabled || !items || items.length === 0);
        if (renderSelectView) {
            return (renderSelectView(selectViewIsDisabled, selectedObject, openModal.bind(this)));
        }
        return (React.createElement(TouchableOpacity, { activeOpacity: 0.7, onPress: () => openModal(), style: [theme.SelectBoxStyle.pressBtn, selectViewIsDisabled && theme.SelectBoxStyle.disabledBtn] },
            React.createElement(View, { style: theme.SelectBoxStyle.container },
                React.createElement(Text, { style: [selectViewIsDisabled ? theme.SelectBoxStyle.disabledTxt : theme.SelectBoxStyle.chooseText] }, (selectedObject && selectedObject.Name) ? selectedObject.Name : chooseText),
                React.createElement(Image, { source: theme.Assets.Down, style: [theme.SelectBoxStyle.downBtn, selectViewIsDisabled && theme.SelectBoxStyle.disabledImage] }))));
    }
}
//# sourceMappingURL=SelectBox.js.map