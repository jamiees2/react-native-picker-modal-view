// Global Imports
import * as React from 'react';
import { Modal, View, FlatList, KeyboardAvoidingView, NativeSyntheticEvent, NativeScrollEvent, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Local Imports
import { AlphabetComponent } from './Alphabet';
import { ListItemComponent } from './ListItem';
import { SearchComponent } from './Search';
import { ScrollToTopComponent } from './ScrollToTop';
import { SelectBoxComponent } from './SelectBox';
import { IModalProps, IModalState } from '../Interfaces/IModalProps';
import { IModalListInDto } from '../Interfaces/IModalListInDto';
import { ITheme } from '../Interfaces/ITheme';
import Themes from '../Themes'
import { generateAlphabet, getFilteredData, getIndex } from '../Helpers';
export class ModalComponent extends React.PureComponent<IModalProps, IModalState> {

	private flatListRef = null;
	private numToRender: number = 20;

	public state: IModalState = {
		modalVisible: false,
		searchText: '',
		stickyBottomButton: false,
		selectedAlpha: null,
		selectedObject: {} as IModalListInDto,
	};

	public static defaultProps = { 
		showToTopButton: true, 
		modalAnimationType: 'slide', 
		showAlphabeticalIndex: false, 
		autoGenerateAlphabeticalIndex: false, 
		removeClippedSubviews: false, 
		selectPlaceholderText: 'Choose one...', 
		searchPlaceholderText: 'Search...', 
		autoSort: false, 
		items: [], 
		disabled: false, 
		requireSelection: false,
		open: null,
		setOpen: null,
		theme: Themes.default,
	};
	private viewabilityConfig: { minimumViewTime: number; waitForInteraction: boolean; viewAreaCoveragePercentThreshold: number; };

	static getDerivedStateFromProps(props: Readonly<IModalProps>, state: Readonly<IModalState>): IModalState | null {
		if ((props.open ?? null !== null) && state.modalVisible !== props.open) {
			return {
				...state,
				modalVisible: props.open
			}
		}
		return null
	}

	constructor(props: IModalProps) {
		super(props);
		this._onViewableItemsChanged = this._onViewableItemsChanged.bind(this);
		this.viewabilityConfig = {
			minimumViewTime: 500,
			waitForInteraction: true,
			viewAreaCoveragePercentThreshold: 95
		}
	}
	private _clearComponent(): void {
		this.setState({
			stickyBottomButton: false,
			searchText: '',
			selectedAlpha: null,
		});
	}

	public clearComponent(): void {
		this._clearComponent();
	}

	public componentDidMount(): void {
		const { autoGenerateAlphabeticalIndex, alphabeticalIndexChars, indexGenerator, items } = this.props;
		if (indexGenerator) {
			this.setState({ alphabeticalIndexChars: indexGenerator(items) });
		} else if (autoGenerateAlphabeticalIndex) {
			this.setState({ alphabeticalIndexChars: generateAlphabet(items) });
		} else if (alphabeticalIndexChars) {
			this.setState({
				alphabeticalIndexChars,
			});
		}
	}

	private _setOpen(open: boolean): void {
		const {setOpen} = this.props;
		if ((setOpen ?? null) !== null) {
			setOpen(open)
		}
		this.setState({
			modalVisible: open,
		});
	}

	private _openModal(): void {
		const { items, autoGenerateAlphabeticalIndex, disabled } = this.props;
		if (autoGenerateAlphabeticalIndex) {
			this.setState({ alphabeticalIndexChars: generateAlphabet(items) });
		}

		if (items.length > 0 && !disabled) {
			this._setOpen(true)
		}
	}

	public openModal(): void {
		this._openModal();
	}

	public render(): React.ReactNode {
		const { autoSort, modalAnimationType, theme: themeName, showAlphabeticalIndex, keyExtractor, showToTopButton, onEndReached, removeClippedSubviews, FlatListProps, selectPlaceholderText, searchPlaceholderText, SearchInputProps, selected, disabled, items, requireSelection, renderSelectView, ModalProps, backButtonDisabled, renderSearch } = this.props;

		const { modalVisible, alphabeticalIndexChars, stickyBottomButton, selectedAlpha, selectedObject, searchText } = this.state;

		const theme = Themes[themeName];

		return (
			<React.Fragment>
				<SelectBoxComponent
					renderSelectView={renderSelectView}
					items={items}
					disabled={disabled}
					selectedObject={selectedObject}
					chooseText={(selected && selected.Name) ? selected.Name : selectPlaceholderText}
					openModal={this.openModal.bind(this)}
					theme={theme}
				/>
				<Modal
					animationType={modalAnimationType}
					visible={modalVisible}
					onRequestClose={this.onClose.bind(this)}
					{...ModalProps}
				>
					<SafeAreaView style={theme.ModalStyles.container}>
						{
							renderSearch ? renderSearch(
									this.onClose.bind(this), 
									this.onBackRequest.bind(this)
								) : (
								<SearchComponent
									searchText={searchPlaceholderText}
									onClose={this.onClose.bind(this)}
									onBackRequest={this.onBackRequest.bind(this)}
									forceSelect={requireSelection}
									setText={(text: string) => this.setText(text)}
									backButtonDisabled={backButtonDisabled}
									theme={theme}
									{...SearchInputProps}
								/>
							)
						}
						<KeyboardAvoidingView style={theme.ModalStyles.keyboardContainer}
							behavior={Platform.OS === 'ios' ? 'padding' : null}
							enabled>
							<View style={theme.ModalStyles.listArea}>
								<FlatList
									ref={(ref) => { this.flatListRef = ref}}
									keyExtractor={keyExtractor ? keyExtractor : (item, index) => index.toString()}
									data={getFilteredData(items, autoSort, searchText)}
									renderItem={({ item, index }) => this.renderItem(item, index)}
									onScroll={showToTopButton && this.onScrolling.bind(this)}
									initialNumToRender={this.numToRender}
									keyboardShouldPersistTaps={'always'}
									keyboardDismissMode={'interactive'}
									onEndReached={onEndReached}
									maxToRenderPerBatch={20}
									legacyImplementation={false}
									updateCellsBatchingPeriod={50}
									removeClippedSubviews={removeClippedSubviews}
									viewabilityConfig={this.viewabilityConfig}
									getItemLayout={(_, index) => ({
										length: theme.CommonStyle.BTN_HEIGHT,
										offset: theme.CommonStyle.BTN_HEIGHT * index,
										index
									})}
									onViewableItemsChanged={this._onViewableItemsChanged}
									{...FlatListProps}
								/>
								<AlphabetComponent
									showAlphabeticalIndex={showAlphabeticalIndex}
									setAlphabet={(alphabet: string) => this.setAlphabet(alphabet)}
									alphabets={alphabeticalIndexChars}
									selectedAlpha={selectedAlpha}
									theme={theme}
								/>
							</View>
						</KeyboardAvoidingView>
						<ScrollToTopComponent goToUp={this.scrollToUp.bind(this)} stickyBottomButton={stickyBottomButton} theme={theme} />
					</SafeAreaView>
				</Modal>
			</React.Fragment >
		);
	}

	private _onViewableItemsChanged({ viewableItems }): void {
		if (viewableItems && viewableItems[0]) {
			const firstLetter = viewableItems[0].item.Name.charAt(0);
			this.setState({
				selectedAlpha: firstLetter,
			});
		}
	}

	private _onClose(): void {
		const { onClosed, onSelected, requireSelection, selected } = this.props;
		const { selectedObject } = this.state;

		if (requireSelection && (selectedObject && !selectedObject.Id) && (selected && !selected.Id)) return;

		if (!requireSelection) {
			onSelected({} as IModalListInDto);
		}

		this.setState({
			selectedObject: {} as IModalListInDto,
		});
		this._setOpen(false);
		this.clearComponent();
		if (onClosed) {
			onClosed();
		}
	}

	public onClose(): void {
		this._onClose();
	}

	private _onBackRequest(): void {
		const { onBackButtonPressed } = this.props;
		this._setOpen(false);

		this.clearComponent();
		if (onBackButtonPressed) {
			onBackButtonPressed();
		}
	}

	public onBackRequest(): void {
		this._onBackRequest();
	}

	private _scrollToUp(): void {
		if (this.flatListRef) {
			this.setState({
				selectedAlpha: null,
			}, () => {
				this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
			});
		}
	}

	public scrollToUp(): void {
		this._scrollToUp();
	}

	private _onScrolling(e: NativeSyntheticEvent<NativeScrollEvent>): void {
		const { contentOffset } = e.nativeEvent;

		if (contentOffset.y > 100) {
			this.setState({
				stickyBottomButton: true,
			});
		} else {
			this.setState({
				stickyBottomButton: false,
			});
		}
	}

	public onScrolling(e: NativeSyntheticEvent<NativeScrollEvent>): void {
		this._onScrolling(e);
	}

	private _renderItem(item: IModalListInDto, index: number): JSX.Element {
		const { selected, renderListItem, theme: themeName } = this.props;
		const theme: ITheme = Themes[themeName]

		return (
			(renderListItem &&
				<TouchableOpacity
					key={index.toString()}
					onPress={() => this.onSelectMethod(item)}
				>
					{renderListItem(selected, item)}
				</TouchableOpacity>)
			||
			<ListItemComponent
				key={index.toString()}
				defaultSelected={selected}
				list={item}
				onSelectMethod={this.onSelectMethod.bind(this)}
				theme={theme}
			/>
		)
	}

	public renderItem(item: IModalListInDto, index: number): JSX.Element {
		return this._renderItem(item, index);
	}

	private _setText(text: string): void {
		this.setState({
			searchText: text,
		});
	}

	public setText(text: string): void {
		this._setText(text);
	}

	private _onSelectMethod(key: IModalListInDto): IModalListInDto | void {
		const { onSelected } = this.props;
		this.setState({
			selectedObject: key as IModalListInDto,
		});
		this._setOpen(false);
		this.clearComponent();

		if (key && !key.Id) {
			return onSelected({} as IModalListInDto);
		}

		return onSelected(key);
	}

	public onSelectMethod(key: IModalListInDto): IModalListInDto | void {
		return this._onSelectMethod(key);
	}

	private _setAlphabet(alphabet: string): void {
		this.setState({
			selectedAlpha: alphabet,
		}, () => {
			const list = getFilteredData(this.props.items, this.props.autoSort, this.state.searchText);
			const findIndex = getIndex(alphabet, this.props.items, this.props.autoSort, this.state.searchText);

			if (findIndex >= 0 && findIndex <= (list.length - (this.numToRender / 2))) {
				setTimeout(() => {
					this.flatListRef.scrollToIndex({ animated: true, index: findIndex, viewPosition: 0 });
				}, 100);
			} else {
				this.flatListRef.scrollToEnd();
			}
		});
	}

	public setAlphabet(alphabet: string): void {
		this._setAlphabet(alphabet);
	}
}
