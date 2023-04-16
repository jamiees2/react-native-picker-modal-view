import { FlatListProps, TextInputProps, ModalProps } from 'react-native';
import { AnimationTypeEnum } from '../Enum';
import { IModalListInDto } from './';
import React from 'react';
declare type ListType = IModalListInDto[];
export interface IModalProps {
    modalAnimationType?: AnimationTypeEnum;
    showAlphabeticalIndex: boolean;
    indexGenerator?: (items: ListType) => string[];
    onClosed: () => void;
    onBackButtonPressed?: () => void;
    onSelected: (selected: IModalListInDto) => IModalListInDto;
    items: ListType;
    alphabeticalIndexChars?: string[];
    keyExtractor?: (key: any, index: number) => string;
    autoGenerateAlphabeticalIndex?: boolean;
    showToTopButton?: boolean;
    onEndReached: () => void;
    removeClippedSubviews: boolean;
    FlatListProps?: FlatListProps<any>;
    selectPlaceholderText: string;
    selected?: IModalListInDto;
    searchPlaceholderText: string;
    SearchInputProps?: TextInputProps;
    ModalProps?: ModalProps;
    autoSort?: boolean;
    disabled: boolean;
    requireSelection: boolean;
    renderListItem?: (selectedItem: IModalListInDto, listItem: IModalListInDto) => JSX.Element;
    renderSelectView?: (disabled: boolean, selected: IModalListInDto, showModal: () => void) => React.ReactElement;
    backButtonDisabled?: boolean;
    renderSearch?: (onClose: () => void, onBack: () => void) => JSX.Element;
    theme?: string;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IModalState {
    modalVisible: boolean;
    searchText: string;
    alphabeticalIndexChars?: string[];
    stickyBottomButton?: boolean;
    selectedAlpha?: string;
    selectedObject?: IModalListInDto;
}
export {};
