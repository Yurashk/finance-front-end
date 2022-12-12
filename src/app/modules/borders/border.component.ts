import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {HeaderInterface} from "../../models/header.interface";
import {MediaMatcher} from "@angular/cdk/layout";
import {AuthService} from "../../services/auth.service";
import {BorderService} from "../../services/border.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {mergeMap, switchMap} from "rxjs";


@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  headerLinks: HeaderInterface[] = [{
    name: 'Про сервіс',
    link: 'about-us',
    icon: 'home',
    isActive: true
  }, {
    name: 'Прогресс по авто',
    link: 'works-by-vehicle',
    icon: 'manage_history',
    isActive: true
  }, {
    name: 'Мої обслуговування',
    link: 'history',
    icon: 'checklist',
    isActive: true
  },
    {
      name: 'Послуги',
      link: 'work-types',
      icon: 'settings',
      isActive: true
    },]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService, private bordersService: BorderService,
              private route: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.route.routeReuseStrategy.shouldReuseRoute = function () {

      return false;
    }
  }

  ngOnInit(): void {
    this.getUserInfo();
    console.log('work')
  }

  getUserInfo() {
    this.bordersService.getUserInfo().pipe().subscribe(res=>{
      console.log('resWork')
     this.bordersService.currentUser.next(res)
    })
  }

  logout() {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
