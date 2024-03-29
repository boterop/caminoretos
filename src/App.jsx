import React, { useEffect, useRef, useState } from 'react';
import {
	Text,
	View,
	Button,
	ScrollView,
	TextInput,
	StatusBar,
} from 'react-native';
import {
	ColorsConst,
	Semantic,
	Syntactic,
	TextConstants,
	ViewsConst,
} from './constants';
import StorageService from './services/StorageService';
import HomeStyle from './style/Home';
import Slider from '@react-native-community/slider';

const App = () => {
	const [customBackground, setCustomBackground] = useState('#ffffff');
	const [isStarted, setIsStarted] = useState(false);
	const [textType, setTextType] = useState('SY');
	const [use, setUse] = useState('');
	const [example, setExample] = useState('');
	const [correction, setCorrection] = useState('');
	const [note, setNote] = useState('');
	const [hasNote, setHasNote] = useState(false);
	const [pageNumber, setPageNumber] = useState(0);
	const [visible, setVisible] = useState('text');
	const [sliderValue, setSliderValue] = useState();

	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;

			StorageService.load('background').then(background => {
				background = background === undefined ? '#ffffff' : background;
				setCustomBackground(background);
				setSliderValue(getSliderValue(background));
			});
		}

		typeConst = textType == 'SY' ? new Syntactic() : new Semantic();

		let num = pageNumber;

		if (num < 1) {
			num = 1;
			setPageNumber(num);
		}

		if (num >= typeConst.getSize()) {
			num = typeConst.getSize();
			setPageNumber(num);
		}

		setUse(typeConst.getUses()[num - 1]);
		setExample(
			typeConst.getExamples()[num - 1] == 'null'
				? ''
				: typeConst.getExamples()[num - 1],
		);
		setCorrection(
			typeConst.getCorrections()[num - 1] == 'null'
				? ''
				: typeConst.getCorrections()[num - 1],
		);

		let pageNote = typeConst.getNotes()[num - 1];
		setNote(pageNote);
		setHasNote(pageNote !== 'null');
	}, [pageNumber, textType]);

	const isNumber = text => /^-{0,1}\d+$/.test(text);

	const buttonActionPerformed = button => {
		switch (button) {
			case 'left':
				setPageNumber(parseInt(pageNumber) - 1);
				setVisible(ViewsConst.TEXT);
				break;
			case 'right':
				setPageNumber(parseInt(pageNumber) + 1);
				setVisible(ViewsConst.TEXT);
				break;
			case 'authors':
				setVisible(ViewsConst.AUTHORS);
				break;
			case 'note':
				setVisible(ViewsConst.NOTES);
				break;
		}
	};

	const _noteButton = () =>
		hasNote ? (
			<Button
				onPress={() => buttonActionPerformed('note')}
				title='notas'
				color={ColorsConst.button}
				accessibilityLabel='Note Button'
			/>
		) : null;

	const _texts = () => {
		if (visible === ViewsConst.TEXT) {
			return (
				<View>
					<ScrollView style={HomeStyle.scrollView}>
						<Text style={HomeStyle.uses} selectable>
							{use}
						</Text>
					</ScrollView>

					<Text style={HomeStyle.titles}>Example:</Text>

					<ScrollView style={HomeStyle.scrollView}>
						<Text style={HomeStyle.example} selectable>
							{example}
						</Text>
					</ScrollView>

					<Text style={HomeStyle.titles}>Correction:</Text>

					<ScrollView style={HomeStyle.scrollView}>
						<Text style={HomeStyle.correction} selectable>
							{correction}
						</Text>
					</ScrollView>
				</View>
			);
		} else if (visible === ViewsConst.AUTHORS) {
			return <Text style={HomeStyle.authors}>{TextConstants.authors}</Text>;
		} else if (visible === ViewsConst.NOTES) {
			return (
				<ScrollView style={HomeStyle.scrollView}>
					<Text style={HomeStyle.notes} selectable>
						{note}
					</Text>
				</ScrollView>
			);
		} else if (visible === ViewsConst.CONFIG) {
			return (
				<View
					style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
					<Slider
						value={sliderValue}
						onValueChange={value => sliderValueChange(value)}
					/>
					<Text style={{ paddingLeft: 10, color: '#222222' }}>
						{TextConstants.settings}: {customBackground}
					</Text>
				</View>
			);
		}
	};

	const getSliderValue = hex => {
		let num = hex.substring(hex.length - 2, hex.length);

		if (!isNumber(num)) {
			switch (num) {
				case 'aa':
					num = '100';
					break;
				case 101:
					num = '101';
					break;
				case 102:
					num = '102';
					break;
				case 103:
					num = '103';
					break;
				case 104:
					num = '104';
					break;
				default:
					num = '105';
					break;
			}
		}

		return parseFloat(parseInt(num) / 105);
	};

	const sliderValueChange = value => {
		const v = parseInt(value * 105);
		let hex = '#ffff';

		if (v >= 100) {
			switch (v) {
				case 100:
					hex += 'aa';
					break;
				case 101:
					hex += 'bb';
					break;
				case 102:
					hex += 'cc';
					break;
				case 103:
					hex += 'dd';
					break;
				case 104:
					hex += 'ee';
					break;
				default:
					hex += 'ff';
					break;
			}
		} else if (v < 10) {
			hex += '0' + v;
		} else {
			hex += '' + v;
		}

		setSliderValue(value);
		setCustomBackground(hex);
	};

	const onChangeText = text => {
		if (isNumber(text)) {
			let num = parseInt(text);

			setPageNumber(num);
		}
	};

	const changeChallenge = challenge => {
		setTextType(challenge);
		setPageNumber(1);
		setVisible(ViewsConst.TEXT);
	};

	return (
		<View style={[HomeStyle.container, { backgroundColor: customBackground }]}>
			<StatusBar hidden />
			{isStarted ? (
				<View style={HomeStyle.box}>
					<View style={HomeStyle.boxLeft}>
						<TextInput
							style={{
								height: 50,
								width: 100,
								borderColor: 'black',
								borderBottomWidth: 2,
								backgroundColor: customBackground,
								textAlign: 'center',
								color: '#000000',
								fontSize: 30,
							}}
							onChangeText={text => onChangeText(text)}
							value={'' + pageNumber}
							keyboardType='number-pad'
						/>
						<View style={HomeStyle.boxLeftArrows}>
							<View style={HomeStyle.boxArrowLeft}>
								<Button
									onPress={() => buttonActionPerformed('left')}
									title='<'
									color={ColorsConst.button}
								/>
							</View>
							<View style={HomeStyle.boxArrowRight}>
								<Button
									onPress={() => buttonActionPerformed('right')}
									title='>'
									color={ColorsConst.button}
								/>
							</View>
						</View>
						<Button
							onPress={() => buttonActionPerformed('authors')}
							title='autores'
							color={ColorsConst.button}
						/>
						{_noteButton()}
					</View>
					<View
						style={[HomeStyle.boxRight, { backgroundColor: customBackground }]}>
						<View style={HomeStyle.boxTop}>
							<View style={HomeStyle.topButtons}>
								<Button
									onPress={() => changeChallenge('SY')}
									title={'retos\nsintacticos'}
									style={HomeStyle.topButtons}
									color='#3C8515'
								/>
							</View>
							<View style={HomeStyle.topButtons}>
								<Button
									onPress={() => changeChallenge('SE')}
									title={'retos\nsemanticos'}
									style={HomeStyle.topButtons}
									color='#3C8515'
								/>
							</View>
						</View>
						{_texts()}
					</View>
				</View>
			) : (
				<Text
					onPress={() => setIsStarted(true)}
					style={HomeStyle.startedButton}>
					{TextConstants.start}
				</Text>
			)}
		</View>
	);
};

export default App;
