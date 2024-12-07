import{_,b as d,o as i,c as u,a as s,t as r,i as a,d as g,F as p,k as m,n as f,e as k,p as b,l as T}from"./index-DyDoL_kO.js";const I={data(){return{user:{},tasks:[]}},created(){this.fetchUser()},watch:{"$route.params.userId":"fetchUser"},methods:{async fetchUser(){try{const e=this.$route.params.userId,l=await d.get(`/user/${e}`);this.user=l.data.data,await this.fetchTask()}catch(e){console.error("Error fetching user:",e)}},async fetchTask(){try{const e=this.$route.params.userId,l=await d.get(`/user/${e}/tasks`);this.tasks=l.data.data}catch(e){console.error("Error fetching user tasks:",e)}},goToTaskDetail(e){this.$router.replace({name:"TaskInfo",params:{taskId:e}})},goToTaskUpdate(e){this.$router.push({name:"TaskUpdate",params:{taskId:e}})},formatDate(e){const l={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString(void 0,l)},translateGender(e){switch(e){case"FEMALE":return"Nữ";case"MALE":return"Nam";default:return"Không rõ"}},taskBadges(e){return{"badge-success":e.status==="COMPLETED","badge-warning":e.status==="PENDING","badge-danger":e.status==="CANCELED","badge-info":e.status==="IN_PROGRESS"}}}},n=e=>(b("data-v-9d67415b"),e=e(),T(),e),v={class:"container"},y={class:"user-info"},D=["src"],E=n(()=>s("strong",null,"Địa chỉ:",-1)),N=n(()=>s("strong",null,"Ngày sinh:",-1)),C=n(()=>s("strong",null,"Giới tính:",-1)),w=n(()=>s("strong",null,"Thông tin chi tiết:",-1)),U=n(()=>s("strong",null,"Địa chỉ:",-1)),G=n(()=>s("strong",null,"Ngày sinh:",-1)),S=n(()=>s("strong",null,"Giới tính:",-1)),L=n(()=>s("strong",null,"Thông tin chi tiết:",-1)),A={class:"tasks"},B=n(()=>s("h2",null,"Tác vụ:",-1)),x={key:0,class:"no-tasks"},M=n(()=>s("p",null,"Không có tác vụ nào được phân công.",-1)),P=[M],F=["onClick"],V=n(()=>s("strong",null,"Ngày hoàn thành:",-1)),K=["onClick"];function O(e,l,R,z,t,o){return i(),u("div",v,[s("div",y,[s("img",{src:t.user.base64Image?"data:image/png;base64,"+t.user.base64Image:"src/assets/data/img/defaultAvatar.png",alt:"User Avatar",class:"avatar"},null,8,D),s("h1",null,r(t.user.fullname),1),s("p",null,[E,a(" "+r(t.user.address),1)]),s("p",null,[N,a(" "+r(o.formatDate(t.user.birth)),1)]),s("p",null,[C,a(" "+r(o.translateGender(t.user.gender)),1)]),s("p",null,[w,a(" "+r(t.user.detail),1)]),s("p",null,[U,a(" "+r(t.user.address),1)]),s("p",null,[G,a(" "+r(o.formatDate(t.user.birth)),1)]),s("p",null,[S,a(" "+r(o.translateGender(t.user.gender)),1)]),s("p",null,[L,a(" "+r(t.user.detail),1)])]),s("div",A,[B,t.tasks.length===0?(i(),u("div",x,P)):g("",!0),(i(!0),u(p,null,m(t.tasks,c=>(i(),u("div",{key:c.id,class:"task"},[s("div",{onClick:h=>o.goToTaskDetail(c.id)},[s("h5",null,r(c.title),1),s("p",null,r(c.description),1),s("p",null,[V,a(" "+r(o.formatDate(c.date)),1)]),s("span",{class:f(["badge",o.taskBadges(c)])},r(c.status),3)],8,F),s("button",{onClick:k(h=>o.goToTaskUpdate(c.id),["stop"]),class:"btn btn-secondary update-button"}," Cập nhật ",8,K)]))),128))])])}const q=_(I,[["render",O],["__scopeId","data-v-9d67415b"]]);export{q as default};