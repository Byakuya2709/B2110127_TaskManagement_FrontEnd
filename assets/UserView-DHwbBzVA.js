import{_ as v,r as o,o as t,c as s,a,d as c,t as n,F as d,k as u,g as h,h as _}from"./index-DyDoL_kO.js";const m={name:"User",computed:{user(){return this.$authStore.user},role(){return this.$authStore.role},avatar(){return this.$authStore.avatar},navItems(){return[{name:"Trang Cá Nhân",path:"/user/profile",iconPath:"M8 3.5a.5.5 0 0 1 .5.5v4h3.5a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5z M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8z"},{name:"Quản Lý Tác Vụ",path:"/user/tasks",iconPath:"M2 3.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1zm11-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v.5H2v10h12v-10h-1z M9 8H7v4h2V8zm1-3H6v2h4V5z"},{name:"Quản Lý Công Việc",path:"/user/all-request",iconPath:"M2 3.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1zm11-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v.5H2v10h12v-10h-1z M9 8H7v4h2V8zm1-3H6v2h4V5z"},{name:"Tạo Tác Vụ",path:"/user/newtask",iconPath:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5z M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8z"},{name:"Thay đổi thông tin cá nhân",path:"/user/updateprofile",iconPath:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5z M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8z"}]}}},p={id:"user",class:"d-flex"},V={id:"logo-sidebar",class:"sidebar"},f={class:"h-100 px-3 pt-4 pb-2 overflow-auto"},z={class:"nav flex-column"},g={class:"user-info mt-4 d-flex align-items-center",style:{"flex-direction":"column"}},x=["src"],M={class:"ms-3"},w={class:"user-name"},k={key:0,class:"user-role"},H={class:"bi text-secondary","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",width:"20",height:"20"},y=["d"],A={class:"ms-2"},C={class:"container col-10",style:{"margin-left":"10px"}};function P(b,T,B,N,S,e){const i=o("router-link"),l=o("RouterView");return t(),s("div",p,[a("div",V,[a("div",f,[a("ul",z,[a("div",g,[e.avatar?(t(),s("img",{key:0,src:e.avatar,alt:"User Avatar",class:"avatar"},null,8,x)):c("",!0),a("div",M,[a("p",w,n(e.user.name),1),e.role?(t(),s("p",k,n(e.role),1)):c("",!0)])]),(t(!0),s(d,null,u(e.navItems,r=>(t(),s("li",{class:"nav-item mb-2",key:r.name},[h(i,{to:r.path,class:"nav-link"},{default:_(()=>[(t(),s("svg",H,[a("path",{d:r.iconPath},null,8,y)])),a("span",A,n(r.name),1)]),_:2},1032,["to"])]))),128))])])]),a("div",C,[h(l)])])}const L=v(m,[["render",P],["__scopeId","data-v-78e8c2c5"]]);export{L as default};
