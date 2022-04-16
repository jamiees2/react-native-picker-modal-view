import { StyleSheet } from 'react-native';
export const SearchStyle = StyleSheet.create({
    closeButton: {
        width: 13,
        height: 13,
    },
    backButton: {
        width: 15,
        height: 15,
    },
    searchArea: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    textInput: {
        flex: 1,
        borderColor: '#333',
        borderWidth: 0.5,
        borderRadius: 5,
        color: '#fff',
        padding: 10,
    },
    nonCloseButton: {
        marginRight: 20,
    },
    nonBackButton: {
        marginLeft: 20,
    },
    leftBtn: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    rightBtn: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    placeHolderText: {
        color: "#dadada"
    },
});
//# sourceMappingURL=SearchStyle.js.map