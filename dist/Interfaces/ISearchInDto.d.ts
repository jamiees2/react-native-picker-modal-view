import { TextInputProps } from 'react-native';
import { ITheme } from './ITheme';
export interface ISearch {
    onClose: () => void;
    onBackRequest?: () => void;
    forceSelect: boolean;
    setText: (text: string) => void;
    searchText: string;
    SearchInputProps?: TextInputProps;
    backButtonDisabled?: boolean;
    theme: ITheme;
}
