export default class MainApi {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  promiseProcessing(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`${res.message} - Ошибка: ${res.status}`);
  }

  //  регистрирует нового пользователя;
  signup(email, password, name) {
    return fetch(`${this.url}signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      })
    })
      .then(res => this.promiseProcessing(res));
  }

  signin() {
    //  аутентифицирует пользователя на основе почты и пароля;
  }

  getUserData() {
    //  возвращает информацию о пользователе;
  }

  getArticles() {
    //  забирает все статьи;
  }

  createArticle() {
    //  создаёт статью;
  }

  removeArticle() {
    //  удаляет статью.
  }

}