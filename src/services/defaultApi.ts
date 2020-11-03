export default class DefaultApi {
  //private base = "http://192.168.1.16:3000";
  private base = "http://localhost:8000";

  private getGoogleUserUrl =
    "https://www.googleapis.com/oauth2/v3/userinfo?access_token=";

  public googleAuthUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&redirect_uri=http://localhost:8000&client_id=149375786134-1vv2mscskav1df1blba6ppf1din40nd1.apps.googleusercontent.com";

  public getBase = (): string => this.base;

  private setHeaders = (customHeaders?: object) => {
    const headers = new Headers();

    headers.append("Accept", "application/json, text/plain, */*");
    headers.append("Content-Type", "application/json");

    if (customHeaders) {
      Object.keys(customHeaders).forEach(field => {
        headers.append(field, customHeaders[field]);
      });
    }

    return headers;
  };

  public get = async (url: string, headers?: object) => {
    return fetch(this.base + url, {
      method: "get",
      credentials: "include",
      headers: this.setHeaders(headers)
    });
  };

  public getGoogleProfile = (token: string) => {
    return fetch(this.getGoogleUserUrl + token, {
      method: "get"
    });
  };

  public post = async (body: object, url: string, headers?: object) => {
    return fetch(this.base + url, {
      method: "post",
      credentials: "include",
      headers: this.setHeaders(headers),
      body: JSON.stringify(body)
    });
  };
}
