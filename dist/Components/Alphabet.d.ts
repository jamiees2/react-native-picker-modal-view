import * as React from 'react';
import { IAlphabetsInDto } from '../Interfaces';
import { ThemeProps } from './ITheme';
export declare class AlphabetComponent extends React.PureComponent<IAlphabetsInDto & ThemeProps, {}> {
    static defaultProps: {
        alphabets: string[];
    };
    render(): JSX.Element;
}
