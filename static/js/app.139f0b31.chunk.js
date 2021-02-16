(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{202:function(e,a,t){e.exports={header:"JobList_header__23tFt",headerTitle:"JobList_headerTitle__21D__",headerLink:"JobList_headerLink__2zepi",headerLinkIcon:"JobList_headerLinkIcon__XdfBB",controlContainer:"JobList_controlContainer__3Yzj_",controlRight:"JobList_controlRight__38lfB"}},203:function(e,a,t){e.exports={list:"FormErrorBox_list__3BejY"}},204:function(e,a,t){e.exports={headerTitle:"ParameterFields_headerTitle__IBF76"}},205:function(e,a,t){e.exports={formButtonContainer:"JobAddForm_formButtonContainer__1MLSp",saveButton:"JobAddForm_saveButton__RfxZ9"}},206:function(e,a,t){e.exports={formButtonContainer:"JobEditForm_formButtonContainer__2b6Fi",deleteButton:"JobEditForm_deleteButton__VQxBE",saveButton:"JobEditForm_saveButton__278Ab"}},213:function(e,a,t){e.exports={wrapper:"JobDetails_wrapper__1-YkO",title:"JobDetails_title__1Cht7",details:"JobDetails_details__2HITJ"}},214:function(e,a,t){e.exports={pageHeader:"JobEdit_pageHeader__3Fywp",pageHeaderButton:"JobEdit_pageHeaderButton__29yjJ",pageHeaderTitle:"JobEdit_pageHeaderTitle__jZrIG",card:"JobEdit_card__2QqEg",cardHeader:"JobEdit_cardHeader__Mv_cj",cardHeaderTitle:"JobEdit_cardHeaderTitle__29Y64",cardHeaderInfo:"JobEdit_cardHeaderInfo__3VWZt",cardHeaderLink:"JobEdit_cardHeaderLink__2frj7",jobDetails:"JobEdit_jobDetails__194v-"}},215:function(e,a,t){e.exports={pageHeader:"JobView_pageHeader__3d3IR",pageHeaderButton:"JobView_pageHeaderButton__2VF9Z",pageHeaderTitle:"JobView_pageHeaderTitle__3wHyg",card:"JobView_card__3LlD0",cardHeader:"JobView_cardHeader__3v0pX",cardHeaderTitle:"JobView_cardHeaderTitle__tPEnV",cardHeaderInfo:"JobView_cardHeaderInfo__j1GsD",cardHeaderLink:"JobView_cardHeaderLink__86M36",jobDetails:"JobView_jobDetails__3cu4z"}},216:function(e,a,t){e.exports={pageHeader:"JobAdd_pageHeader__2NZzc",pageHeaderButton:"JobAdd_pageHeaderButton__Xg_R9",pageHeaderTitle:"JobAdd_pageHeaderTitle__1RMl0",card:"JobAdd_card__1HH6H",cardHeader:"JobAdd_cardHeader__1D3sS",cardHeaderTitle:"JobAdd_cardHeaderTitle__2TG9a",cardHeaderInfo:"JobAdd_cardHeaderInfo__vq_Y1",cardHeaderLink:"JobAdd_cardHeaderLink__2CzPt"}},217:function(e,a,t){e.exports={noticeBoxWrapper:"AuthWall_noticeBoxWrapper__1ums5"}},218:function(e,a,t){e.exports={wrapper:"PageWrapper_wrapper__t-CJy"}},219:function(e,a,t){},225:function(e,a,t){"use strict";t.r(a);var r={};t.r(r),t.d(r,"getJobsStore",(function(){return g})),t.d(r,"getJobTypesStore",(function(){return h})),t.d(r,"getParameterOptionsStore",(function(){return _})),t.d(r,"getRefetchJobs",(function(){return f})),t.d(r,"getJobById",(function(){return T})),t.d(r,"getJobType",(function(){return v})),t.d(r,"getJobTypeParameters",(function(){return y})),t.d(r,"getParameterOptions",(function(){return j}));var n=t(1),l=t.n(n),o=t(181),s=t(220),c=t(182),i=t(13);var d=Object(n.createContext)({jobs:{},jobTypes:{},parameterOptions:{},refetchJobs:()=>{throw new Error("Store context needs a valid provider")}});const m={jobs:{resource:"jobConfigurations",params:{fields:"*",paging:!1}}},u={jobTypes:{resource:"jobConfigurations/jobTypes",params:{fields:"*",paging:!1}}},E={skipTableTypes:{resource:"analytics/tableTypes"},validationRuleGroups:{resource:"validationRuleGroups",params:{paging:!1}},pushAnalysis:{resource:"pushAnalysis",params:{paging:!1}},predictors:{resource:"predictors",params:{paging:!1}},predictorGroups:{resource:"predictorGroups",params:{paging:!1}}},{node:p}=c.a;var b=({children:e})=>{const a=Object(i.e)(m),t=Object(i.e)(u),r=Object(i.e)(E);if(a.loading||t.loading||r.loading)return l.a.createElement(o.o,null,l.a.createElement(o.e,null,l.a.createElement(o.f,null)));const n=a.error||t.error||r.error;if(n)throw n;const{jobConfigurations:s}=a.data.jobs,{jobTypes:c}=t.data.jobTypes,{skipTableTypes:p,validationRuleGroups:{validationRuleGroups:b},pushAnalysis:{pushAnalysis:g},predictors:{predictors:h},predictorGroups:{predictorGroups:_}}=r.data,f={skipTableTypes:p,validationRuleGroups:b,pushAnalysis:g,predictors:h,predictorGroups:_};return l.a.createElement(d.Provider,{value:{jobs:s,jobTypes:c,parameterOptions:f,refetchJobs:a.refetch}},e)};const g=e=>e.jobs,h=e=>e.jobTypes,_=e=>e.parameterOptions,f=e=>e.refetchJobs,T=(e,a)=>g(e).find(e=>e.id===a),v=(e,a)=>h(e).find(e=>e.jobType===a),y=(e,a)=>{const t=v(e,a);return"jobParameters"in t?t.jobParameters:[]},j=(e,a)=>_(e)[a];var N=t(8),x=t.n(N),C=t(193);var O=Object(C.a)();var S={DATA_VALUE:x.a.t("Data value"),COMPLETENESS:x.a.t("Completeness"),COMPLETENESS_TARGET:x.a.t("Completeness target"),ORG_UNIT_TARGET:x.a.t("Org unit target"),EVENT:x.a.t("Event"),ENROLLMENT:x.a.t("Enrollment"),VALIDATION_RESULT:x.a.t("Validation result")};var A={ANALYTICS_TABLE:x.a.t("Analytics table"),CONTINUOUS_ANALYTICS_TABLE:x.a.t("Continuous analytics table"),CREDENTIALS_EXPIRY_ALERT:x.a.t("Credentials expiry alert"),DATA_INTEGRITY:x.a.t("Data integrity"),DATA_SET_NOTIFICATION:x.a.t("Dataset notification"),DATA_STATISTICS:x.a.t("Data statistics"),DATA_SYNC:x.a.t("Data synchronization"),EVENT_PROGRAMS_DATA_SYNC:x.a.t("Event programs data sync"),FILE_RESOURCE_CLEANUP:x.a.t("File resource clean up"),META_DATA_SYNC:x.a.t("Metadata synchronization"),MONITORING:x.a.t("Monitoring"),PREDICTOR:x.a.t("Predictor"),PROGRAM_NOTIFICATIONS:x.a.t("Program notifications"),PUSH_ANALYSIS:x.a.t("Push analysis"),REMOVE_EXPIRED_RESERVED_VALUES:x.a.t("Remove expired reserved values"),RESOURCE_TABLE:x.a.t("Resource table"),SEND_SCHEDULED_MESSAGE:x.a.t("Send scheduled message"),TRACKER_PROGRAMS_DATA_SYNC:x.a.t("Tracker programs data sync"),VALIDATION_RESULTS_NOTIFICATION:x.a.t("Validation results notification")};var J={COMPLETED:x.a.t("Completed"),DISABLED:x.a.t("Disabled"),DONE:x.a.t("Done"),FAILED:x.a.t("Failed"),NOT_STARTED:x.a.t("Not started"),RUNNING:x.a.t("Running"),SCHEDULED:x.a.t("Scheduled"),STOPPED:x.a.t("Stopped")};const H={resource:"jobConfigurations",id:({id:e})=>e,type:"update",partial:!0,data:({enabled:e})=>({enabled:e})},{bool:I,string:R}=c.a;var D=({id:e,checked:a,disabled:t})=>{const[s,{loading:c}]=Object(i.d)(H),m=Object(n.useContext)(d),u=r.getRefetchJobs(m),E=!a;return l.a.createElement(o.C,{name:"toggle-job-".concat(e),disabled:t||c,checked:a,onChange:()=>{s({id:e,enabled:E}).then(()=>u())}})};const{string:k}=c.a;var L=({id:e})=>l.a.createElement(o.p,{dense:!0,onClick:()=>O.push("/edit/".concat(e)),label:x.a.t("Edit")});const{string:F}=c.a;var P=({id:e})=>l.a.createElement(o.p,{dense:!0,onClick:()=>O.push("/view/".concat(e)),label:x.a.t("View")});const w=[{label:x.a.t("Every hour"),value:"0 0 * ? * *"},{label:x.a.t("Every day at midnight"),value:"0 0 1 ? * *"},{label:x.a.t("Every day at 3 am"),value:"0 0 3 ? * *"},{label:x.a.t("Every day at noon"),value:"0 0 12 ? * MON-FRI"},{label:x.a.t("Every week"),value:"0 0 3 ? * MON"}],{func:B}=c.a;var M=({setCron:e,hideModal:a})=>{const[t,r]=Object(n.useState)("");return l.a.createElement(o.q,{open:!0,small:!0,onClose:a},l.a.createElement(o.t,null,x.a.t("Choose a preset time/interval")),l.a.createElement(o.s,null,w.map(e=>l.a.createElement(o.x,Object.assign({},e,{checked:t===e.value,key:e.value,onChange:({value:e})=>r(e)})))),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{secondary:!0,onClick:a,name:"hide-modal"},x.a.t("Cancel")),l.a.createElement(o.b,{primary:!0,name:"insert-preset",disabled:!t,onClick:()=>{a(),e(t)}},x.a.t("Insert preset")))))};const G={resource:"jobConfigurations",id:({id:e})=>e,type:"delete"},{func:V,string:U}=c.a;var W=({id:e,hideModal:a,onSuccess:t})=>{const[r]=Object(i.d)(G);return l.a.createElement(o.q,{open:!0,small:!0,onClose:a},l.a.createElement(o.s,null,x.a.t("Are you sure you want to delete this job?")),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:a},x.a.t("Cancel")),l.a.createElement(o.b,{name:"delete-job-".concat(e),destructive:!0,onClick:()=>{r({id:e}).then(()=>{a(),t()})}},x.a.t("Delete")))))};const{func:Y}=c.a;var q=({hideModal:e})=>l.a.createElement(o.q,{open:!0,small:!0,onClose:e},l.a.createElement(o.s,null,x.a.t("Are you sure you want to discard this form?")),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"cancel-discard-form",secondary:!0,onClick:e},x.a.t("Cancel")),l.a.createElement(o.b,{name:"discard-form",destructive:!0,onClick:()=>{e(),O.push("/")}},x.a.t("Discard")))));const{func:z,string:X}=c.a;var Z=({id:e,hideModal:a})=>{const t=Object(i.c)(),s={jobs:{resource:"jobConfigurations/".concat(e,"/execute")}},c=Object(n.useContext)(d),m=r.getRefetchJobs(c);return l.a.createElement(o.q,{open:!0,small:!0,onClose:a},l.a.createElement(o.s,null,x.a.t("Are you sure you want to run this job?")),l.a.createElement(o.r,null,l.a.createElement(o.c,{end:!0},l.a.createElement(o.b,{name:"hide-modal",secondary:!0,onClick:a},x.a.t("Cancel")),l.a.createElement(o.b,{name:"run-job-".concat(e),primary:!0,onClick:()=>{t.query(s).then(()=>{a(),m()})}},x.a.t("Run")))))};const{string:Q}=c.a;var K=({id:e})=>{const[a,t]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.p,{dense:!0,onClick:()=>{t(!0)},label:x.a.t("Run manually")}),a&&l.a.createElement(Z,{id:e,hideModal:()=>t(!1)}))};const{string:$}=c.a;var ee=({id:e})=>{const[a,t]=Object(n.useState)(!1),s=Object(n.useContext)(d),c=r.getRefetchJobs(s);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.p,{dense:!0,destructive:!0,onClick:()=>{t(!0)},label:x.a.t("Delete")}),a&&l.a.createElement(W,{id:e,hideModal:()=>t(!1),onSuccess:c}))};const ae=({id:e,configurable:a})=>l.a.createElement(o.h,{small:!0,component:l.a.createElement(o.j,null,a?l.a.createElement(L,{id:e}):l.a.createElement(P,{id:e}),a&&l.a.createElement(K,{id:e}),a&&l.a.createElement(ee,{id:e}))},x.a.t("Actions"));ae.defaultProps={configurable:!1};const{string:te,bool:re}=c.a;var ne=ae;const{string:le}=c.a;var oe=({status:e})=>{switch(e){case"STOPPED":case"DISABLED":return l.a.createElement(o.L,null,J[e]);case"RUNNING":case"NOT_STARTED":case"SCHEDULED":return l.a.createElement(o.L,{neutral:!0},J[e]);case"FAILED":return l.a.createElement(o.L,{negative:!0},J[e]);case"DONE":return l.a.createElement(o.L,{positive:!0},J[e]);default:return null}},se=t(28),ce=t.n(se);const ie=({nextExecutionTime:e,enabled:a})=>{if(!a||!e)return"-";const t=ce()(Date.now()),r=ce.a.utc(e);return r.isSameOrBefore(t,"minute")?x.a.t("Not scheduled"):t.to(r)},{bool:de,string:me}=c.a;ie.propTypes={enabled:de.isRequired,nextExecutionTime:me};var ue=ie,Ee=t(200),pe=t.n(Ee);const be=["MON","TUE","WED","THU","FRI","SAT","SUN"],ge=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],he=(e,a,t)=>e>=a&&e<=t,_e=e=>"*"===e,fe=e=>"?"===e,Te=(e,a,t)=>_e(e)||he(e,a,t)||((e,a,t)=>{const r=e.split("-");return!(!r||2!==r.length)&&(he(r[0],a,t)&&he(r[1],a,t)&&r[0]<=r[1])})(e,a,t)||((e,a,t)=>{const r=e.split("/");return!(!r||2!==r.length)&&((_e(r[0])||he(r[0],a,t))&&he(r[1],a,t))})(e,a,t),ve=e=>Te(e,1,12)||(e=>{const a=e.split("-"),[t,r]=a.map(e=>ge.indexOf(e));return-1!==t&&void 0===r||-1!==t&&-1!==r&&t<=r})(e),ye=e=>Te(e,1,7)||(e=>{const a=e.split("-"),[t,r]=a.map(e=>be.indexOf(e));return-1!==t&&void 0===r||-1!==t&&-1!==r&&t<=r})(e)||fe(e);var je=e=>{if(!e)return!1;const a=e.trim().split(" ");return!!(e=>e&&6===e.length)(a)&&(t=a[0],Te(t,0,59)&&(e=>Te(e,0,59))(a[1])&&(e=>Te(e,0,23))(a[2])&&(e=>Te(e,0,31)||fe(e))(a[3])&&ve(a[4])&&ye(a[5]));var t};var Ne=e=>"string"===typeof e&&e.length>0?je(e)?void 0:x.a.t("Please enter a valid CRON expression"):x.a.t("A CRON expression is required");var xe=e=>{const a=x.a.language||"en";return e&&je(e)?pe.a.toString(e,{locale:a}):""};const Ce=({cronExpression:e,schedulingType:a,delay:t})=>{switch(a){case"CRON":return xe(e);case"FIXED_DELAY":return x.a.t("{{ delay }} seconds after last run",{delay:t});default:return"-"}},{string:Oe,number:Se}=c.a;Ce.propTypes={schedulingType:Oe.isRequired,cronExpression:Oe,delay:Se};var Ae=Ce;const{shape:Je,string:He,bool:Ie,number:Re}=c.a;var De=({job:{id:e,displayName:a,jobType:t,cronExpression:r,delay:n,jobStatus:s,nextExecutionTime:c,schedulingType:i,enabled:d,configurable:m}})=>l.a.createElement(o.J,null,l.a.createElement(o.G,null,a),l.a.createElement(o.G,null,A[t]),l.a.createElement(o.G,null,l.a.createElement(Ae,{cronExpression:r,delay:n,schedulingType:i})),l.a.createElement(o.G,null,l.a.createElement(ue,{nextExecutionTime:c,enabled:d})),l.a.createElement(o.G,null,l.a.createElement(oe,{status:s})),l.a.createElement(o.G,null,l.a.createElement(D,{id:e,checked:d,disabled:!m})),l.a.createElement(o.G,null,l.a.createElement(ne,{id:e,configurable:m})));const{object:ke,arrayOf:Le}=c.a;var Fe=({jobs:e})=>l.a.createElement(o.E,null,l.a.createElement(o.I,null,l.a.createElement(o.K,null,l.a.createElement(o.H,null,x.a.t("Job name")),l.a.createElement(o.H,null,x.a.t("Type")),l.a.createElement(o.H,null,x.a.t("Schedule")),l.a.createElement(o.H,null,x.a.t("Next run")),l.a.createElement(o.H,null,x.a.t("Status")),l.a.createElement(o.H,null,x.a.t("On/off")),l.a.createElement(o.H,null))),l.a.createElement(o.F,null,0===e.length?l.a.createElement(o.J,null,l.a.createElement(o.G,null,x.a.t("No jobs to display"))):e.map(e=>l.a.createElement(De,{key:e.id,job:e})))),Pe=t(202),we=t.n(Pe);const{bool:Be,object:Me,string:Ge,arrayOf:Ve,func:Ue}=c.a;var We=({jobs:e,showSystemJobs:a,setShowSystemJobs:t,jobFilter:r,setJobFilter:n})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:we.a.header},l.a.createElement("h1",{className:we.a.headerTitle},x.a.t("Scheduled jobs")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:we.a.headerLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:we.a.headerLinkIcon},l.a.createElement(o.k,null)),x.a.t("About job configuration"))),l.a.createElement(o.d,null,l.a.createElement("div",{className:we.a.controlContainer},l.a.createElement(o.l,{dataTest:"job-filter-input",placeholder:x.a.t("Filter jobs"),onChange:({value:e})=>{n(e)},value:r}),l.a.createElement("div",{className:we.a.controlRight},l.a.createElement(o.C,{dataTest:"job-toggle-switch",checked:a,label:x.a.t("Include system jobs"),onChange:({checked:e})=>{t(e)}}),l.a.createElement(o.b,{dataTest:"new-job-button",onClick:()=>{O.push("/add")}},x.a.t("New job")))),l.a.createElement(Fe,{jobs:e})));var Ye=()=>{const[e,a]=Object(n.useState)(!1),[t,o]=Object(n.useState)(""),s=Object(n.useContext)(d),c=((e,a)=>e.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())))(r.getJobsStore(s),t),i=e?c:(e=>e.filter(e=>e.configurable))(c);return l.a.createElement(We,{jobs:i,showSystemJobs:e,setShowSystemJobs:a,jobFilter:t,setJobFilter:o})};const qe=({setCron:e,small:a})=>{const[t,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:()=>r(!0),small:a},x.a.t("Choose from preset times")),t&&l.a.createElement(M,{hideModal:()=>r(!1),setCron:e}))};qe.defaultProps={small:!1};const{func:ze,bool:Xe}=c.a;var Ze=qe;const{string:Qe,func:Ke}=c.a;var $e=({id:e,onSuccess:a})=>{const[t,r]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{destructive:!0,onClick:()=>r(!0)},x.a.t("Delete job")),t&&l.a.createElement(W,{id:e,hideModal:()=>r(!1),onSuccess:a}))};const ea=({shouldConfirm:e,children:a,small:t,className:r})=>{const[s,c]=Object(n.useState)(!1),i=e?()=>c(!0):()=>O.push("/");return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:i,small:t,className:r},a),s&&l.a.createElement(q,{hideModal:()=>c(!1)}))};ea.defaultProps={className:"",shouldConfirm:!1,small:!1};const{string:aa,bool:ta}=c.a;var ra=ea;const{FORM_ERROR:na}=o.i;var la=e=>{const{details:{response:a}}=e,t={},r=[];return a.errorReports&&a.errorReports.length&&a.errorReports.forEach(e=>{e.errorProperty?t[e.errorProperty]=e.message:r.push(e.message)}),r.length>0&&(t[na]=r),t};const oa={resource:"jobConfigurations",type:"create",data:({job:e})=>e};var sa=()=>{const{refetchJobs:e}=Object(n.useContext)(d),a=Object(i.c)();return[t=>a.mutate(oa,{variables:{job:t}}).then(()=>{O.push("/"),e()}).catch(e=>{if("access"===e.type)return la(e);throw e})]};const ca={resource:"jobConfigurations",type:"update",id:({id:e})=>e,data:({job:e})=>e};var ia=({id:e})=>{const{refetchJobs:a}=Object(n.useContext)(d),t=Object(i.c)();return[r=>t.mutate(ca,{variables:{job:r,id:e}}).then(()=>{O.push("/"),a()}).catch(e=>{if("access"===e.type)return la(e);throw e})]},da=t(203),ma=t.n(da);const{array:ua}=c.a;var Ea=({submitError:e})=>e.length>0?l.a.createElement(o.w,{error:!0,title:x.a.t("Something went wrong whilst creating your job")},l.a.createElement("ul",{className:ma.a.list},e.map(e=>l.a.createElement("li",{key:e},e)))):null;const{Field:pa}=o.y,ba=Object(o.M)(o.Q,o.O);var ga=()=>l.a.createElement(pa,{name:"name",component:o.n,validate:ba,label:x.a.t("Name"),type:"text",required:!0});const{Field:ha}=o.y,_a=Object(o.M)(o.Q,o.O);var fa=()=>{const e=Object(n.useContext)(d),a=r.getJobTypesStore(e).map(({jobType:e})=>({value:e,label:A[e]}));return l.a.createElement(ha,{name:"jobType",validate:_a,component:o.A,options:a,label:x.a.t("Job type"),required:!0})};const Ta=e=>"number"===typeof e?e.toString():e,{Field:va}=o.y,{string:ya}=c.a;var ja=({label:e,name:a,parameterName:t})=>{const s=Object(n.useContext)(d),c=r.getParameterOptions(s,t);if(0===c.length)return l.a.createElement(o.u,{disabled:!0,helpText:x.a.t("No options available"),label:e});const i=c.map(e=>({value:e,label:S[e]||e}));return l.a.createElement(va,{name:a,component:o.v,options:i,label:e})};const{Field:Na}=o.y,{string:xa}=c.a;var Ca=({label:e,name:a,parameterName:t})=>{const s=Object(n.useContext)(d),c=r.getParameterOptions(s,t);if(0===c.length)return l.a.createElement(o.u,{disabled:!0,helpText:x.a.t("No options available"),label:e});const i=c.map(({id:e,displayName:a})=>({value:e,label:a}));return l.a.createElement(Na,{name:a,component:o.v,options:i,label:e})},Oa=t(204),Sa=t.n(Oa);const{Field:Aa}=o.y,{string:Ja}=c.a;var Ha=({jobType:e})=>{const a=Object(n.useContext)(d),t=r.getJobTypeParameters(a,e);if(0===t.length)return null;const s=t.map(({fieldName:e,name:a,klass:t})=>{const r={label:e,name:"".concat("jobParameters",".").concat(a)};let n=null;if("skipTableTypes"===a)return l.a.createElement(o.a,{marginTop:"16px",key:a},l.a.createElement(ja,Object.assign({},r,{parameterName:a})));switch(t){case"java.lang.String":n=l.a.createElement(Aa,Object.assign({},r,{component:o.n,type:"text"}));break;case"java.lang.Boolean":n=l.a.createElement(Aa,Object.assign({},r,{component:o.D,type:"checkbox"}));break;case"java.lang.Integer":n=l.a.createElement(Aa,Object.assign({},r,{component:o.n,format:Ta,type:"number"}));break;case"java.util.List":n=l.a.createElement(Ca,Object.assign({},r,{parameterName:a}))}return l.a.createElement(o.a,{marginTop:"16px",key:a},n)});return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h4",{className:Sa.a.headerTitle},x.a.t("Parameters"))),s)};const{Field:Ia,useFormState:Ra,useForm:Da}=o.y,ka=Ne;var La=()=>{const e=Da(),{values:a}=Ra({subscription:{values:!0}}),t=a.cronExpression,r=xe(t);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ia,{component:o.n,name:"cronExpression",validate:ka,label:x.a.t("CRON Expression"),type:"text",helpText:r,required:!0}),l.a.createElement(o.a,{marginTop:"8px"},l.a.createElement(Ze,{setCron:a=>e.change("cronExpression",a),small:!0})))};const{Field:Fa}=o.y,Pa=Object(o.M)(o.P,o.O,Object(o.N)(1,86400));var wa=()=>l.a.createElement(Fa,{component:o.n,name:"delay",validate:Pa,label:x.a.t("Delay"),type:"number",format:Ta,helpText:x.a.t("Delay in seconds ({{ lowerbound }} - {{ upperbound }})",{lowerbound:1,upperbound:86400}),required:!0});const{string:Ba}=c.a;var Ma=({jobType:e})=>{const a=Object(n.useContext)(d);switch(r.getJobType(a,e).schedulingType){case"CRON":return l.a.createElement(La,null);case"FIXED_DELAY":return l.a.createElement(wa,null);default:return null}};const Ga="jobType";var Va=t(205),Ua=t.n(Va);const{useForm:Wa}=o.y,Ya=({handleSubmit:e,pristine:a,submitting:t,submitError:r,hasSubmitErrors:s,values:c,setIsPristine:i})=>{const{subscribe:d}=Wa();Object(n.useEffect)(()=>d(({pristine:e})=>i(e),{pristine:!0}));const m=c[Ga],u=t?l.a.createElement(o.f,{small:!0}):null;return l.a.createElement("form",{onSubmit:e},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(ga,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(fa,null)),m&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Ma,{jobType:m})),m&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Ha,{jobType:m})),s&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(Ea,{submitError:r})),l.a.createElement("div",{className:Ua.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:a||t,icon:u,className:Ua.a.saveButton},x.a.t("Save")),l.a.createElement(ra,{shouldConfirm:!a},x.a.t("Cancel"))))},{func:qa,bool:za,object:Xa,array:Za}=c.a;Ya.defaultProps={submitError:[]};var Qa=Ya;const{Form:Ka}=o.y,{func:$a}=c.a;var et=({setIsPristine:e})=>{const[a]=sa();return l.a.createElement(Ka,{onSubmit:a,component:Qa,setIsPristine:e,destroyOnUnregister:!0})},at=t(206),tt=t.n(at);const{useForm:rt}=o.y,nt=({id:e,refetchJobs:a,handleSubmit:t,pristine:r,submitting:s,submitError:c,hasSubmitErrors:i,values:d,setIsPristine:m})=>{const{subscribe:u}=rt();Object(n.useEffect)(()=>u(({pristine:e})=>m(e),{pristine:!0}));const E=d[Ga],p=s?l.a.createElement(o.f,{small:!0}):null;return l.a.createElement("form",{onSubmit:t},l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(ga,null)),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(fa,null)),E&&l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(Ma,{jobType:E})),E&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"400px"},l.a.createElement(Ha,{jobType:E})),i&&l.a.createElement(o.a,{marginTop:"32px",maxWidth:"600px"},l.a.createElement(Ea,{submitError:c})),l.a.createElement("div",{className:tt.a.formButtonContainer},l.a.createElement(o.b,{primary:!0,type:"submit",disabled:r||s,icon:p,className:tt.a.saveButton},x.a.t("Save")),l.a.createElement(ra,{shouldConfirm:!r},x.a.t("Cancel")),l.a.createElement("span",{className:tt.a.deleteButton},l.a.createElement($e,{id:e,onSuccess:()=>{O.push("/"),a()}}))))},{func:lt,bool:ot,object:st,array:ct,string:it}=c.a;nt.defaultProps={submitError:[]};var dt=nt;const{Form:mt}=o.y,ut=["cronExpression","delay","jobParameters","jobType","name","schedulingType"],{func:Et}=c.a;var pt=({setIsPristine:e})=>{const{id:a}=Object(s.c)(),[t]=ia({id:a}),o=Object(n.useContext)(d),c=r.getRefetchJobs(o),i=r.getJobById(o,a),m=ut.reduce((e,a)=>(e[a]=i[a],e),{});return l.a.createElement(mt,{onSubmit:t,component:dt,setIsPristine:e,initialValues:m,id:a,refetchJobs:c,destroyOnUnregister:!0})},bt=t(213),gt=t.n(bt);const{string:ht}=c.a;var _t=({created:e,lastExecutedStatus:a,lastExecuted:t})=>{const r=Date.now(),n=ce()(e).from(r),o=J[a],s=t?ce()(t).from(r):"";return l.a.createElement("div",{className:gt.a.wrapper},l.a.createElement("h4",{className:gt.a.title},x.a.t("Job details")),l.a.createElement("div",{className:gt.a.details},l.a.createElement("div",null,x.a.t("Created {{ createdFromNow }}.",{createdFromNow:n})),s&&l.a.createElement("div",null,x.a.t("Last run {{ lastRunFromNow }}.",{lastRunFromNow:s})),o&&l.a.createElement("div",null,x.a.t("Last run status: {{ translatedStatus }}.",{translatedStatus:o,nsSeparator:">"}))))},ft=t(214),Tt=t.n(ft);const{bool:vt,func:yt,string:jt}=c.a;var Nt=({isPristine:e,setIsPristine:a,name:t,created:r,lastExecutedStatus:n,lastExecuted:s})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Tt.a.pageHeader},l.a.createElement(ra,{shouldConfirm:!e,className:Tt.a.pageHeaderButton,small:!0},x.a.t("Back to all jobs")),l.a.createElement("h2",{className:Tt.a.pageHeaderTitle},x.a.t("Job: {{ name }}",{name:t,nsSeparator:">"}))),l.a.createElement(o.d,{className:Tt.a.card},l.a.createElement("header",{className:Tt.a.cardHeader},l.a.createElement("h3",{className:Tt.a.cardHeaderTitle},x.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Tt.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Tt.a.cardHeaderInfo},l.a.createElement(o.k,null)),x.a.t("About job configuration"))),l.a.createElement("div",{className:Tt.a.jobDetails},l.a.createElement(_t,{created:r,lastExecutedStatus:n,lastExecuted:s})),l.a.createElement(pt,{setIsPristine:a})));var xt=()=>{const e=Object(n.useContext)(d),[a,t]=Object(n.useState)(!0),{id:o}=Object(s.c)(),c=r.getJobById(e,o);return l.a.createElement(Nt,{isPristine:a,setIsPristine:t,name:c.name,created:c.created,lastExecutedStatus:c.lastExecutedStatus,lastExecuted:c.lastExecuted})},Ct=t(215),Ot=t.n(Ct);var St=()=>{const e=Object(n.useContext)(d),{id:a}=Object(s.c)(),{name:t,created:c,lastExecutedStatus:i,lastExecuted:m,jobType:u,cronExpression:E}=r.getJobById(e,a);return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Ot.a.pageHeader},l.a.createElement(ra,{className:Ot.a.pageHeaderButton,small:!0},x.a.t("Back to all jobs")),l.a.createElement("h2",{className:Ot.a.pageHeaderTitle},x.a.t("System job: {{ name }}",{name:t,nsSeparator:">"}))),l.a.createElement(o.d,{className:Ot.a.card},l.a.createElement("header",{className:Ot.a.cardHeader},l.a.createElement("h3",{className:Ot.a.cardHeaderTitle},x.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Ot.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Ot.a.cardHeaderInfo},l.a.createElement(o.k,null)),x.a.t("About job configuration"))),l.a.createElement("div",{className:Ot.a.jobDetails},l.a.createElement(_t,{created:c,lastExecutedStatus:i,lastExecuted:m})),l.a.createElement(o.a,{maxWidth:"600px"},l.a.createElement(o.m,{label:x.a.t("Name"),disabled:!0,value:t})),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(o.z,{label:x.a.t("Job type"),disabled:!0,selected:u},l.a.createElement(o.B,{value:u,label:A[u]}))),l.a.createElement(o.a,{marginTop:"16px",maxWidth:"400px"},l.a.createElement(o.m,{label:x.a.t("CRON Expression"),disabled:!0,value:E,helpText:xe(E)})),l.a.createElement(o.a,{marginTop:"24px"},l.a.createElement(ra,null,x.a.t("Back to all jobs")))))},At=t(216),Jt=t.n(At);const{bool:Ht,func:It}=c.a;var Rt=({isPristine:e,setIsPristine:a})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:Jt.a.pageHeader},l.a.createElement(ra,{shouldConfirm:!e,className:Jt.a.pageHeaderButton,small:!0},x.a.t("Back to all jobs")),l.a.createElement("h2",{className:Jt.a.pageHeaderTitle},x.a.t("New Job"))),l.a.createElement(o.d,{className:Jt.a.card},l.a.createElement("header",{className:Jt.a.cardHeader},l.a.createElement("h3",{className:Jt.a.cardHeaderTitle},x.a.t("Configuration")),l.a.createElement("a",{href:"https://docs.dhis2.org/master/en/user/html/dataAdmin_scheduling.html#dataAdmin_scheduling_config",className:Jt.a.cardHeaderLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:Jt.a.cardHeaderInfo},l.a.createElement(o.k,null)),x.a.t("About job configuration"))),l.a.createElement(et,{setIsPristine:a})));var Dt=()=>{const[e,a]=Object(n.useState)(!0);return l.a.createElement(Rt,{isPristine:e,setIsPristine:a})};var kt=()=>l.a.createElement(s.b,{history:O},l.a.createElement(s.a,{exact:!0,path:"/",component:Ye}),l.a.createElement(s.a,{path:"/edit/:id",component:xt}),l.a.createElement(s.a,{path:"/view/:id",component:St}),l.a.createElement(s.a,{path:"/add",component:Dt}));var Lt=t(217),Ft=t.n(Lt);const Pt={me:{resource:"me"}},{node:wt}=c.a;var Bt=({children:e})=>{const{loading:a,error:t,data:r}=Object(i.e)(Pt);if(a)return l.a.createElement(o.o,null,l.a.createElement(o.e,null,l.a.createElement(o.f,null)));if(t)throw t;return(e=>{const{authorities:a}=e;return!!a&&(a.includes("ALL")||a.includes("F_SCHEDULING_ADMIN"))})(r.me)?l.a.createElement(l.a.Fragment,null,e):l.a.createElement("div",{className:Ft.a.noticeBoxWrapper},l.a.createElement(o.w,{error:!0,title:x.a.t("Not authorized")},x.a.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")))},Mt=t(218),Gt=t.n(Mt);const{node:Vt}=c.a;var Ut=({children:e})=>l.a.createElement("div",{className:Gt.a.wrapper},e);t(219);var Wt=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(o.g,{spacers:!0,colors:!0}),l.a.createElement(Ut,null,l.a.createElement(Bt,null,l.a.createElement(b,null,l.a.createElement(kt,null)))));t.d(a,"default",(function(){return Wt}))}}]);
//# sourceMappingURL=app.139f0b31.chunk.js.map