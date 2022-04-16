import { IModalListInDto } from './';
import { ITheme } from './ITheme';
export interface IListItemInDto {
    list: IModalListInDto;
    onSelectMethod: (obj: IModalListInDto) => IModalListInDto;
    defaultSelected?: IModalListInDto;
    theme: ITheme;
}
