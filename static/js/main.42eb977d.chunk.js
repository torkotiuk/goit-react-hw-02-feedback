(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={feedback__title:"Feedback_feedback__title__sOB13",feedback__list:"Feedback_feedback__list__2Ij0P",feedback__listItem:"Feedback_feedback__listItem__1sWIT",feedback__btn:"Feedback_feedback__btn__U6aKY",feedback__statTitle:"Feedback_feedback__statTitle__3CvpB",feedback__statList:"Feedback_feedback__statList__2zXLY",feedback__statList__item:"Feedback_feedback__statList__item__3vQBl"}},10:function(e,t,a){e.exports={container:"Container_container__WwGgQ"}},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(8),i=a.n(s),r=a(3),d=a(4),o=a(6),_=a(5),l=a(9),b=a.n(l),u=a(10),j=a.n(u),f=a(0),k=function(e){var t=e.children;return Object(f.jsx)("div",{className:j.a.container,children:t})},h=function(e){var t=e.children,a=e.title;e.className;return Object(f.jsx)("section",{className:b.a.section,children:Object(f.jsxs)(k,{children:[a&&Object(f.jsx)("h2",{children:a}),t]})})},O=a(1),m=a.n(O),g=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("ul",{className:m.a.feedback__statList,children:[Object(f.jsxs)("li",{className:m.a.feedback__statList__item,children:["Good: ",t]}),Object(f.jsxs)("li",{className:m.a.feedback__statList__item,children:["Neutral: ",a]}),Object(f.jsxs)("li",{className:m.a.feedback__statList__item,children:["Bad: ",c]}),Object(f.jsxs)("li",{className:m.a.feedback__statList__item,children:["Total: ",n]}),Object(f.jsxs)("li",{className:m.a.feedback__statList__item,children:["Positive feedback: ",s," %"]})]})})},x=function(e){var t=e.getGood,a=e.getNeutral,c=e.getBad;return Object(f.jsxs)("ul",{className:m.a.feedback__list,children:[Object(f.jsx)("li",{className:m.a.feedback__listItem,children:Object(f.jsx)("button",{className:m.a.feedback__btn,onClick:t,children:"Good"})}),Object(f.jsx)("li",{className:m.a.feedback__listItem,children:Object(f.jsx)("button",{className:m.a.feedback__btn,onClick:a,children:"Neutral"})}),Object(f.jsx)("li",{className:m.a.feedback__listItem,children:Object(f.jsx)("button",{className:m.a.feedback__btn,onClick:c,children:"Bad"})})]})},v=function(e){Object(o.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.getGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.getNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.getBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return(100*e.state.good/e.countTotalFeedback()).toFixed(1)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(f.jsxs)(k,{children:[Object(f.jsx)(h,{title:"Please leave feedback",children:Object(f.jsx)(x,{getGood:this.getGood,getNeutral:this.getNeutral,getBad:this.getBad})}),Object(f.jsx)(h,{title:"Statistics",children:Object(f.jsx)(g,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component),N=function(e){Object(o.a)(a,e);var t=Object(_.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(v,{})})}}]),a}(c.Component);a(16),a(17);i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={section:"Section_section__3Lb8w",section__title:"Section_section__title__2W35g"}}},[[18,1,2]]]);
//# sourceMappingURL=main.42eb977d.chunk.js.map