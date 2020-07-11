import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, TextInput, Button, ScrollView, Slider, AsyncStorage } from 'react-native';
import Syntactic from './syntactic'
import Semantic from './semantic'

var {height, width} = Dimensions.get('window');

var numberVar = "1";

var isSyntactic = true;
var isSemantic = false;

let syntacticConst;
let semanticConst;

export default class App extends Component {
  constructor()
  {
    super();
    syntacticConst = new Syntactic();
    semanticConst = new Semantic();
    var note = syntacticConst.getNotes()[numberVar-1];
    this.state = {
      started: false,
      number: "1",
      texts_visible: true,
      authors_visible: false,
      hasNotes: false,
      config_visible: false,
      customBackground: "#ffffff",

      use: syntacticConst.getUses()[numberVar-1],
      example: syntacticConst.getExamples()[numberVar-1] == "null" ? "" : syntacticConst.getExamples()[numberVar-1],
      correction: syntacticConst.getCorrections()[numberVar-1] == "null" ? "" : syntacticConst.getCorrections()[numberVar-1],
      note: note,
      hasNotes: note !== "null",
    };
  }

  getStartMessage = () => {
    return "El siguiente listado de retos responde a las dificultades más comunes que se han encontrado, a lo largo de la revisión de versiones intermedias de textos académicos; no se inspiran en ningún texto en particular y las ejemplificaciones son alteradas en su contenido para evitar que algún autor se sienta señalado. Se busca ayudar a fortalecer el hábito de autocorrección, una vez se ha identificado y explicado cada caso.";
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'background',
        this.state.customBackground,
      );
    } catch (error) {
      Alert.alert(error);
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('background');
      if (value !== null) {
        Alert.alert(value);
        return value;
      }else
      {
        this._storeData();
      }
    } catch (error) {
      Alert.alert(error);
      this._storeData();
    }
  };
  
  render()
  {
    if(!this.state.started)
    {
      return (
        <Text
          onPress={() => this.buttonActionPerformed("started")}
          style={styles.startedButton}
          accessibilityLabel="Started Button"
        >{this.getStartMessage()}</Text>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.boxNotifications}></View>
        <View style={styles.box}>
          <View style={[styles.boxLeft, {backgroundColor: this.state.customBackground,}]}>
            <TextInput 
              style={{ height: 50, width: 100, borderColor: 'black', borderBottomWidth: 2, backgroundColor: this.state.customBackground, textAlign: 'center', color: '#000000', fontSize:30}}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.number}
              keyboardType = 'number-pad'
              onEndEditing = {() => this.updateChallenge()}
            />
            <View style={styles.boxLeftArrows}>
              <View style={styles.boxArrowLeft}>
                <Button
                  onPress={() => this.buttonActionPerformed("left")}
                  title="<"
                  color="#006B5D"
                  accessibilityLabel="Left Button"
                />
              </View>
              <View style={styles.boxArrowRight}>
                <Button
                  onPress={() => this.buttonActionPerformed("right")}
                  title=">"
                  color="#006B5D"
                  accessibilityLabel="Right Button"
                />
              </View>
            </View>
            <Button
              onPress={() => this.buttonActionPerformed("authors")}
              title="autores"
              color="#006B5D"
              accessibilityLabel="Authors Button"
            />
            { this._noteButton() }
            <Button 
              onPress={() => this.buttonActionPerformed("config")}
              title="config"
              color="#006B5D"
              accessibilityLabel="Config Button"
            />
          </View>
          <View style={[styles.boxRight, {backgroundColor: this.state.customBackground,}]}>
            <View style={styles.boxTop}>
              <View style={styles.topButtons}>
                <Button
                  onPress={() => this.buttonActionPerformed("syntactic")}
                  title={"retos\nsintacticos"}
                  style={styles.topButtons}
                  color="#13BD9E"
                  accessibilityLabel="Syntactic Button"
                />
              </View>
              <View style={styles.topButtons}>
                <Button
                  onPress={() => this.buttonActionPerformed("semantic")}
                  title={"retos\nsemanticos"}
                  style={styles.topButtons}
                  color="#13BD9E"
                  accessibilityLabel="Semantic Button"
                />
              </View>
            </View>
            {this._texts()}
          </View>
        </View>
      </View>
    );
  }

  _noteButton()
  {
    if(this.state.hasNotes == true)
    {
      return (
        <Button 
          onPress={() => this.buttonActionPerformed("note")}
          title="nota"
          color="#006B5D"
          accessibilityLabel="Note Button"
        />
      );
    }
  }

  _texts()
  {
    if(this.state.texts_visible)
    {
      return (
        <View>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.uses} selectable>{this.state.use}</Text>
          </ScrollView>

          <Text style={styles.titles}>{"Ejemplo(s):"}</Text>

          <ScrollView style={styles.scrollView}>
            <Text style={styles.example} selectable>{this.state.example}</Text>
          </ScrollView>
          
          <Text style={styles.titles}>{"Corrección(es):"}</Text>

          <ScrollView style={styles.scrollView}>
            <Text style={styles.correction} selectable>{this.state.correction}</Text>
          </ScrollView>
        </View>
      );
    }else if(this.state.authors_visible)
    {
      return (
        <Text style={styles.authors}>{this.state.authors}</Text>
      );
    }else if(this.state.notes_visible)
    {
      return (
        <ScrollView style={styles.scrollView}>
          <Text style={styles.notes} selectable>{this.state.note}</Text>
        </ScrollView>
      );
    }else if(this.state.config_visible)
    {
      return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            value={this.state.slider}
            onValueChange={(value) => this.sliderValueChange(value)}
          />
          <Text style={{paddingLeft: 10}}>Ajustar fondo amarillo: {this.state.customBackground}</Text>
        </View>
      );
    }
  }

  getSliderValue = () =>
  {
    var hex = this.state.customBackground;
    var num = hex.substring(hex.length-2, hex.length);

    if(!isNumber(num))
    {
      switch(num)
      {
        case "aa":
          num = "100";
          break;
        case 101:
          num = "101";
          break;
        case 102:
          num = "102";
          break;
        case 103:
          num = "103";
          break;
        case 104:
          num = "104";
          break;
        default:
          num = "105";
          break;
      }
    }
    
    return parseFloat(parseInt(num)/105);
  }

  sliderValueChange = (value) =>
  {
    var v = parseInt(value*(105));
    var hex = "#ffff";

    if(v >= 100)
    {
      switch(v)
      {
        case 100:
          hex += "aa";
          break;
        case 101:
          hex += "bb";
          break;
        case 102:
          hex += "cc";
          break;
        case 103:
          hex += "dd";
          break;
        case 104:
          hex += "ee";
          break;
        default:
          hex += "ff";
          break;
      }
    }else
    {
      if(v < 10)
      {
        hex += "0"+v;
      }else
      {
        hex += ""+v;
      }
    }
    this.setState({slider: hex});

    this.setState({customBackground: hex});
  }

  buttonActionPerformed = button =>
  {
    this.cleanVisibleStates();
    switch(button)
    {
      case "started":
        this.setState({
          started: true,
        });
        break;
      case "left":
        this.onChangeText(""+(parseInt(this.state.number)-1));
        this.updateChallenge();
        break;
      case "right":
        this.onChangeText(""+(parseInt(this.state.number)+1));
        this.updateChallenge();
        break;
      case "config":
        this.setState({
          config_visible: true,
          texts_visible: false,
          slider: this.getSliderValue(),
        });
        break;
      case "authors":
        var authors = "Autores: Miguel Angel Caro Lopera\n"+
                      "Jacqueline García Botero\n\n"+
                      "Programador: Santiago Botero Peláez\n"+
                      "Armenia, Quindio, Colombia (2019)";
        this.setState({authors: authors});
        this.setState({texts_visible : false});
        this.setState({authors_visible : true});
        break;
      case "note":
        this.setState({
          notes_visible: true,
          texts_visible : false
        })
        break;
      case "syntactic":
        this.setState({
          number: "1",
        });
        numberVar = "1";
        isSyntactic = true;
        isSemantic = false;
        this.updateChallenge();
        break;
      case "semantic":
        this.setState({
          number: "1",
        });
        numberVar = "1";
        isSyntactic = false;
        isSemantic = true;
        this.updateChallenge();
        break;
    }
  }

  onChangeText = text =>
  {
    this.cleanVisibleStates();
    if(isNumber(text))
    {
      var num = parseInt(text);
      
      if(num < 1)
      {
        text = "1";
      }

      if(isSyntactic && num >= syntacticConst.getSize())
      {
        text = ""+syntacticConst.getSize();
      }else if(isSemantic && num >= semanticConst.getSize())
      {
        text = ""+semanticConst.getSize();
      }
    }
    
    numberVar = text;
    this.setState({number: text})
  }

  cleanVisibleStates = () =>
  {
    this.setState({
      texts_visible: true,
      authors_visible: false,
      notes_visible: false,
      config_visible: false,
    })
  }

  updateChallenge = () =>
  {
    this._storeData();
    if(isSyntactic)
    {
      var note = syntacticConst.getNotes()[numberVar-1];
      this.setState({
        use: syntacticConst.getUses()[numberVar-1],
        example: syntacticConst.getExamples()[numberVar-1] == "null" ? "" : syntacticConst.getExamples()[numberVar-1],
        correction: syntacticConst.getCorrections()[numberVar-1] == "null" ? "" : syntacticConst.getCorrections()[numberVar-1],
        note: note,
        hasNotes: note !== "null",
      });
    }else if(isSemantic)
    {
      var note = semanticConst.getNotes()[numberVar-1];
      this.setState({
        use: semanticConst.getUses()[numberVar-1],
        example: semanticConst.getExamples()[numberVar-1] == "null" ? "" : semanticConst.getExamples()[numberVar-1],
        correction: semanticConst.getCorrections()[numberVar-1] == "null" ? "" : semanticConst.getCorrections()[numberVar-1],
        note: note,
        hasNotes: note !== "null",
      });
    }
  }
}// Fin class

