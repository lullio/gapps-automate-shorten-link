function createShortLink(longURL="https://link.lullio.com.br/fdasdfafdsfdsa/fdsafads/fdsafasdfadsafdsdfasadfsafds/fdasafds") {
  // Substitua 'YOUR_API_KEY' pela sua Public API Key do Short.io
  const apiKey = 'pk_2QB3FGua5trcBXEH';
  
  // Configurações da requisição
  const url = 'https://api.short.io/links/public';
  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': apiKey
    },
    payload: JSON.stringify({
      originalURL: longURL,
      domain: 'link.lullio.com.br', // Substitua pelo seu domínio no Short.io
      allowDuplicates: false
    })
  };

  try {
    // Envia a requisição para a API
    const response = UrlFetchApp.fetch(url, options);
    const jsonResponse = JSON.parse(response.getContentText());

    // Exibe a URL encurtada no log
    Logger.log('Short URL: ' + jsonResponse.shortURL);
    return jsonResponse.shortURL;
  } catch (e) {
    Logger.log('Erro: ' + e.message);
    return null;
  }
}
