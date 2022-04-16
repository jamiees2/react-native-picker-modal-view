// Global Imports
import { ColorValue, TextInputProps } from 'react-native';
import { ITheme } from './ITheme';

export interface ISearch {
	placeholderTextColor: ColorValue;
	onClose: () => void;
	onBackRequest?: () => void;
	forceSelect: boolean;
	setText: (text: string) => void;
	searchText: string;
	SearchInputProps?: TextInputProps;
	backButtonDisabled?: boolean
	theme: ITheme
}
