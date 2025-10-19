import * as React from 'react';
import { ISearch } from '../Interfaces/ISearchInDto';
import { ThemeProps } from '../Interfaces/ITheme';
export declare class SearchComponent extends React.PureComponent<ISearch & ThemeProps, {}> {
    render(): React.ReactNode;
    touchableOpacityButton(onPress: any, imgSrc: any, buttonStyle: any, imgStyle: any): React.ReactNode;
}
