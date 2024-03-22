import {component} from 'react'

import {vscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai' 

import {
    Heading,
    Button,
    Image,
    ImageContainer,
    EditorContainer,
    HrElement,
    ButtonContainer,
    TextAreaElement,
    UnderlineButton,
    ItalicButton,
} from './style' 

import './index.css'

class TextEditor extends Components {
state = {textToBold: false, textToItalic: false, textToUnderline: false} 

bold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
}
italic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
}
underline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))

}

render() {
    
    const {textToBold, textToItalic, textToUnderline} =this.state}

    const color = textToBold === false ? '#f1f5f9' : '#faff00' 

    const ItalicButtonColor = textToItalic === false ? '#f1f5f9' : '#faff00' 

    const underlineButtonColor = textToUnderline === false ? '#f1f5f9' : '#faff00' 

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    
    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    
    const textDecoration = textToBold === false ? 'normal' : 'underline'

    return (
        <div className
    )