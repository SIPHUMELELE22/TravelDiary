"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3257],{3257:(h,u,a)=>{a.r(u),a.d(u,{NewsPageModule:()=>w});var i=a(6814),g=a(95),t=a(3582),c=a(3044),o=a(6689),d=a(4884);function p(e,l){if(1&e&&(o.TgZ(0,"ion-row",8)(1,"ion-col")(2,"ion-thumbnail"),o._UZ(3,"img",9),o.qZA()(),o.TgZ(4,"ion-col",10)(5,"ion-label"),o._uU(6),o.TgZ(7,"p"),o._uU(8),o.ALo(9,"date"),o.qZA(),o.TgZ(10,"p",11),o._uU(11),o.qZA()()()()),2&e){const s=l.$implicit;let n,r;o.xp6(3),o.Q6J("src",null!==(n=s.urlToImage)&&void 0!==n?n:"../assets/icon/favicon.png",o.LSH),o.xp6(3),o.hij(" ",null!==(r=null==s?null:s.author)&&void 0!==r?r:"No Authour Name"," "),o.xp6(2),o.hij(" ",o.lcZ(9,4,s.publishedAt),""),o.xp6(3),o.hij(" ",s.title,"")}}const f=[{path:"",component:(()=>{var e;class l{constructor(n){this.newsFeedService=n,this.selectedCategory="sport",this.popularNews=[],n.getPopularNews().subscribe(r=>{console.log(r.articles),this.popularNews=r.articles}),n.getArticleByCategory(this.selectedCategory).subscribe(r=>{console.log(r)})}ngOnInit(){}}return(e=l).\u0275fac=function(n){return new(n||e)(o.Y36(d.L))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-news"]],decls:14,vars:2,consts:[[1,"ion-no-border"],["slot","start"],["default-href","#"],["slot","end"],["color","dark"],["slot","icon-only","ios","newspaper","md","newspaper"],[3,"fullscreen"],["style","background-color: #dedede52; border-radius: 16px;","class","ion-margin",4,"ngFor","ngForOf"],[1,"ion-margin",2,"background-color","#dedede52","border-radius","16px"],[3,"src"],["size","8"],[2,"font-weight","200px"]],template:function(n,r){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o._UZ(3,"ion-back-button",2),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"News"),o.qZA(),o.TgZ(6,"ion-buttons",3)(7,"ion-button",4),o._UZ(8,"ion-icon",5),o.qZA()()()(),o.TgZ(9,"ion-content",6)(10,"ion-list-header"),o._uU(11,"For You"),o.qZA(),o.TgZ(12,"ion-list"),o.YNc(13,p,12,6,"ion-row",7),o.qZA()()),2&n&&(o.xp6(9),o.Q6J("fullscreen",!0),o.xp6(4),o.Q6J("ngForOf",r.popularNews))},dependencies:[i.sg,t.YG,t.Sm,t.wI,t.W2,t.Gu,t.gu,t.Q$,t.q_,t.yh,t.Nd,t.Bs,t.wd,t.sr,t.oU,i.uU]}),l})()}];let m=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(f),c.Bz]}),l})(),w=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[i.ez,g.u5,t.Pc,m]}),l})()}}]);