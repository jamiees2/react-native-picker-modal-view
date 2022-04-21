import { IModalListInDto } from '@Interfaces';
import { ITheme } from './ITheme';

type ListType = IModalListInDto[];

export interface ISelectBoxProps {
	selectedObject?: IModalListInDto;
	openModal: () => void;
	chooseText: string;
	disabled?: boolean;
	renderSelectView?: (disabled: boolean, selected: IModalListInDto, showModal: () => void) => React.ReactElement
	items: ListType;
}
