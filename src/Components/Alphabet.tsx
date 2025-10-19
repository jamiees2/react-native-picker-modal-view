// Global Imports
import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

// Local Imports
import { IAlphabetsInDto } from '../Interfaces/IAlphabetsInDto';
import { ThemeProps } from '../Interfaces/ITheme';

export class AlphabetComponent extends React.PureComponent<IAlphabetsInDto & ThemeProps, {}> {

	public static defaultProps = {
		// tslint:disable-next-line: max-line-length
		alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	};

	public render(): React.ReactNode {
		const { alphabets, setAlphabet, selectedAlpha, showAlphabeticalIndex, theme} = this.props;

		if (showAlphabeticalIndex) {
			return (
				<View style={theme.AlphabetStyle.container}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						keyboardShouldPersistTaps="always">
						{
							alphabets.map((a: string, index: number) =>
								<TouchableOpacity onPress={() => setAlphabet(a)} key={index}
									style={theme.AlphabetStyle.alphabetButton}>
									<Text
										style={[theme.AlphabetStyle.alphabetText, selectedAlpha === a && theme.AlphabetStyle.selected]}
									>
										{a}
									</Text>
								</TouchableOpacity>,
							)
						}
					</ScrollView>
				</View>

			);
		}
		return null;

	}

}
