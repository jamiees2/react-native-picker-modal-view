import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
export class AlphabetComponent extends React.PureComponent {
    render() {
        const { alphabets, setAlphabet, selectedAlpha, showAlphabeticalIndex, theme } = this.props;
        if (showAlphabeticalIndex) {
            return (React.createElement(View, { style: theme.AlphabetStyle.container },
                React.createElement(ScrollView, { showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "always" }, alphabets.map((a, index) => React.createElement(TouchableOpacity, { onPress: () => setAlphabet(a), key: index, style: theme.AlphabetStyle.alphabetButton },
                    React.createElement(Text, { style: [theme.AlphabetStyle.alphabetText, selectedAlpha === a && theme.AlphabetStyle.selected] }, a))))));
        }
        return null;
    }
}
AlphabetComponent.defaultProps = {
    alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
};
//# sourceMappingURL=Alphabet.js.map