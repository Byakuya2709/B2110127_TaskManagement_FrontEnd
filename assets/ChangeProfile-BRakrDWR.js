import{_ as v,b as g,m as f,o as h,c,a as s,e as b,d as p,w as n,v as m,f as _,p as y,l as w}from"./index-DyDoL_kO.js";const x={name:"UpdateProfile",data(){return{fullname:"",email:"",birth:"",address:"",gender:"",detail:"",imagePreview:"src/assets/data/img/defaultAvatar.png",loading:!1,validated:{fullname:!1,email:!1,password:!1,passwordConfirm:!1,birth:!1,address:!1,gender:!1},otp:"",otpModalVisible:!1}},computed:{userId(){return this.$authStore.userId},isValidated(){return this.validated.fullname&&this.validated.email&&this.validated.birth&&this.validated.address&&this.validated.gender}},watch:{fullname(t){this.validateFullname(t)},email(t){this.validateEmail(t)},birth(t){this.validateBirth(t)},address(t){this.validateAddress(t)},gender(t){this.validateGender(t)}},methods:{validateFullname(t){this.validated.fullname=t.length>6},validateEmail(t){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.validated.email=e.test(t)},validateBirth(t){const e=new Date(t),l=new Date,r=l.getFullYear()-e.getFullYear(),i=l.getMonth()-e.getMonth(),o=l.getDate()-e.getDate(),a=r>18||r===18&&(i>0||i===0&&o>=0),u=e<=l;this.validated.birth=a&&u},validateAddress(t){this.validated.address=t.length>6},validateGender(t){this.validated.gender=t!==""},async loadUserProfile(){try{const t=await g.get(`/user/${this.userId}`);if(t.data.status==="OK"){const{fullname:e,birth:l,address:r,gender:i,base64Image:o,email:a,detail:u}=t.data.data;this.fullname=e,this.email=a,this.birth=l?new Date(l).toISOString().split("T")[0]:"",this.address=r,this.gender=i,this.detail=u,this.imagePreview=o?`data:image/png;base64,${o}`:this.imagePreview}else this.$toast.error("Lỗi khi tải thông tin người dùng.")}catch{this.$toast.error("Không thể tải thông tin người dùng.")}},async generateOtp(){this.loading=!0;try{const t=await f.post("http://localhost:8081/api/otp2/generate",{email:this.email,type:"update-profile"});this.$toast.success(t.data.message),this.otpModalVisible=!0}catch{this.$toast.error("Có lỗi xảy ra khi gửi mã OTP.")}finally{this.loading=!1}},async verifyOtp(){var t,e;this.loading=!0;try{const l=await f.post("http://localhost:8081/api/otp2/verify",{email:this.email,code:this.otp,type:"update-profile"});this.$toast.success("Xác thực mã OTP thành công."),this.otpModalVisible=!1,setTimeout(async()=>{await this.updateUserProfile()},1e3)}catch(l){this.$toast.error(((e=(t=l.response)==null?void 0:t.data)==null?void 0:e.message)||"Có lỗi xảy ra khi xác thực mã OTP.")}finally{this.loading=!1}},async updateUserProfile(){var t,e;this.loading=!0;try{const l=new FormData;l.append("user",new Blob([JSON.stringify({fullname:this.fullname,birth:this.birth,address:this.address,gender:this.gender,detail:this.detail})],{type:"application/json"}));const r=document.getElementById("imageUpload");r.files[0]&&l.append("image",r.files[0]);const i=await g.put(`/user/update-profile/${this.userId}`,l,{headers:{"Content-Type":"multipart/form-data"}});this.$toast.success(i.data.message),setTimeout(()=>{this.$router.replace("/user/profile")},3e3)}catch(l){this.$toast.error(((e=(t=l.response)==null?void 0:t.data)==null?void 0:e.message)||"Có lỗi xảy ra trong quá trình cập nhật.")}finally{this.loading=!1}},previewImage(t){const e=t.target.files[0];if(e){const l=new FileReader;l.onload=r=>{this.imagePreview=r.target.result},l.readAsDataURL(e)}else this.imagePreview="src/assets/data/img/defaultAvatar.png"}},mounted(){this.loadUserProfile()}},d=t=>(y("data-v-e2dc34a7"),t=t(),w(),t),P={class:"update-profile bg-light",style:{padding:"4rem"}},k={class:"d-flex justify-content-center align-items-center vh-100"},T={class:"d-flex mt-5 mb-5 w-100"},I={class:"bg-white w-100 p-4 border border-dark"},U=d(()=>s("h1",{class:"text-dark text-center mb-4"},"Cập Nhật Thông Tin Cá Nhân",-1)),V={class:"mb-3"},C={class:"custom-file mt-4"},O=d(()=>s("label",{class:"custom-file-label border",for:"imageUpload"},"Tải hình ảnh mới:",-1)),D={key:0,class:"image-preview-container"},M=["src"],N=d(()=>s("label",{for:"fullname",class:"form-label"},"Họ và Tên",-1)),E={key:0,class:"text-danger mt-1"},F={class:"mb-3"},S=d(()=>s("label",{for:"email",class:"form-label"},"Email",-1)),A={class:"row"},B={class:"mb-3 col-md-6"},q=d(()=>s("label",{for:"birth",class:"form-label"},"Ngày/Tháng/Năm sinh",-1)),L={key:0,class:"text-danger mt-1"},j={class:"mb-3 col-md-6"},G=d(()=>s("label",{for:"address",class:"form-label"},"Địa chỉ",-1)),R={key:0,class:"text-danger mt-1"},K={class:"mb-3"},X=d(()=>s("label",{for:"gender",class:"form-label"},"Giới tính",-1)),Y=d(()=>s("option",{value:"",disabled:"",selected:""},"Chọn giới tính",-1)),H=d(()=>s("option",{value:"MALE"},"Nam",-1)),J=d(()=>s("option",{value:"FEMALE"},"Nữ",-1)),z=[Y,H,J],Q={class:"mb-3"},W=d(()=>s("label",{for:"detail",class:"form-label"},"Chi tiết",-1)),Z={class:"d-flex justify-content-center mb-3"},$=["disabled"],ee={key:0,class:"modal"},te={class:"modal-content"},se=d(()=>s("h2",null,"Nhập mã OTP",-1));function ie(t,e,l,r,i,o){return h(),c("div",P,[s("div",k,[s("div",T,[s("div",I,[U,s("form",{onSubmit:e[7]||(e[7]=b((...a)=>o.generateOtp&&o.generateOtp(...a),["prevent"])),ref:"updateProfileForm"},[s("div",V,[s("div",C,[O,s("input",{class:"custom-file-input btn-primary btn",type:"file",id:"imageUpload",onChange:e[0]||(e[0]=(...a)=>o.previewImage&&o.previewImage(...a)),accept:"image/png, image/jpeg"},null,32),i.imagePreview?(h(),c("div",D,[s("img",{src:i.imagePreview,alt:"Image Preview",class:"image-preview"},null,8,M)])):p("",!0)]),N,n(s("input",{id:"fullname",type:"text",placeholder:"Tên đầy đủ...","onUpdate:modelValue":e[1]||(e[1]=a=>i.fullname=a),class:"form-control",required:""},null,512),[[m,i.fullname]]),i.validated.fullname?p("",!0):(h(),c("p",E," Tên người dùng không được dưới 6 kí tự. "))]),s("div",F,[S,n(s("input",{id:"email",type:"email",placeholder:"Email","onUpdate:modelValue":e[2]||(e[2]=a=>i.email=a),class:"form-control",disabled:""},null,512),[[m,i.email]])]),s("div",A,[s("div",B,[q,n(s("input",{id:"birth",type:"date","onUpdate:modelValue":e[3]||(e[3]=a=>i.birth=a),class:"form-control",required:""},null,512),[[m,i.birth]]),i.validated.birth?p("",!0):(h(),c("p",L," Bạn phải đủ 18 tuổi. "))]),s("div",j,[G,n(s("input",{id:"address",type:"text",placeholder:"Địa chỉ","onUpdate:modelValue":e[4]||(e[4]=a=>i.address=a),class:"form-control",required:""},null,512),[[m,i.address]]),i.validated.address?p("",!0):(h(),c("p",R," Địa chỉ không được dưới 6 kí tự "))])]),s("div",K,[X,n(s("select",{id:"gender","onUpdate:modelValue":e[5]||(e[5]=a=>i.gender=a),class:"form-select",required:""},z,512),[[_,i.gender]])]),s("div",Q,[W,n(s("textarea",{id:"detail","onUpdate:modelValue":e[6]||(e[6]=a=>i.detail=a),placeholder:"Chi tiết thêm...",class:"form-control",rows:"3"},null,512),[[m,i.detail]])]),s("div",Z,[s("input",{type:"submit",value:"Gửi OTP",class:"btn btn-primary w-50",disabled:!o.isValidated||i.loading},null,8,$)])],544)])])]),i.otpModalVisible?(h(),c("div",ee,[s("div",te,[s("span",{class:"close",onClick:e[8]||(e[8]=a=>i.otpModalVisible=!1)},"×"),se,n(s("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=a=>i.otp=a),placeholder:"Nhập mã OTP"},null,512),[[m,i.otp]]),s("button",{onClick:e[10]||(e[10]=(...a)=>o.verifyOtp&&o.verifyOtp(...a))},"Xác thực")])])):p("",!0)])}const le=v(x,[["render",ie],["__scopeId","data-v-e2dc34a7"]]);export{le as default};