function isNumber(text)
{
  return /^-{0,1}\d+$/.test(text);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxNotifications: {
    height: 25,
    width: width,
    flexDirection: 'column',
    backgroundColor: '#aaaaaa'
  },
  contentBox: {
    backgroundColor: '#ffff00',
    height: height-75,
    width: width-50
  },
  box: {
    flexDirection: 'row',
  },
  boxLeft: {
    flexDirection: 'column',
    height: height,
    width: 100,
    //backgroundColor: background,
  },
  boxLeftArrows: {
    flexDirection: 'row',
    width: 100,
    padding: 10,
  },
  boxArrowLeft: {
    width: 40,
    paddingRight: 5
  },
  boxArrowRight: {
    width: 40,
    paddingLeft: 5
  },
  boxRight: {
    flexDirection: 'column',
    height: height-25,
    width: width-100,
    //backgroundColor: background
  },
  titles: {
    height: 30,
    paddingLeft: 5,
    color: '#0000ff',
    fontSize: 20,
    //backgroundColor: background,
    fontWeight: 'bold',
    width: width-100,
  },
  example: {
    height: (height-75-60)/3,
    paddingLeft: 15,
    fontSize: 18,
    //backgroundColor: background,
    width: width-100,
    textDecorationLine: 'line-through',
  },
  correction: {
    height: (height-75-60)/3,
    paddingLeft: 15,
    fontSize: 18,
    //backgroundColor: background,
    width: width-100,
  },
  uses: {
    height: (height-75-60)/3,
    paddingLeft: 5,
    color: '#ff0000',
    fontSize: 18,
    //backgroundColor: background,
    width: width-100,
  },
  notes: {
    //backgroundColor: '#ffff00',
    height: height-75,
  },
  authors: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: height-75
  },
  boxTop: {
    flexDirection: 'row',
    height: 52,
    width: width-100,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  topButtons: {
    width: (width-100)/2,
    height: 40,
  },
  startedButton: {
    height: height,
    alignContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#000000",
    backgroundColor: "#eeeeee",
  },
});