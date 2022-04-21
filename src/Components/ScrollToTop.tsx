// Global Imports
import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';

// Local Imports
import { IScrollToTop } from '@Interfaces';
import { ThemeProps } from './ITheme';

export class ScrollToTopComponent extends React.PureComponent<IScrollToTop & ThemeProps, {}> {
	public render(): JSX.Element {
		const { goToUp, stickyBottomButton, theme} = this.props;
		if (stickyBottomButton) {
			return (
				<TouchableOpacity onPress={() => goToUp()} activeOpacity={0.8} style={theme.ScrollToTopStyle.container}>
					<Image source={theme.Assets.Up} style={theme.ScrollToTopStyle.upBtn} />
				</TouchableOpacity>
			);
		}
		return null

	}
}
