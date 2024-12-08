import{_ as f,b as v,o as d,c as o,a as e,w as r,v as p,n as c,d as h,f as m,F as _,k,e as b,t as g,q as y}from"./index-B8bC3NQi.js";const T={name:"EditTask",data(){return{users:[],task:null,title:"",description:"",date:"",status:"",userId:"",validate:{title:!1,description:!1,date:!1,status:!1,user:!1}}},async created(){await this.fetchAllUser(),await this.fetchTask()},methods:{async fetchAllUser(){try{const t=await v.get("/admin/user/all");this.users=t.data.data}catch(t){this.$toast.error(t.response.data.message)}},async fetchTask(){var t,i;try{const l=(await v.get(`/admin/task/${this.$route.params.id}`)).data.data;this.task=l,this.title=l.title,this.description=l.description,this.date=l.date.split("T")[0],this.status=l.status,this.userId=l.userId,this.validateTitle(this.title),this.validateDescription(this.description),this.validateDate(this.date),this.validateStatus(this.status),this.validateUser(this.userId)}catch(n){console.log(n);const l=((i=(t=n.response)==null?void 0:t.data)==null?void 0:i.message)||n;this.$toast.error(l)}},async editTask(){if(!this.isValidated){this.$toast.error("Please fill out all required fields.");return}try{const t={title:this.title,description:this.description,date:this.date,status:this.status,userId:this.userId},i=await v.put(`/admin/task/update/${this.task.id}`,t);this.$toast.success(i.data.message),setTimeout(()=>{this.$router.push("/admin/manage/tasks")},2e3)}catch(t){this.$toast.error(t.response.data.message)}},validateTitle(t){this.validate.title=t.length>=6},validateDescription(t){this.validate.description=t.length>=10},validateDate(t){this.validate.date=!!t},validateStatus(t){this.validate.status=!!t},validateUser(t){this.validate.user=!!t}},watch:{title(t){this.validateTitle(t)},description(t){this.validateDescription(t)},date(t){this.validateDate(t)},status(t){this.validateStatus(t)},userId(t){this.validateUser(t)}},computed:{isValidated(){return this.validate.title&&this.validate.description&&this.validate.date&&this.validate.status&&this.validate.user}}},I={class:"mb-3"},D=e("label",{for:"title",class:"form-label"},"Tiêu đề:",-1),N={key:0,class:"invalid-feedback"},S={class:"mb-3"},V=e("label",{for:"description",class:"form-label"},"Mô tả:",-1),U={key:0,class:"invalid-feedback"},w={class:"mb-3"},E=e("label",{for:"date",class:"form-label"},"Ngày hoàn thành:",-1),C={key:0,class:"invalid-feedback"},x={class:"mb-3"},M=e("label",{for:"userId",class:"form-label"},"Nhân viên:",-1),P=e("option",{value:"",disabled:""},"Select a user",-1),A=["value"],B={key:0,class:"invalid-feedback"},L={class:"mb-3"},q=e("label",{for:"status",class:"form-label"},"Trạng thái:",-1),F=y('<option value="" disabled>Select status</option><option value="PENDING">Pending</option><option value="IN_PROGRESS">In Progress</option><option value="COMPLETED">Completed</option><option value="CANCELED">Canceled</option>',5),G=[F],O={key:0,class:"invalid-feedback"},R=["disabled"];function z(t,i,n,l,s,u){return d(),o("div",null,[e("form",{onSubmit:i[5]||(i[5]=b((...a)=>u.editTask&&u.editTask(...a),["prevent"]))},[e("div",I,[D,r(e("input",{type:"text",class:c(["form-control",{"is-invalid":!s.validate.title}]),id:"title","onUpdate:modelValue":i[0]||(i[0]=a=>s.title=a),disabled:""},null,2),[[p,s.title]]),s.validate.title?h("",!0):(d(),o("div",N," Tiêu đề không được ít hơn 6 kí tự. "))]),e("div",S,[V,r(e("textarea",{class:c(["form-control",{"is-invalid":!s.validate.description}]),id:"description","onUpdate:modelValue":i[1]||(i[1]=a=>s.description=a)},null,2),[[p,s.description]]),s.validate.description?h("",!0):(d(),o("div",U," Mô tả không được ít hơn 10 kí tự. "))]),e("div",w,[E,r(e("input",{type:"date",class:c(["form-control",{"is-invalid":!s.validate.date}]),id:"date","onUpdate:modelValue":i[2]||(i[2]=a=>s.date=a)},null,2),[[p,s.date]]),s.validate.date?h("",!0):(d(),o("div",C," Ngày hoàn thành không được bỏ trống. "))]),e("div",x,[M,r(e("select",{class:c(["form-select",{"is-invalid":!s.validate.user}]),id:"userId","onUpdate:modelValue":i[3]||(i[3]=a=>s.userId=a)},[P,(d(!0),o(_,null,k(s.users,a=>(d(),o("option",{key:a.id,value:a.id},g(a.fullname),9,A))),128))],2),[[m,s.userId]]),s.validate.user?h("",!0):(d(),o("div",B," Nhân viên thực hiện tác vụ không được bỏ trống. "))]),e("div",L,[q,r(e("select",{class:c(["form-select",{"is-invalid":!s.validate.status}]),id:"status","onUpdate:modelValue":i[4]||(i[4]=a=>s.status=a)},G,2),[[m,s.status]]),s.validate.status?h("",!0):(d(),o("div",O," Trạng thái tác vụ không được bỏ trống. "))]),e("button",{type:"submit",class:"btn btn-primary",disabled:!u.isValidated}," Cập nhật ",8,R)],32)])}const H=f(T,[["render",z]]);export{H as default};