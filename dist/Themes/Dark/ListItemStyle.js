import { StyleSheet } from 'react-native';
import { CommonStyle } from './CommonStyle';
export const ListItemStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: CommonStyle.BTN_HEIGHT,
        color: '#fff',
    },
    btnContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: 10,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(255,255,255,.05)',
    },
    selected: {
        color: '#fff',
        fontWeight: 'bold',
    },
    itemText: {
        color: '#fff'
    },
});
//# sourceMappingURL=ListItemStyle.js.map