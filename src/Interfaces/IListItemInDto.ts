// Local Imports
import { IModalListInDto } from './IModalListInDto';

export interface IListItemInDto {
	list: IModalListInDto;
	onSelectMethod: (obj: IModalListInDto) => IModalListInDto;
	defaultSelected?: IModalListInDto;
}
