/// <reference types="react" />
import { IModalListInDto } from './';
import { ITheme } from './ITheme';
declare type ListType = IModalListInDto[];
export interface ISelectBoxProps {
    selectedObject?: IModalListInDto;
    openModal: () => void;
    chooseText: string;
    disabled?: boolean;
    renderSelectView?: (disabled: boolean, selected: IModalListInDto, showModal: () => void) => React.ReactElement;
    items: ListType;
    theme: ITheme;
}
export {};
