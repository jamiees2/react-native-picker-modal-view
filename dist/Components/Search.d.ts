import * as React from 'react';
import { ISearch } from '../Interfaces';
import { ThemeProps } from './ITheme';
export declare class SearchComponent extends React.PureComponent<ISearch & ThemeProps, {}> {
    render(): JSX.Element;
    touchableOpacityButton(onPress: any, imgSrc: any, buttonStyle: any, imgStyle: any): JSX.Element;
}
