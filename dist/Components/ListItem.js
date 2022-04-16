import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
export class ListItemComponent extends React.PureComponent {
    render() {
        const { onSelectMethod, defaultSelected, theme, list: { Name } } = this.props;
        return (React.createElement(TouchableOpacity, { style: theme.ListItemStyle.container, activeOpacity: 0.7, onPress: () => onSelectMethod(this.props.list) },
            React.createElement(View, { style: theme.ListItemStyle.btnContainer },
                React.createElement(Text, { style: [theme.ListItemStyle.itemText, (defaultSelected && Name === defaultSelected.Name) && theme.ListItemStyle.selected] }, Name))));
    }
}
//# sourceMappingURL=ListItem.js.map