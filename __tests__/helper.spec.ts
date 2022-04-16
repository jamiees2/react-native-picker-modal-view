// Global Imports
import * as React from 'react';
import { generateAlphabet, getFilteredData, getIndex, trCompare } from '../src/Helpers/index';

describe('Helper', () => {
	describe('getIndex', () => {
		it('should return index of item list with autosort', () => {
			const alphabets = 'F';

			const items = [
				{
					Id: 1,
					Name: 'Foo',
					Value: 'Foo',
					key: 'Foo'
				},
				{
					Id: 2,
					Name: 'BarFoo',
					Value: 'BarFoo',
					key: 'BarFoo'
				}
			]

			const autoSort = true;
			const searchText = 'Foo';

			expect(getIndex(alphabets, items, autoSort, searchText)).toEqual(1);
		});
		it('should return index of item list without autosort', () => {
			const alphabets = 'F';

			const items = [
				{
					Id: 1,
					Name: 'Foo',
					Value: 'Foo',
					key: 'Foo'
				},
				{
					Id: 2,
					Name: 'BarFoo',
					Value: 'BarFoo',
					key: 'BarFoo'
				}
			]

			const autoSort = false;
			const searchText = 'Foo';

			expect(getIndex(alphabets, items, autoSort, searchText)).toEqual(0);
		});
	});

	describe('getFilteredData', () => {
		it('should return filtered data without autosort', () => {
			const items = [
				{
					Id: 1,
					Name: 'Foo',
					Value: 'Foo',
					key: 'Foo'
				},
				{
					Id: 2,
					Name: 'BarFoo',
					Value: 'BarFoo',
					key: 'BarFoo'
				}
			]

			const autoSort = false;
			const searchText = 'Foo';

			expect(getFilteredData(items, autoSort, searchText)).toEqual(items);
		});
		it('should return filtered data with autosort', () => {
			const items = [
				{
					Id: 2,
					Name: 'BarFoo',
					Value: 'BarFoo',
					key: 'BarFoo'
				},
				{
					Id: 1,
					Name: 'Foo',
					Value: 'Foo',
					key: 'Foo'
				}

			]

			const autoSort = true;
			const searchText = 'Foo';

			expect(getFilteredData(items, autoSort, searchText)).toEqual(items);
		});
	});

	describe('generateAlphabet', () => {
		it(' should return Alphabet with sorting language', () => {
			const items = [
				{
					Id: 1,
					Name: 'Foo',
					Value: 'Foo',
					key: 'Foo'
				},
				{
					Id: 2,
					Name: 'BarFoo',
					Value: 'BarFoo',
					key: 'BarFoo'
				}
			];

			expect(generateAlphabet(items)).toEqual(['B', 'F']);
		});
	})
});
