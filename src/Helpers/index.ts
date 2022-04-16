import { IModalListInDto } from '@Interfaces';

export const generateAlphabet = (items: IModalListInDto[]): Array<string> => {
	const singularAlpha = [];
	items.map((x: IModalListInDto) => {
		if (singularAlpha.indexOf(x.Name.charAt(0)) === -1) {
			singularAlpha.push(x.Name.charAt(0));
		}
	});

	return singularAlpha.sort((a, b) => a.localeCompare(b));
}

export const getIndex = (alphabet: string, items: IModalListInDto[], autoSort: boolean, searchText: string): number => {
	const list = getFilteredData(items, autoSort, searchText);


	const findIndex = list.findIndex((x: IModalListInDto) => {
		return x.Name.charAt(0) === alphabet;
	});

	return findIndex;
}

export const getFilteredData = (items: IModalListInDto[], autoSort: boolean, searchText: string): IModalListInDto[] => {
	if (autoSort) {
		items.sort((a, b) => a.Name.localeCompare(b.Name));
	}
	return items.filter((l: IModalListInDto) => l.Name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1);
}
