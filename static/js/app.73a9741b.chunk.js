(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{202:function(e,t,a){e.exports={header:"JobList_header__23tFt",headerTitle:"JobList_headerTitle__21D__",headerLink:"JobList_headerLink__2zepi",headerLinkIcon:"JobList_headerLinkIcon__XdfBB",controlContainer:"JobList_controlContainer__3Yzj_",controlRight:"JobList_controlRight__38lfB"}},203:function(e,t,a){e.exports={list:"FormErrorBox_list__3BejY"}},204:function(e,t,a){e.exports={headerTitle:"ParameterFields_headerTitle__IBF76"}},205:function(e,t,a){e.exports={formButtonContainer:"JobAddForm_formButtonContainer__1MLSp",saveButton:"JobAddForm_saveButton__RfxZ9"}},206:function(e,t,a){e.exports={formButtonContainer:"JobEditForm_formButtonContainer__2b6Fi",deleteButton:"JobEditForm_deleteButton__VQxBE",saveButton:"JobEditForm_saveButton__278Ab"}},213:function(e,t,a){e.exports={wrapper:"JobDetails_wrapper__1-YkO",title:"JobDetails_title__1Cht7",details:"JobDetails_details__2HITJ"}},214:function(e,t,a){e.exports={pageHeader:"JobEdit_pageHeader__3Fywp",pageHeaderButton:"JobEdit_pageHeaderButton__29yjJ",pageHeaderTitle:"JobEdit_pageHeaderTitle__jZrIG",card:"JobEdit_card__2QqEg",cardHeader:"JobEdit_cardHeader__Mv_cj",cardHeaderTitle:"JobEdit_cardHeaderTitle__29Y64",cardHeaderInfo:"JobEdit_cardHeaderInfo__3VWZt",cardHeaderLink:"JobEdit_cardHeaderLink__2frj7",jobDetails:"JobEdit_jobDetails__194v-"}},215:function(e,t,a){e.exports={pageHeader:"JobAdd_pageHeader__2NZzc",pageHeaderButton:"JobAdd_pageHeaderButton__Xg_R9",pageHeaderTitle:"JobAdd_pageHeaderTitle__1RMl0",card:"JobAdd_card__1HH6H",cardHeader:"JobAdd_cardHeader__1D3sS",cardHeaderTitle:"JobAdd_cardHeaderTitle__2TG9a",cardHeaderInfo:"JobAdd_cardHeaderInfo__vq_Y1",cardHeaderLink:"JobAdd_cardHeaderLink__2CzPt"}},216:function(e,t,a){e.exports={noticeBoxWrapper:"AuthWall_noticeBoxWrapper__1ums5"}},217:function(e,t,a){e.exports={wrapper:"PageWrapper_wrapper__t-CJy"}},218:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"useAllJobs",(function(){return h})),a.d(r,"useAllParameterOptions",(function(){return g})),a.d(r,"useAllJobTypes",(function(){return _})),a.d(r,"useRefetchJobs",(function(){return f})),a.d(r,"useJobFilter",(function(){return y})),a.d(r,"useShowSystemJobs",(function(){return v})),a.d(r,"useJobListJobs",(function(){return T})),a.d(r,"useJob",(function(){return j})),a.d(r,"useJobType",(function(){return N})),a.d(r,"useJobTypeParameters",(function(){return C})),a.d(r,"useParameterOptions",(function(){return S}));var n=a(1),l=a.n(n),s=a(181),o=a(219),c=a(182),i=a(13);var u=Object(n.createContext)({jobs:{},jobTypes:{},parameterOptions:{},refetchJobs:()=>{throw new Error("Store context needs a valid provider")}});const m={jobs:{resource:"jobConfigurations",params:{fields:"*",paging:!1}}},d={jobTypes:{resource:"jobConfigurations/jobTypes",params:{fields:"*",paging:!1}}},E={skipTableTypes:{resource:"analytics/tableTypes"},validationRuleGroups:{resource:"validationRuleGroups",params:{paging:!1}},pushAnalysis:{resource:"pushAnalysis",params:{paging:!1}},predictors:{resource:"predictors",params:{paging:!1}},predictorGroups:{resource:"predictorGroups",params:{paging:!1}}},{node:p}=c.a;var b=({children:e})=>{const t=Object(n.useState)(""),a=Object(n.useState)(!1),r=Object(i.e)(m),o=Object(i.e)(d),c=Object(i.e)(E);if(r.loading||o.loading||c.loading)return l.a.createElement(s.o,null,l.a.createElement(s.e,null,l.a.createElement(s.g,null)));const p=r.error||o.error||c.error;if(p)throw p;const{jobConfigurations:b}=r.data.jobs,{jobTypes:h}=o.data.jobTypes,{skipTableTypes:g,validationRuleGroups:{validationRuleGroups:_},pushAnalysis:{pushAnalysis:f},predictors:{predictors:y},predictorGroups:{predictorGroups:v}}=c.data,T={skipTableTypes:g,validationRuleGroups:_,pushAnalysis:f,predictors:y,predictorGroups:v};return l.a.createElement(u.Provider,{value:{jobs:b,jobTypes:h,parameterOptions:T,refetchJobs:r.refetch,jobFilter:t,showSystemJobs:a}},e)};const h=()=>Object(n.useContext)(u).jobs,g=()=>Object(n.useContext)(u).parameterOptions,_=()=>Object(n.useContext)(u).jobTypes,f=()=>Object(n.useContext)(u).refetchJobs,y=()=>Object(n.useContext)(u).jobFilter,v=()=>Object(n.useContext)(u).showSystemJobs,T=()=>{const[e]=y(),[t]=v();return h().filter(t=>t.name.toLowerCase().includes(e.toLowerCase())).filter(e=>!!t||e.configurable)},j=e=>h().find(t=>t.id===e),N=e=>_().find(t=>t.jobType===e),C=e=>{const t=N(e);return"jobParameters"in t?t.jobParameters:[]},S=e=>g()[e];var O=a(8),x=a.n(O),A=a(193);var J=Object(A.a)();var R={DATA_VALUE:x.a.t("Data value"),COMPLETENESS:x.a.t("Completeness"),COMPLETENESS_TARGET:x.a.t("Completeness target"),ORG_UNIT_TARGET:x.a.t("Org unit target"),EVENT:x.a.t("Event"),ENROLLMENT:x.a.t("Enrollment"),VALIDATION_RESULT:x.a.t("Validation result")};var F={ANALYTICS_TABLE:x.a.t("Analytics table"),CONTINUOUS_ANALYTICS_TABLE:x.a.t("Continuous analytics table"),CREDENTIALS_EXPIRY_ALERT:x.a.t("Credentials expiry alert"),DATA_INTEGRITY:x.a.t("Data integrity"),DATA_SET_NOTIFICATION:x.a.t("Dataset notification"),DATA_STATISTICS:x.a.t("Data statistics"),DATA_SYNC:x.a.t("Data synchronization"),EVENT_PROGRAMS_DATA_SYNC:x.a.t("Event programs data sync"),FILE_RESOURCE_CLEANUP:x.a.t("File resource clean up"),META_DATA_SYNC:x.a.t("Metadata synchronization"),MONITORING:x.a.t("Monitoring"),PREDICTOR:x.a.t("Predictor"),PROGRAM_NOTIFICATIONS:x.a.t("Program notifications"),PUSH_ANALYSIS:x.a.t("Push analysis"),REMOVE_EXPIRED_RESERVED_VALUES:x.a.t("Remove expired reserved values"),RESOURCE_TABLE:x.a.t("Resource table"),SEND_SCHEDULED_MESSAGE:x.a.t("Send scheduled message"),TRACKER_PROGRAMS_DATA_SYNC:x.a.t("Tracker programs data sync"),VALIDATION_RESULTS_NOTIFICATION:x.a.t("Validation results notification")};var I={COMPLETED:x.a.t("Completed"),DISABLED:x.a.t("Disabled"),DONE:x.a.t("Done"),FAILED:x.a.t("Failed"),NOT_STARTED:x.a.t("Not started"),RUNNING:x.a.t("Running"),SCHEDULED:x.a.t("Scheduled"),STOPPED:x.a.t("Stopped")};const D={resource:"jobConfigurations",id:({id:e})=>e,type:"update",partial:!0,data:({enabled:e})=>({enabled:e})},{bool:L,string:k}=c.a;var P=({id:e,checked:t})=>{const[a,{loading:n}]=Object(i.d)(D),o=r.useRefetchJobs(),c=!t;return l.a.createElement(s.A,{name:"toggle-job-".concat(e),disabled:n,checked:t,onChange:()=>{a({id:e,enabled:c}).then(()=>o())}})};const{string:H}=c.a;var w=({id:e})=>l.a.createElement(s.p,{dense:!0,onClick:()=>J.push("/edit/".concat(e)),label:x.a.t("Edit")});const B=[{label:x.a.t("Every hour"),value:"0 0 * ? * *"},{label:x.a.t("Every day at midnight"),value:"0 0 1 ? * *"},{label:x.a.t("Every day at 3 am"),value:"0 0 3 ? * *"},{label:x.a.t("Every day at noon"),value:"0 0 12 ? * MON-FRI"},{label:x.a.t("Every week"),value:"0 0 3 ? * MON"}],{func:M}=c.a;var G=({setCron:e,hideModal:t})=>{const[a,r]=Object(n.useState)("");return l.a.createElement(s.q,{open:!0,small:!0,onClose:t},l.a.createElement(s.t,null,x.a.t("Choose a preset time/interval")),l.a.createElement(s.s,null,B.map(e=>l.a.createElement(s.x,Object.assign({},e,{checked:a===e.value,key:e.value,onChange:({value:e})=>r(e)})))),l.a.createElement(s.r,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{secondary:!0,onClick:t,name:"hide-modal"},x.a.t("Cancel")),l.a.createElement(s.b,{primary:!0,name:"insert-preset",disabled:!a,onClick:()=>{t(),e(a)}},x.a.t("Insert preset")))))};const U={resource:"jobConfigurations",id:({id:e})=>e,type:"delete"},{func:Y,string:W}=c.a;var q=({id:e,hideModal:t,onSuccess:a})=>{const[r]=Object(i.d)(U);return l.a.createElement(s.q,{open:!0,small:!0,onClose:t},l.a.createElement(s.s,null,x.a.t("Are you sure you want to delete this job?")),l.a.createElement(s.r,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{name:"hide-modal",secondary:!0,onClick:t},x.a.t("Cancel")),l.a.createElement(s.b,{name:"delete-job-".concat(e),destructive:!0,onClick:()=>{r({id:e}).then(()=>{t(),a()})}},x.a.t("Delete")))))};const{func:V}=c.a;var z=({hideModal:e})=>l.a.createElement(s.q,{open:!0,small:!0,onClose:e},l.a.createElement(s.s,null,x.a.t("Are you sure you want to discard this form?")),l.a.createElement(s.r,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{name:"cancel-discard-form",secondary:!0,onClick:e},x.a.t("Cancel")),l.a.createElement(s.b,{name:"discard-form",destructive:!0,onClick:()=>{e(),J.push("/")}},x.a.t("Discard")))));const{func:X,string:K}=c.a;var Z=({id:e,hideModal:t})=>{const a=Object(i.c)(),n={jobs:{resource:"jobConfigurations/".concat(e,"/execute")}},o=r.useRefetchJobs();return l.a.createElement(s.q,{open:!0,small:!0,onClose:t},l.a.createElement(s.s,null,x.a.t("Are you sure you want to run this job?")),l.a.createElement(s.r,null,l.a.createElement(s.c,{end:!0},l.a.createElement(s.b,{name:"hide-modal",secondary:!0,onClick:t},x.a.t("Cancel")),l.a.createElement(s.b,{name:"run-job-".concat(e),primary:!0,onClick:()=>{a.query(n).then(()=>{t(),o()})}},x.a.t("Run")))))};const{string:Q}=c.a;var $=({id:e})=>{const[t,a]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.p,{dense:!0,onClick:()=>{a(!0)},label:x.a.t("Run manually")}),t&&l.a.createElement(Z,{id:e,hideModal:()=>a(!1)}))};const{string:ee}=c.a;var te=({id:e})=>{const[t,a]=Object(n.useState)(!1),o=r.useRefetchJobs();return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.p,{dense:!0,destructive:!0,onClick:()=>{a(!0)},label:x.a.t("Delete")}),t&&l.a.createElement(q,{id:e,hideModal:()=>a(!1),onSuccess:o}))};const ae=({id:e,configurable:t})=>l.a.createElement(s.i,{small:!0,component:l.a.createElement(s.k,null,t&&l.a.createElement(w,{id:e}),l.a.createElement($,{id:e}),l.a.createElement(te,{id:e}))},x.a.t("Actions"));ae.defaultProps={configurable:!1};const{string:re,bool:ne}=c.a;var le=ae;const{string:se}=c.a;var oe=({status:e})=>{switch(e){case"STOPPED":case"DISABLED":return l.a.createElement(s.J,null,I[e]);case"RUNNING":case"NOT_STARTED":case"SCHEDULED":return l.a.createElement(s.J,{neutral:!0},I[e]);case"FAILED":return l.a.createElement(s.J,{negative:!0},I[e]);case"DONE":return l.a.createElement(s.J,{positive:!0},I[e]);default:return null}},ce=a(28),ie=a.n(ce);const ue=({nextExecutionTime:e,enabled:t})=>{if(!t||!e)return"-";const a=ie()(Date.now()),r=ie.a.utc(e);return r.isSameOrBefore(a,"minute")?x.a.t("Not scheduled"):a.to(r)},{bool:me,string:de}=c.a;ue.propTypes={enabled:me.isRequired,nextExecutionTime:de};var Ee=ue,pe=a(200),be=a.n(pe);const he=["MON","TUE","WED","THU","FRI","SAT","SUN"],ge=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],_e=(e,t,a)=>e>=t&&e<=a,fe=e=>"*"===e,ye=e=>"?"===e,ve=(e,t,a)=>fe(e)||_e(e,t,a)||((e,t,a)=>{const r=e.split("-");return!(!r||2!==r.length)&&(_e(r[0],t,a)&&_e(r[1],t,a)&&r[0]<=r[1])})(e,t,a)||((e,t,a)=>{const r=e.split("/");return!(!r||2!==r.length)&&((fe(r[0])||_e(r[0],t,a))&&_e(r[1],t,a))})(e,t,a),Te=e=>ve(e,1,12)||(e=>{const t=e.split("-"),[a,r]=t.map(e=>ge.indexOf(e));return-1!==a&&void 0===r||-1!==a&&-1!==r&&a<=r})(e),je=e=>ve(e,1,7)||(e=>{const t=e.split("-"),[a,r]=t.map(e=>he.indexOf(e));return-1!==a&&void 0===r||-1!==a&&-1!==r&&a<=r})(e)||ye(e);var Ne=e=>{if(!e)return!1;const t=e.trim().split(" ");return!!(e=>e&&6===e.length)(t)&&(a=t[0],ve(a,0,59)&&(e=>ve(e,0,59))(t[1])&&(e=>ve(e,0,23))(t[2])&&(e=>ve(e,0,31)||ye(e))(t[3])&&Te(t[4])&&je(t[5]));var a};var Ce=e=>"string"===typeof e&&e.length>0?Ne(e)?void 0:x.a.t("Please enter a valid CRON expression"):x.a.t("A CRON expression is required");var Se=e=>{const t=x.a.language||"en";return e&&Ne(e)?be.a.toString(e,{locale:t}):""};const Oe=({cronExpression:e,schedulingType:t,delay:a})=>{switch(t){case"CRON":return Se(e);case"FIXED_DELAY":return x.a.t("{{ delay }} seconds after last run",{delay:a});default:return"-"}},{string:xe,number:Ae}=c.a;Oe.propTypes={schedulingType:xe.isRequired,cronExpression:xe,delay:Ae};var Je=Oe;const{shape:Re,string:Fe,bool:Ie,number:De}=c.a;var Le=({job:{id:e,displayName:t,jobType:a,cronExpression:r,delay:n,jobStatus:o,nextExecutionTime:c,schedulingType:i,enabled:u,configurable:m}})=>l.a.createElement(s.H,null,l.a.createElement(s.E,null,t),l.a.createElement(s.E,null,F[a]),l.a.createElement(s.E,null,l.a.createElement(Je,{cronExpression:r,delay:n,schedulingType:i})),l.a.createElement(s.E,null,l.a.createElement(Ee,{nextExecutionTime:c,enabled:u})),l.a.createElement(s.E,null,l.a.createElement(oe,{status:o})),l.a.createElement(s.E,null,l.a.createElement(P,{id:e,checked:u})),l.a.createElement(s.E,null,l.a.createElement(le,{id:e,configurable:m})));const{object:ke,arrayOf:Pe}=c.a;var He=({jobs:e})=>l.a.createElement(s.C,null,l.a.createElement(s.G,null,l.a.createElement(s.I,null,l.a.createElement(s.F,null,x.a.t("Job name")),l.a.createElement(s.F,null,x.a.t("Type")),l.a.createElement(s.F,null,x.a.t("Schedule")),l.a.createElement(s.F,null,x.a.t("Next run")),l.a.createElement(s.F,null,x.a.t("Status")),l.a.createElement(s.F,null,x.a.t("On/off")),l.a.createElement(s.F,null))),l.a.createElement(s.D,null,0===e.length?l.a.createElement(s.H,null,l.a.createElement(s.E,null,x.a.t("No jobs to display"))):e.map(e=>l.a.createElement(Le,{key:e.id,job:e})))),we=a(202),Be=a.n(we);const{bool:Me,object:Ge,string:Ue,arrayOf:Ye,func:We}=c.a;var qe=({jobs:e,showSystemJobs:t,setShowSystemJobs:a,jobFilter:r,setJobFilter:n})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Be.a.header},l.a.createElement("h1",{className:Be.a.headerTitle},x.a.t("Scheduled jobs")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Be.a.headerLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Be.a.headerLinkIcon},l.a.createElement(s.l,null)),x.a.t("About job configuration"))),l.a.createElement(s.d,null,l.a.createElement("div",{className:Be.a.controlContainer},l.a.createElement(s.m,{dataTest:"job-filter-input",placeholder:x.a.t("Filter jobs"),onChange:({value:e})=>{n(e)},value:r}),l.a.createElement("div",{className:Be.a.controlRight},l.a.createElement(s.f,{dataTest:"job-toggle-checkbox",checked:t,label:x.a.t("Include system jobs in list"),onChange:({checked:e})=>{a(e)}}),l.a.createElement(s.b,{dataTest:"new-job-button",onClick:()=>{J.push("/add")}},x.a.t("New job")))),l.a.createElement(He,{jobs:e})));var Ve=()=>{const[e,t]=r.useJobFilter(),[a,n]=r.useShowSystemJobs(),s=r.useJobListJobs();return l.a.createElement(qe,{jobs:s,showSystemJobs:a,setShowSystemJobs:n,jobFilter:e,setJobFilter:t})};const ze=({setCron:e,small:t})=>{const[a,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{onClick:()=>r(!0),small:t},x.a.t("Choose from preset times")),a&&l.a.createElement(G,{hideModal:()=>r(!1),setCron:e}))};ze.defaultProps={small:!1};const{func:Xe,bool:Ke}=c.a;var Ze=ze;const{string:Qe,func:$e}=c.a;var et=({id:e,onSuccess:t})=>{const[a,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{destructive:!0,onClick:()=>r(!0)},x.a.t("Delete job")),a&&l.a.createElement(q,{id:e,hideModal:()=>r(!1),onSuccess:t}))};const tt=({shouldConfirm:e,children:t,small:a,className:r})=>{const[o,c]=Object(n.useState)(!1),i=e?()=>c(!0):()=>J.push("/");return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{onClick:i,small:a,className:r},t),o&&l.a.createElement(z,{hideModal:()=>c(!1)}))};tt.defaultProps={className:"",shouldConfirm:!1,small:!1};const{string:at,bool:rt}=c.a;var nt=tt;const{FORM_ERROR:lt}=s.j;var st=e=>{const{details:{response:t}}=e,a={},r=[];return t.errorReports&&t.errorReports.length&&t.errorReports.forEach(e=>{e.errorProperty?a[e.errorProperty]=e.message:r.push(e.message)}),r.length>0&&(a[lt]=r),a};const ot={resource:"jobConfigurations",type:"create",data:({job:e})=>e};var ct=()=>{const{refetchJobs:e}=Object(n.useContext)(u),t=Object(i.c)();return[a=>t.mutate(ot,{variables:{job:a}}).then(()=>{J.push("/"),e()}).catch(e=>{if("access"===e.type)return st(e);throw e})]};const it={resource:"jobConfigurations",type:"update",id:({id:e})=>e,data:({job:e})=>e};var ut=({id:e})=>{const{refetchJobs:t}=Object(n.useContext)(u),a=Object(i.c)();return[r=>a.mutate(it,{variables:{job:r,id:e}}).then(()=>{J.push("/"),t()}).catch(e=>{if("access"===e.type)return st(e);throw e})]},mt=a(203),dt=a.n(mt);const{array:Et}=c.a;var pt=({submitError:e})=>e.length>0?l.a.createElement(s.w,{error:!0,title:x.a.t("Something went wrong whilst creating your job")},l.a.createElement("ul",{className:dt.a.list},e.map(e=>l.a.createElement("li",{key:e},e)))):null;const{Field:bt}=s.y,ht=Object(s.K)(s.O,s.M);var gt=()=>l.a.createElement(bt,{name:"name",component:s.n,validate:ht,label:x.a.t("Name"),type:"text",required:!0});const{Field:_t}=s.y,ft=Object(s.K)(s.O,s.M);var yt=()=>{const e=r.useAllJobTypes().map(({jobType:e})=>({value:e,label:F[e]}));return l.a.createElement(_t,{name:"jobType",validate:ft,component:s.z,options:e,label:x.a.t("Job type"),required:!0})};const vt=e=>"number"===typeof e?e.toString():e,{Field:Tt}=s.y,{string:jt}=c.a;var Nt=({label:e,name:t,parameterName:a})=>{const n=r.useParameterOptions(a);if(0===n.length)return l.a.createElement(s.u,{disabled:!0,helpText:x.a.t("No options available"),label:e});const o=n.map(e=>({value:e,label:R[e]||e}));return l.a.createElement(Tt,{name:t,component:s.v,options:o,label:e})};const{Field:Ct}=s.y,{string:St}=c.a;var Ot=({label:e,name:t,parameterName:a})=>{const n=r.useParameterOptions(a);if(0===n.length)return l.a.createElement(s.u,{disabled:!0,helpText:x.a.t("No options available"),label:e});const o=n.map(({id:e,displayName:t})=>({value:e,label:t}));return l.a.createElement(Ct,{name:t,component:s.v,options:o,label:e})},xt=a(204),At=a.n(xt);const{Field:Jt}=s.y,{string:Rt}=c.a;var Ft=({jobType:e})=>{const t=r.useJobTypeParameters(e);if(0===t.length)return null;const a=t.map(({fieldName:e,name:t,klass:a})=>{const r={label:e,name:"".concat("jobParameters",".").concat(t)};let n=null;if("skipTableTypes"===t)return l.a.createElement(s.a,{marginTop:"16px",key:t},l.a.createElement(Nt,Object.assign({},r,{parameterName:t})));switch(a){case"java.lang.String":n=l.a.createElement(Jt,Object.assign({},r,{component:s.n,type:"text"}));break;case"java.lang.Boolean":n=l.a.createElement(Jt,Object.assign({},r,{component:s.B,type:"checkbox"}));break;case"java.lang.Integer":n=l.a.createElement(Jt,Object.assign({},r,{component:s.n,format:vt,type:"number"}));break;case"java.util.List":n=l.a.createElement(Ot,Object.assign({},r,{parameterName:t}))}return l.a.createElement(s.a,{marginTop:"16px",key:t},n)});return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h4",{className:At.a.headerTitle},x.a.t("Parameters"))),a)};const{Field:It,useFormState:Dt,useForm:Lt}=s.y,kt=Ce;var Pt=()=>{const e=Lt(),{values:t}=Dt({subscription:{values:!0}}),a=t.cronExpression,r=Se(a);return l.a.createElement(l.a.Fragment,null,l.a.createElement(It,{component:s.n,name:"cronExpression",validate:kt,label:x.a.t("CRON Expression"),type:"text",helpText:r,required:!0}),l.a.createElement(s.a,{marginTop:"8px"},l.a.createElement(Ze,{setCron:t=>e.change("cronExpression",t),small:!0})))};const{Field:Ht}=s.y,wt=Object(s.K)(s.N,s.M,Object(s.L)(1,86400));var Bt=()=>l.a.createElement(Ht,{component:s.n,name:"delay",validate:wt,label:x.a.t("Delay"),type:"number",format:vt,helpText:x.a.t("Delay in seconds ({{ lowerbound }} - {{ upperbound }})",{lowerbound:1,upperbound:86400}),required:!0});const{string:Mt}=c.a;var Gt=({jobType:e})=>{switch(r.useJobType(e).schedulingType){case"CRON":return l.a.createElement(Pt,null);case"FIXED_DELAY":return l.a.createElement(Bt,null);default:return null}};const Ut="jobType";var Yt=a(205),Wt=a.n(Yt);const{useForm:qt}=s.y,Vt=({handleSubmit:e,pristine:t,submitting:a,submitError:r,hasSubmitErrors:o,values:c,setIsPristine:i})=>{const{subscribe:u}=qt();Object(n.useEffect)(()=>u(({pristine:e})=>i(e),{pristine:!0}));const m=c[Ut],d=a?l.a.createElement(s.g,{small:!0}):null;return l.a.createElement("form",{onSubmit:e},l.a.createElement(s.a,{maxWidth:"600px"},l.a.createElement(gt,null)),l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(yt,null)),m&&l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Gt,{jobType:m})),m&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Ft,{jobType:m})),o&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(pt,{submitError:r})),l.a.createElement("div",{className:Wt.a.formButtonContainer},l.a.createElement(s.b,{primary:!0,type:"submit",disabled:t||a,icon:d,className:Wt.a.saveButton},x.a.t("Save")),l.a.createElement(nt,{shouldConfirm:!t},x.a.t("Cancel"))))},{func:zt,bool:Xt,object:Kt,array:Zt}=c.a;Vt.defaultProps={submitError:[]};var Qt=Vt;const{Form:$t}=s.y,{func:ea}=c.a;var ta=({setIsPristine:e})=>{const[t]=ct();return l.a.createElement($t,{onSubmit:t,component:Qt,setIsPristine:e,destroyOnUnregister:!0})},aa=a(206),ra=a.n(aa);const{useForm:na}=s.y,la=({id:e,refetchJobs:t,handleSubmit:a,pristine:r,submitting:o,submitError:c,hasSubmitErrors:i,values:u,setIsPristine:m})=>{const{subscribe:d}=na();Object(n.useEffect)(()=>d(({pristine:e})=>m(e),{pristine:!0}));const E=u[Ut],p=o?l.a.createElement(s.g,{small:!0}):null;return l.a.createElement("form",{onSubmit:a},l.a.createElement(s.a,{maxWidth:"600px"},l.a.createElement(gt,null)),l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(yt,null)),E&&l.a.createElement(s.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Gt,{jobType:E})),E&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Ft,{jobType:E})),i&&l.a.createElement(s.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(pt,{submitError:c})),l.a.createElement("div",{className:ra.a.formButtonContainer},l.a.createElement(s.b,{primary:!0,type:"submit",disabled:r||o,icon:p,className:ra.a.saveButton},x.a.t("Save")),l.a.createElement(nt,{shouldConfirm:!r},x.a.t("Cancel")),l.a.createElement("span",{className:ra.a.deleteButton},l.a.createElement(et,{id:e,onSuccess:()=>{J.push("/"),t()}}))))},{func:sa,bool:oa,object:ca,array:ia,string:ua}=c.a;la.defaultProps={submitError:[]};var ma=la;const{Form:da}=s.y,Ea=["cronExpression","delay","jobParameters","jobType","name","schedulingType"],{func:pa}=c.a;var ba=({setIsPristine:e})=>{const{id:t}=Object(o.c)(),[a]=ut({id:t}),n=r.useRefetchJobs(),s=r.useJob(t),c=Ea.reduce((e,t)=>(e[t]=s[t],e),{});return l.a.createElement(da,{onSubmit:a,component:ma,setIsPristine:e,initialValues:c,id:t,refetchJobs:n,destroyOnUnregister:!0})},ha=a(213),ga=a.n(ha);const{string:_a}=c.a;var fa=({created:e,lastExecutedStatus:t,lastExecuted:a})=>{const r=Date.now(),n=ie()(e).from(r),s=I[t],o=a?ie()(a).from(r):"";return l.a.createElement("div",{className:ga.a.wrapper},l.a.createElement("h4",{className:ga.a.title},x.a.t("Job details")),l.a.createElement("div",{className:ga.a.details},l.a.createElement("div",null,x.a.t("Created {{ createdFromNow }}.",{createdFromNow:n})),o&&l.a.createElement("div",null,x.a.t("Last run {{ lastRunFromNow }}.",{lastRunFromNow:o})),s&&l.a.createElement("div",null,x.a.t("Last run status: {{ translatedStatus }}.",{translatedStatus:s,nsSeparator:">"}))))},ya=a(214),va=a.n(ya);const{bool:Ta,func:ja,string:Na}=c.a;var Ca=({isPristine:e,setIsPristine:t,name:a,created:r,lastExecutedStatus:n,lastExecuted:o})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:va.a.pageHeader},l.a.createElement(nt,{shouldConfirm:!e,className:va.a.pageHeaderButton,small:!0},x.a.t("Back to all jobs")),l.a.createElement("h2",{className:va.a.pageHeaderTitle},x.a.t("Job: {{ name }}",{name:a,nsSeparator:">"}))),l.a.createElement(s.d,{className:va.a.card},l.a.createElement("header",{className:va.a.cardHeader},l.a.createElement("h3",{className:va.a.cardHeaderTitle},x.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:va.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:va.a.cardHeaderInfo},l.a.createElement(s.l,null)),x.a.t("About job configuration"))),l.a.createElement("div",{className:va.a.jobDetails},l.a.createElement(fa,{created:r,lastExecutedStatus:n,lastExecuted:o})),l.a.createElement(ba,{setIsPristine:t})));var Sa=()=>{const[e,t]=Object(n.useState)(!0),{id:a}=Object(o.c)(),s=r.useJob(a);return l.a.createElement(Ca,{isPristine:e,setIsPristine:t,name:s.name,created:s.created,lastExecutedStatus:s.lastExecutedStatus,lastExecuted:s.lastExecuted})},Oa=a(215),xa=a.n(Oa);const{bool:Aa,func:Ja}=c.a;var Ra=({isPristine:e,setIsPristine:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:xa.a.pageHeader},l.a.createElement(nt,{shouldConfirm:!e,className:xa.a.pageHeaderButton,small:!0},x.a.t("Back to all jobs")),l.a.createElement("h2",{className:xa.a.pageHeaderTitle},x.a.t("New Job"))),l.a.createElement(s.d,{className:xa.a.card},l.a.createElement("header",{className:xa.a.cardHeader},l.a.createElement("h3",{className:xa.a.cardHeaderTitle},x.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:xa.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:xa.a.cardHeaderInfo},l.a.createElement(s.l,null)),x.a.t("About job configuration"))),l.a.createElement(ta,{setIsPristine:t})));var Fa=()=>{const[e,t]=Object(n.useState)(!0);return l.a.createElement(Ra,{isPristine:e,setIsPristine:t})};var Ia=()=>l.a.createElement(o.b,{history:J},l.a.createElement(o.a,{exact:!0,path:"/",component:Ve}),l.a.createElement(o.a,{path:"/edit/:id",component:Sa}),l.a.createElement(o.a,{path:"/add",component:Fa}));var Da=a(216),La=a.n(Da);const ka={me:{resource:"me"}},{node:Pa}=c.a;var Ha=({children:e})=>{const{loading:t,error:a,data:r}=Object(i.e)(ka);if(t)return l.a.createElement(s.o,null,l.a.createElement(s.e,null,l.a.createElement(s.g,null)));if(a)throw a;return(e=>{const{authorities:t}=e;return!!t&&(t.includes("ALL")||t.includes("F_SCHEDULING_ADMIN"))})(r.me)?l.a.createElement(l.a.Fragment,null,e):l.a.createElement("div",{className:La.a.noticeBoxWrapper},l.a.createElement(s.w,{error:!0,title:x.a.t("Not authorized")},x.a.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")))},wa=a(217),Ba=a.n(wa);const{node:Ma}=c.a;var Ga=({children:e})=>l.a.createElement("div",{className:Ba.a.wrapper},e);a(218);var Ua=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(s.h,{spacers:!0,colors:!0}),l.a.createElement(Ga,null,l.a.createElement(Ha,null,l.a.createElement(b,null,l.a.createElement(Ia,null)))));a.d(t,"default",(function(){return Ua}))}}]);
//# sourceMappingURL=app.73a9741b.chunk.js.map