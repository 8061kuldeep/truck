import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}
  saveformData(formData: any[]) {
    return this.http.put(
      "https://truck-5849d.firebaseio.com/formData.json",
      formData
    );
  }
  savePost(postList: any[]) {
    return this.http.put(
      "https://truck-5849d.firebaseio.com/postList.json",
      postList
    );
  }
  saveCuser(Cuser: any[]) {
    return this.http.put(
      "https://truck-5849d.firebaseio.com/Cuser.json",
      Cuser
    );
  }

  getPostList(): Observable<any> {
    return this.http.get("https://truck-5849d.firebaseio.com/postList.json");
  }
  getCuser(): Observable<any> {
    return this.http.get<any>("https://truck-5849d.firebaseio.com/Cuser.json");
  }
  getformData() {
    return this.http.get("https://truck-5849d.firebaseio.com/formData.json");
  }
  getdatatitle() {
    return this.http.get("https://truck-5849d.firebaseio.com/aaa.json");
  }
  deletepost() {
    return this.http.delete("https://truck-5849d.firebaseio.com/data.json");
  }
}
