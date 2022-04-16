import { ITheme } from "./ITheme";

export interface IScrollToTop {
	stickyBottomButton: boolean;

	goToUp: () => void;
	theme: ITheme
}
