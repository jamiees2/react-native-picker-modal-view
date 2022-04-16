import { IModalListInDto } from '../Interfaces';
export declare const generateAlphabet: (items: IModalListInDto[]) => Array<string>;
export declare const getIndex: (alphabet: string, items: IModalListInDto[], autoSort: boolean, searchText: string) => number;
export declare const getFilteredData: (items: IModalListInDto[], autoSort: boolean, searchText: string) => IModalListInDto[];
