import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import jwt_decode from "jwt-decode";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {User} from "../models/user";
import {Border, BorderSpendMoney} from "../models/border";

@Injectable({
  providedIn: 'root'
})
export class BorderService {
  public currentUser = new Subject<User>();
  public currentUserChanged = this.currentUser.asObservable();
  public currentBorder = new Subject<Border>();
  public currentBorderChanged = this.currentBorder.asObservable();

  constructor(private http: HttpClient) {
  }

  getUserInfo(): Observable<any> {
    let user: any = jwt_decode(<string>localStorage.getItem('access_token'));
    return this.http.get(
      `${environment.baseEndpoint}app/getUserById/${user.id}`
    );
  }

  changeUserInfo(newUser: User) {
    this.currentUser.next(newUser);
  }
  changeBorderInfo(newBorder: Border) {
    this.currentBorder.next(newBorder);
  }

  getBorderById(id: string): Observable<Border> {
    return this.http.get<Border>(
      `${environment.baseEndpoint}app/getBorderById/${id}`
    );
  }

  createNewBorder(result: any, ownerEmail: string | undefined) {
    return this.http.post(
      `${environment.baseEndpoint}app/borderCreate`, {
        name: result.userName, goal: result.goal, ownerEmail
      }
    );
  }
  spendMoney(id:string, spendMoney:BorderSpendMoney){
    return this.http.patch<Border>(
      `${environment.baseEndpoint}app/addBorderFinanceOperation`, {
        id,spendMoney
      }
    );
  }

  addUserToBoard(userEmail: string, id: string | undefined){
    return this.http.patch<Border>(
      `${environment.baseEndpoint}app/addBorderUsers`, {
        id,userEmail
      }
    );
  }
  ngOnDestroy() {
    this.currentUser.unsubscribe();
  }
}
