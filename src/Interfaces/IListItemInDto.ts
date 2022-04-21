// Local Imports
import { IModalListInDto } from '@Interfaces';
import { ITheme } from './ITheme';

export interface IListItemInDto {
	list: IModalListInDto;
	onSelectMethod: (obj: IModalListInDto) => IModalListInDto;
	defaultSelected?: IModalListInDto;
}
