import * as React from 'react';
import { IAlphabetsInDto } from '../Interfaces/IAlphabetsInDto';
import { ThemeProps } from '../Interfaces/ITheme';
export declare class AlphabetComponent extends React.PureComponent<IAlphabetsInDto & ThemeProps, {}> {
    static defaultProps: {
        alphabets: string[];
    };
    render(): React.ReactNode;
}
