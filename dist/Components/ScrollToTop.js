import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
export class ScrollToTopComponent extends React.PureComponent {
    render() {
        const { goToUp, stickyBottomButton, theme } = this.props;
        if (stickyBottomButton) {
            return (React.createElement(TouchableOpacity, { onPress: () => goToUp(), activeOpacity: 0.8, style: theme.ScrollToTopStyle.container },
                React.createElement(Image, { source: theme.Assets.Up, style: theme.ScrollToTopStyle.upBtn })));
        }
        return null;
    }
}
//# sourceMappingURL=ScrollToTop.js.map