import React, { Component } from "react";

const translationData = {
  de: {
    greet: "Guten Tag!",
    lead: "Heute lernen wir, wie ContextAPI.",
  },
  jp: {
    greet: "こんにちは",
    lead: "今日はContextAPIについて学びます。",
  },
  en: {
    greet: "Hello!",
    lead: "Today we will learn about ContextAPI.",
  },
};

const languageContext = React.createContext();

class Localized extends Component {
  changeLanguage = language => {
    this.setState(() => ({
      translations: translationData[language],
      language: language,
    }));
  };

  state = {
    languages: Object.keys(translationData),
    defaultLanguage: "en",
    translations: translationData["en"],
    changeLanguage: this.changeLanguage,
  };

  render() {
    return (
      <languageContext.Provider value={this.state}>
        {this.props.children}
      </languageContext.Provider>
    );
  }
}

const LanguageSelector = () => (
  <languageContext.Consumer>
    {contextValue => (
      <>
        Choose a language
        <select
          onChange={event => {
            contextValue.changeLanguage(event.target.value);
          }}
          defaultValue={contextValue.defaultLanguage}
        >
          {contextValue.languages.map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </>
    )}
  </languageContext.Consumer>
);

const Content = () => (
  <languageContext.Consumer>
    {contextValue => (
      <>
        <h3>{contextValue.translations.greet}</h3>
        <p>{contextValue.translations.lead}</p>
      </>
    )}
  </languageContext.Consumer>
);

export default class ContextAPI extends Component {
  render() {
    return (
      <>
        <h1>ContextAPI</h1>
        <Localized>
          <LanguageSelector />
          <Content />
        </Localized>
      </>
    );
  }
}
