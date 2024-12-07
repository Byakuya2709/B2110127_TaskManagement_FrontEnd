import{_ as g,b as u,r as f,o as r,c as d,a as t,w as c,v as h,t as v,d as n,e as _,f as b,g as w,h as y,i as k}from"./index-DyDoL_kO.js";const x={name:"Register",data(){return{fullname:"",email:"",birth:"",password:"",password_confirm:"",address:"",gender:"",imagePreview:"src/assets/data/img/deafaultAvatar.png",validated:{fullname:!1,email:!1,password:!1,passwordConfirm:!1,birth:!1,address:!1,gender:!1},showOtpModal:!1,otp:"",otpError:"",loading:!1}},watch:{fullname(s){this.validateFullname(s)},email(s){this.validateEmail(s)},password(s){this.validatePassword(s)},password_confirm(s){this.validatePasswordConfirm(s)},birth(s){const e=new Date(s),l=new Date,m=l.getFullYear()-e.getFullYear(),a=l.getMonth()-e.getMonth(),o=l.getDate()-e.getDate(),p=m>18||m===18&&(a>0||a===0&&o>=0),i=e<=l;this.validated.birth=p&&i,p?i||this.$toast.error("Ngày sinh không được vượt quá ngày hiện tại."):this.$toast.error("Bạn phải đủ 18 tuổi.")},address(s){this.validateAddress(s)},gender(s){this.validateGender(s)}},computed:{isValidated(){return this.validated.fullname&&this.validated.email&&this.validated.password&&this.validated.passwordConfirm&&this.validated.birth&&this.validated.address&&this.validated.gender}},methods:{async getVerificationCode(){if(!this.isValidated){this.$toast.error("Please fill out all required fields.");return}this.loading=!0;const s={email:this.email};try{const e=await u.post("/auth/generate",s);this.$toast.info(e.data.message),this.openModal()}catch(e){this.$toast.error(e.response.data.message)}finally{this.loading=!1}},async verifyOtp(){this.loading=!0;const s={email:this.email,code:this.otp,type:"registration"};try{const e=await u.post("/auth/verify",s);this.$toast.success(e.data.message),this.closeModal(),await this.completeRegistration()}catch(e){this.otpError=e.response.data.message||"Lỗi khi xác thực OTP"}finally{this.loading=!1}},async registerUser(){console.log(this.birth),await this.getVerificationCode()},async completeRegistration(){try{const s=new FormData;s.append("account",new Blob([JSON.stringify({fullname:this.fullname,email:this.email,birth:this.birth,password:this.password,password_confirm:this.password_confirm,address:this.address,gender:this.gender})],{type:"application/json"}));const e=document.getElementById("imageUpload");if(e.files[0])s.append("image",e.files[0]);else{const o=await(await fetch("src/assets/data/img/deafaultAvatar.png")).blob();s.append("image",o,"defaultAvatar.png")}const l=await u.post("/auth/register",s,{headers:{"Content-Type":"multipart/form-data"}});l.data.status==="CREATED"?(this.$toast.success(l.data.message+" . Đang chuyển sang trang đăng nhập"),setTimeout(()=>{this.$router.push("/login")},2e3)):this.$toast.info(l.data.message)}catch(s){this.$toast.error(s.response.data.message)}},resetForm(){this.$refs.registerForm.reset()},validateFullname(s){this.validated.fullname=s.length>=6},validateEmail(s){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.validated.email=e.test(s)},validatePassword(s){const e=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;this.validated.password=e.test(s)},validatePasswordConfirm(s){this.validated.passwordConfirm=s===this.password},validateBirth(s){this.validated.birth=!!s},validateAddress(s){this.validated.address=s.length>=6},validateGender(s){this.validated.gender=s!==""},openModal(){this.showOtpModal=!0},closeModal(){this.showOtpModal=!1,this.otp="",this.otpError=""},previewImage(s){const e=s.target;if(e.files&&e.files[0]){const l=e.files[0],m=2*1024*1024;if(l.size>m){this.$toast.error("Kích thước tệp quá lớn. Vui lòng chọn tệp nhỏ hơn 2MB."),this.imagePreview="";return}const a=new FileReader;a.onload=o=>{this.imagePreview=o.target.result},a.readAsDataURL(l)}else this.imagePreview=""}}},M={class:"register bg-light",style:{padding:"4rem"}},V={key:0,class:"modal",style:{display:"block","background-color":"rgba(0, 0, 0, 0.5)"}},C={class:"modal-dialog"},N={class:"modal-content"},U={class:"modal-header"},E=t("h5",{class:"modal-title"},"Nhập mã OTP",-1),P={class:"modal-body"},A={key:0,class:"text-danger mt-1"},D={class:"modal-footer"},F={class:"d-flex justify-content-center align-items-center vh-100"},T={class:"d-flex mt-5 mb-5 w-100"},O={class:"bg-white w-100 p-4 border border-dark"},q=t("h1",{class:"text-dark text-center mb-4"},"Đăng Ký",-1),B={class:"mb-3"},I=t("label",{for:"fullname",class:"form-label"},"Họ và Tên",-1),R={key:0,class:"text-danger mt-1"},j={class:"mb-3"},L=t("label",{for:"email",class:"form-label"},"Email",-1),S={key:0,class:"text-danger mt-1"},z={class:"mb-3"},G=t("label",{for:"password",class:"form-label"},"Mật khẩu",-1),K={key:0,class:"text-danger mt-1"},H={class:"mb-3"},X=t("label",{for:"password_confirm",class:"form-label"},"Nhập lại mật khẩu",-1),Y=["disabled"],J={key:0},Z={key:0,class:"text-danger mt-1"},Q={class:"row"},W={class:"mb-3 col-md-6"},$=t("label",{for:"birth",class:"form-label"},"Ngày/Tháng/Năm sinh",-1),ee={key:0,class:"text-danger mt-1"},te={class:"mb-3 col-md-6"},se=t("label",{for:"address",class:"form-label"},"Địa chỉ",-1),ae={key:0,class:"text-danger mt-1"},ie={class:"mb-3"},oe=t("label",{for:"gender",class:"form-label"},"Giới tính",-1),le=t("option",{value:"",disabled:"",selected:""},"Chọn giới tính",-1),re=t("option",{value:"MALE"},"Nam",-1),de=t("option",{value:"FEMALE"},"Nữ",-1),ne=[le,re,de],ce={key:0,class:"text-danger mt-1"},he={class:"d-flex justify-content-center mb-3"},me=["disabled"],pe={class:"d-flex justify-content-center"},ue=t("p",{class:"text-muted"},"Đã có tài khoản?",-1),ge={class:"custom-file"},fe=t("label",{class:"custom-file-label",for:"imageUpload"},"Tải hình ảnh lên:",-1),ve=["src"];function _e(s,e,l,m,a,o){const p=f("router-link");return r(),d("div",M,[a.showOtpModal?(r(),d("div",V,[t("div",C,[t("div",N,[t("div",U,[E,t("button",{type:"button",class:"close",onClick:e[0]||(e[0]=(...i)=>o.closeModal&&o.closeModal(...i))}," × ")]),t("div",P,[c(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>a.otp=i),type:"text",class:"form-control",placeholder:"Nhập mã xác thực"},null,512),[[h,a.otp]]),a.otpError?(r(),d("p",A,v(a.otpError),1)):n("",!0)]),t("div",D,[t("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...i)=>o.verifyOtp&&o.verifyOtp(...i))}," Xác nhận "),t("button",{type:"button",class:"btn btn-secondary",onClick:e[3]||(e[3]=(...i)=>o.closeModal&&o.closeModal(...i))}," Đóng ")])])])])):n("",!0),t("div",F,[t("div",T,[t("div",O,[q,t("form",{onSubmit:e[12]||(e[12]=_((...i)=>o.registerUser&&o.registerUser(...i),["prevent"])),ref:"registerForm"},[t("div",B,[I,c(t("input",{required:"",id:"fullname",type:"text",placeholder:"Tên đầy đủ...","onUpdate:modelValue":e[4]||(e[4]=i=>a.fullname=i),class:"form-control"},null,512),[[h,a.fullname]]),a.validated.fullname?n("",!0):(r(),d("p",R," Tên người dùng không được dưới 6 kí tự. "))]),t("div",j,[L,c(t("input",{id:"email",required:"",type:"email",placeholder:"Email","onUpdate:modelValue":e[5]||(e[5]=i=>a.email=i),autocomplete:"off",class:"form-control"},null,512),[[h,a.email]]),a.validated.email?n("",!0):(r(),d("p",S," Vui lòng nhập email hợp lệ. "))]),t("div",z,[G,c(t("input",{id:"password",required:"",type:"password",placeholder:"Mật khẩu...","onUpdate:modelValue":e[6]||(e[6]=i=>a.password=i),class:"form-control"},null,512),[[h,a.password]]),a.validated.password?n("",!0):(r(),d("p",K," Mật khẩu phải gồm ít nhất 8 kí tự bao gồm chữ thường/HOA và 1 số. "))]),t("div",H,[X,c(t("input",{id:"password_confirm",required:"",type:"password",placeholder:"Nhập lại mật khẩu","onUpdate:modelValue":e[7]||(e[7]=i=>a.password_confirm=i),class:"form-control",disabled:!a.validated.password},null,8,Y),[[h,a.password_confirm]]),a.validated.password?(r(),d("div",J,[a.validated.passwordConfirm?n("",!0):(r(),d("p",Z," Vui lòng nhập đúng lại mật khẩu đã nhập. "))])):n("",!0)]),t("div",Q,[t("div",W,[$,c(t("input",{id:"birth",required:"",type:"date",placeholder:"Ngày sinh","onUpdate:modelValue":e[8]||(e[8]=i=>a.birth=i),class:"form-control"},null,512),[[h,a.birth]]),a.validated.birth?n("",!0):(r(),d("p",ee," Vui lòng nhập ngày sinh. "))]),t("div",te,[se,c(t("input",{required:"",id:"address",type:"text",placeholder:"Địa chỉ","onUpdate:modelValue":e[9]||(e[9]=i=>a.address=i),class:"form-control"},null,512),[[h,a.address]]),a.validated.address?n("",!0):(r(),d("p",ae," Địa chỉ không được dưới 6 kí tự "))])]),t("div",ie,[oe,c(t("select",{id:"gender","onUpdate:modelValue":e[10]||(e[10]=i=>a.gender=i),class:"form-select"},ne,512),[[b,a.gender]]),a.validated.gender?n("",!0):(r(),d("p",ce," Vui lòng chọn giới tính "))]),t("div",he,[t("input",{type:"submit",value:"Đăng Ký",class:"btn btn-primary w-50",disabled:!o.isValidated||a.loading},null,8,me),t("button",{type:"button",onClick:e[11]||(e[11]=(...i)=>o.resetForm&&o.resetForm(...i)),class:"btn btn-secondary ms-3"}," Xóa ")])],544),t("div",pe,[ue,w(p,{to:"/login",class:"text-primary ms-1"},{default:y(()=>[k("Đăng Nhập")]),_:1})])]),t("div",ge,[fe,t("input",{class:"custom-file-input",type:"file",id:"imageUpload",onChange:e[13]||(e[13]=(...i)=>o.previewImage&&o.previewImage(...i)),accept:"image/png, image/jpeg"},null,32),a.imagePreview?(r(),d("img",{key:0,src:a.imagePreview,alt:"Image Preview",style:{"max-height":"300px","margin-top":"10px"}},null,8,ve)):n("",!0)])])])])}const we=g(x,[["render",_e]]);export{we as default};
