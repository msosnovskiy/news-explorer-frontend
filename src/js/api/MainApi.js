export default class MainApi {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  signup() {
    //  регистрирует нового пользователя;
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