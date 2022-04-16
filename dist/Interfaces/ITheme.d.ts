import { ColorValue, ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from "react-native";
interface Assets {
    Close: ImageSourcePropType;
    Down: ImageSourcePropType;
    LeftArrow: ImageSourcePropType;
    Up: ImageSourcePropType;
}
interface CommonStyle {
    BTN_HEIGHT: number;
}
interface SelectBoxStyle {
    container: ViewStyle;
    chooseText: TextStyle;
    downBtn: ImageStyle;
    pressBtn: ViewStyle;
    disabledBtn: ViewStyle;
    disabledTxt: TextStyle;
    disabledImage: ImageStyle;
}
interface ScrollToTopStyle {
    container: ViewStyle;
    upBtn: ImageStyle;
}
interface SearchStyle {
    closeButton: ImageStyle;
    backButton: ImageStyle;
    searchArea: ViewStyle;
    textInput: ViewStyle;
    nonCloseButton: ViewStyle;
    nonBackButton: ViewStyle;
    leftBtn: ViewStyle;
    rightBtn: ViewStyle;
    placeHolderText: {
        color: ColorValue;
    };
}
interface ListItemStyle {
    container: ViewStyle;
    btnContainer: ViewStyle;
    selected: TextStyle;
    itemText: TextStyle;
}
interface AlphabetStyle {
    container: ViewStyle;
    alphabetButton: ViewStyle;
    alphabetText: TextStyle;
    selected: TextStyle;
}
interface ModalStyles {
    container: ViewStyle;
    listArea: ViewStyle;
    keyboardContainer: ViewStyle;
}
export interface ITheme {
    ModalStyles: ModalStyles;
    AlphabetStyle: AlphabetStyle;
    ListItemStyle: ListItemStyle;
    SearchStyle: SearchStyle;
    ScrollToTopStyle: ScrollToTopStyle;
    SelectBoxStyle: SelectBoxStyle;
    CommonStyle: CommonStyle;
    Assets: Assets;
}
export {};
