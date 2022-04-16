import { ITheme } from "./ITheme";

export interface IModalListInDto<T = object> {
	Id: string | number;
	Name: string;
	Value: string | T;
	[key: string]: any;
	theme: ITheme
}
