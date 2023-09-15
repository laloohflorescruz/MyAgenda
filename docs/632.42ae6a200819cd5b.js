"use strict";(self.webpackChunkMyAgenda=self.webpackChunkMyAgenda||[]).push([[632],{6632:(mt,A,i)=>{i.r(A),i.d(A,{ContactmanagerModule:()=>lt});var m=i(4755),t=i(2223),f=i(7392),O=i(6550),v=i(3267),Y=i(2289),D=i(1135),M=i(3144);let h=(()=>{class n{constructor(e){this.http=e,this.dataStore={users:[]},this._users=new D.X([])}get users(){return this._users.asObservable()}userByid(e){return this.dataStore.users.find(o=>o.id==e)}loadAll(){return this.http.get("https://angular-material-api.azurewebsites.net/users").subscribe(o=>{this.dataStore.users=o,this._users.next(Object.assign({},this.dataStore).users)},o=>{console.log("Failed")})}addUser(e){return new Promise((o,r)=>{e.id=this.dataStore.users.length+1,this.dataStore.users.push(e),this._users.next(Object.assign({},this.dataStore).users),o(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(M.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=i(2480),x=i(3683),N=i(6338);class J{constructor(){this.notes=[]}}var l=i(9401),g=i(5938),F=i(3238),C=i(9602),u=i(9549),S=i(4144),y=i(4385),b=i(4859);function Q(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessage())}}function q(n,a){1&n&&(t.TgZ(0,"mat-option",13)(1,"mat-icon"),t._uU(2,"home"),t.qZA()()),2&n&&t.Q6J("value",a.$implicit)}let I=(()=>{class n{constructor(e,o){this.dialogRef=e,this.userService=o,this.avatars=["svg-1","svg-2","svg-3","svg-4"],this.name=new l.NI("",[l.kI.required])}getErrorMessage(){return this.name.hasError("required")?"You must insert a valid name":""}ngOnInit(){this.user=new J}save(){this.user.name=this.name.value,this.userService.addUser(this.user).then(e=>{this.dialogRef.close(this.user)})}dismiss(){this.dialogRef.close(null)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.so),t.Y36(h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-contact-dialog"]],decls:39,vars:8,consts:[["mat-dialog-title",""],[1,"example-container"],["appearance","fill"],["matInput","","required","",3,"formControl"],[4,"ngIf"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matIconSuffix","",3,"for"],["picker",""],[3,"ngModel","ngModelChange"],[3,"value",4,"ngForm","ngFormOf"],["matInput","",3,"ngModel","ngModelChange"],["mat-button","","color","primary",3,"click"],["mat-button","","color","info",3,"click"],[3,"value"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Add new contact"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"div",1)(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,Q,2,1,"mat-error",4),t.qZA(),t.TgZ(9,"mat-form-field",2)(10,"mat-label"),t._uU(11,"Born"),t.qZA(),t.TgZ(12,"input",5),t.NdJ("ngModelChange",function(c){return o.user.birthDate=c}),t.qZA(),t.TgZ(13,"mat-hint"),t._uU(14,"MM/DD/YYYY"),t.qZA(),t._UZ(15,"mat-datepicker-toggle",6)(16,"mat-datepicker",null,7),t.qZA(),t.TgZ(18,"mat-form-field",2)(19,"mat-label"),t._uU(20,"Select"),t.qZA(),t.TgZ(21,"mat-select",8),t.NdJ("ngModelChange",function(c){return o.user.avatar=c}),t.TgZ(22,"mat-select-trigger")(23,"mat-icon"),t._uU(24,"more"),t.qZA()(),t.YNc(25,q,3,1,"mat-option",9),t.qZA()(),t.TgZ(26,"mat-form-field",2)(27,"mat-label"),t._uU(28,"Bio"),t.qZA(),t.TgZ(29,"textarea",10),t.NdJ("ngModelChange",function(c){return o.user.bio=c}),t.qZA()()()(),t.TgZ(30,"mat-dialog-actions")(31,"button",11),t.NdJ("click",function(){return o.save()}),t.TgZ(32,"mat-icon"),t._uU(33,"save"),t.qZA(),t._uU(34,"Save "),t.qZA(),t.TgZ(35,"button",12),t.NdJ("click",function(){return o.dismiss()}),t.TgZ(36,"mat-icon"),t._uU(37,"cancel"),t.qZA(),t._uU(38,"Cancel "),t.qZA()()),2&e){const r=t.MAs(17);t.xp6(7),t.Q6J("formControl",o.name),t.xp6(1),t.Q6J("ngIf",o.name.invalid),t.xp6(4),t.Q6J("matDatepicker",r)("ngModel",o.user.birthDate),t.xp6(3),t.Q6J("for",r),t.xp6(6),t.Q6J("ngModel",o.user.avatar),t.xp6(4),t.Q6J("ngFormOf",o.avatars),t.xp6(4),t.Q6J("ngModel",o.user.bio)}},dependencies:[m.O5,F.ey,C.Mq,C.hl,C.nW,u.TO,u.KE,u.bx,u.hX,S.Nt,y.gD,y.$L,b.lW,f.Hw,g.uh,g.xY,g.H8,l.Fj,l.JJ,l.JL,l.Q7,l.On,l.F,l.oH],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}.example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.example-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}"]}),n})();var P=i(7009),Z=i(8255);let B=(()=>{class n{constructor(e,o,r){this.dialog=e,this.snackBar=o,this.router=r,this.toggleSidenav=new t.vpe}ngOnInit(){}openAddContactDialog(){this.dialog.open(I,{width:"400px"}).afterClosed().subscribe(o=>{console.log("Closed",o),o&&this.openSnackBar("Contact added","Navigate").onAction().subscribe(()=>{this.router.navigate(["/contactmanager",o.id])})})}openSnackBar(e,o){return this.snackBar.open(e,o,{duration:7e3})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.uw),t.Y36(P.ux),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-toolbar"]],outputs:{toggleSidenav:"toggleSidenav"},decls:14,vars:1,consts:[["color","primary"],["mat-button","",1,"drawer-toggle",3,"click"],[1,"example-spacer"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-toolbar",0)(1,"button",1),t.NdJ("click",function(){return o.toggleSidenav.emit()}),t.TgZ(2,"mat-icon"),t._uU(3,"menu"),t.qZA()(),t.TgZ(4,"span"),t._uU(5,"Contact Manager"),t.qZA(),t._UZ(6,"span",2),t.TgZ(7,"button",3)(8,"mat-icon"),t._uU(9,"more_vert"),t.qZA()(),t.TgZ(10,"mat-menu",null,4)(12,"button",5),t.NdJ("click",function(){return o.openAddContactDialog()}),t._uU(13,"New Contact"),t.qZA()()()),2&e){const r=t.MAs(11);t.xp6(7),t.Q6J("matMenuTriggerFor",r)}},dependencies:[Z.VK,Z.OP,Z.p6,x.Ye,b.lW,f.Hw],styles:["[_ngcontent-%COMP%]:root{--iconWidth: 56px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.drawer-toggle[_ngcontent-%COMP%]{display:none;padding:0;margin:8px;min-width:var(--iconWidth)}@media (max-width: 720px){.drawer-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}.drawer-toggle[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:30px;height:var(--iconWidth);width:var(--iconWidth);line-height:var(--iconWidth)}"]}),n})();const j=function(n){return["/contactmanager",n]};function H(n,a){if(1&n&&(t.TgZ(0,"mat-list-item")(1,"a",8),t._UZ(2,"mat-icon"),t._uU(3),t.qZA()()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,j,e.id)),t.xp6(2),t.Oqu(e.name)}}let k=(()=>{class n{constructor(e,o,r){this.breakpointObserver=e,this.userService=o,this.router=r}ngOnInit(){this.breakpointObserver.observe(["(max-width: 720px)"]).subscribe(e=>{this.isScreenSmall=e.matches}),this.users=this.userService.users,this.userService.loadAll(),this.users.subscribe(e=>{e.length>0&&this.router.navigate(["/contactmanager",e[0].id])}),this.router.events.subscribe(()=>{this.isScreenSmall&&this.drawer?.close()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Y.Yg),t.Y36(h),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sidenav"]],viewQuery:function(e,o){if(1&e&&t.Gf(v.jA,5),2&e){let r;t.iGM(r=t.CRH())&&(o.drawer=r.first)}},decls:12,vars:5,consts:[[1,"app-sidenav-container"],[1,"app-sidenav","mat-elevation-z10",3,"opened","mode"],["drawer",""],["color","primary"],[4,"ngFor","ngForOf"],[1,"app-sidenav-content"],[3,"toggleSidenav"],[1,"wrapper"],["matListItemTitle","",3,"routerLink"]],template:function(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"mat-toolbar",3),t._uU(4,"Contacts"),t.qZA(),t.TgZ(5,"mat-nav-list"),t.YNc(6,H,4,4,"mat-list-item",4),t.ALo(7,"async"),t.qZA()(),t.TgZ(8,"div",5)(9,"app-toolbar",6),t.NdJ("toggleSidenav",function(){t.CHM(r);const ct=t.MAs(2);return t.KtG(ct.toggle())}),t.qZA(),t.TgZ(10,"div",7),t._UZ(11,"router-outlet"),t.qZA()()()}2&e&&(t.xp6(1),t.Q6J("opened",!o.isScreenSmall)("mode",o.isScreenSmall?"over":"side"),t.xp6(5),t.Q6J("ngForOf",t.lcZ(7,3,o.users)))},dependencies:[m.sg,v.jA,v.kh,x.Ye,N.Hk,N.Tg,f.Hw,p.lC,p.rH,B,m.Ov],styles:[".app-sidenav-container[_ngcontent-%COMP%]{flex:1;width:100%;height:100px;min-width:100%;min-height:100%}.app-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column}.app-sidenav[_ngcontent-%COMP%]{width:240px}.wrapper[_ngcontent-%COMP%]{margin:50px}"]}),n})(),R=(()=>{class n{constructor(e,o){e.addSvgIconSet(o.bypassSecurityTrustHtml("assets/avatars.svg"))}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.jv),t.Y36(O.H7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contactmanager-app"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"app-sidenav")},dependencies:[k]}),n})();var z=i(4100),d=i(3546),_=i(3848),X=i(1572),s=i(671),U=i(8739),T=i(6308);function W(n,a){1&n&&(t.TgZ(0,"th",13),t._uU(1," No. "),t.qZA())}function E(n,a){if(1&n&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function G(n,a){1&n&&(t.TgZ(0,"th",13),t._uU(1," Title "),t.qZA())}function $(n,a){if(1&n&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.title," ")}}function K(n,a){1&n&&(t.TgZ(0,"th",13),t._uU(1," Date "),t.qZA())}function V(n,a){if(1&n&&(t.TgZ(0,"td",14),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.date,"dd-MM-yyyy")," ")}}function tt(n,a){1&n&&t._UZ(0,"tr",15)}function et(n,a){1&n&&t._UZ(0,"tr",16)}function nt(n,a){if(1&n&&(t.TgZ(0,"tr",17)(1,"td",18)(2,"span"),t._uU(3),t.qZA()()()),2&n){t.oxw();const e=t.MAs(5);t.xp6(3),t.hij('No data found for: "',e.value,'"')}}const ot=function(){return[3,5,10,20]};let at=(()=>{class n{ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}constructor(){this.displayedColumns=["position","title","date"],this.dataSource=new s.by}ngOnInit(){this.dataSource=new s.by(this.notes)}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-notes"]],viewQuery:function(e,o){if(1&e&&(t.Gf(U.NW,5),t.Gf(T.YE,5)),2&e){let r;t.iGM(r=t.CRH())&&(o.paginator=r.first),t.iGM(r=t.CRH())&&(o.sort=r.first)}},inputs:{notes:"notes"},decls:20,vars:6,consts:[[1,"mat-elevation-z8"],["matInput","","placeholder","Type something!",3,"keyup"],["input",""],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","date"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field")(2,"mat-label"),t._uU(3,"Filter"),t.qZA(),t.TgZ(4,"input",1,2),t.NdJ("keyup",function(c){return o.applyFilter(c)}),t.qZA()(),t.TgZ(6,"table",3),t.ynx(7,4),t.YNc(8,W,2,0,"th",5),t.YNc(9,E,2,1,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,G,2,0,"th",5),t.YNc(12,$,2,1,"td",6),t.BQk(),t.ynx(13,8),t.YNc(14,K,2,0,"th",5),t.YNc(15,V,3,4,"td",6),t.BQk(),t.YNc(16,tt,1,0,"tr",9),t.YNc(17,et,1,0,"tr",10),t.YNc(18,nt,4,1,"tr",11),t.qZA(),t._UZ(19,"mat-paginator",12),t.qZA()),2&e&&(t.xp6(6),t.Q6J("dataSource",o.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(2),t.Q6J("pageSize",2)("pageSizeOptions",t.DdM(5,ot)))},dependencies:[u.KE,u.hX,S.Nt,U.NW,T.YE,T.nU,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,s.Ee,m.uU],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%;padding-top:15px}"]}),n})();function it(n,a){1&n&&(t.TgZ(0,"div"),t._UZ(1,"mat-spinner"),t.qZA())}function rt(n,a){if(1&n&&(t.TgZ(0,"div")(1,"mat-card")(2,"mat-card-header"),t._UZ(3,"div",1),t.TgZ(4,"mat-card-title")(5,"h2"),t._uU(6),t.qZA()(),t.TgZ(7,"mat-card-subtitle"),t._uU(8),t.ALo(9,"date"),t.qZA()(),t.TgZ(10,"mat-card-content")(11,"mat-tab-group")(12,"mat-tab",2)(13,"p"),t._uU(14),t.qZA()(),t.TgZ(15,"mat-tab",3),t._UZ(16,"app-notes",4),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(6),t.Oqu(e.user.name),t.xp6(2),t.hij(" Birthday ",t.xi3(9,4,e.user.birthDate,"d LLLL")," "),t.xp6(6),t.Oqu(e.user.bio),t.xp6(2),t.Q6J("notes",e.user.notes)}}let w=(()=>{class n{constructor(e,o){this.route=e,this.service=o}ngOnInit(){this.route.params.subscribe(e=>{const o=e.id;this.service.users.subscribe(r=>{0!=r.length&&(this.user=this.service.userByid(o))})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz),t.Y36(h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main-content"]],decls:2,vars:2,consts:[[4,"ngIf"],["mat-card-avatar","",1,"example-header-image"],["label","Bio"],["label","Notes"],[3,"notes"]],template:function(e,o){1&e&&(t.YNc(0,it,2,0,"div",0),t.YNc(1,rt,17,7,"div",0)),2&e&&(t.Q6J("ngIf",!o.user),t.xp6(1),t.Q6J("ngIf",o.user))},dependencies:[m.O5,d.a8,d.dk,d.dn,d.n5,d.$j,d.kc,_.SP,_.uX,X.Ou,at,m.uU]}),n})();const st=[{path:"",component:R,children:[{path:":id",component:w},{path:"",component:w}]},{path:"**",redirectTo:"contactmanager"}];let lt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[h],imports:[m.ez,z.q,l.u5,M.JF,p.Bz.forChild(st),l.UX]}),n})()}}]);