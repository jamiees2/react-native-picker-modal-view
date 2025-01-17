import { ITheme } from "./ITheme";

export interface IAlphabetsInDto {
	alphabets: string[];
	showAlphabeticalIndex: boolean;
	selectedAlpha?: string;

	setAlphabet: (alphabet: string) => void;
}
