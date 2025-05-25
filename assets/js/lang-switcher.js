function loadGoogleTranslate() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,ja',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false // This prevents the automatic banner
  }, 'google_translate_element');
}
