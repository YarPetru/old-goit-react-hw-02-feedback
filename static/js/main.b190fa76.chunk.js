(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(3),o=n.n(i),s=(n(13),n(4)),r=n(5),d=n(8),u=n(7),l=(n(14),n(6)),b=n.n(l),j=n(0),h=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(j.jsxs)("ul",{className:b.a.statisticsList,children:[Object(j.jsxs)("li",{children:["Good: ",e]}),Object(j.jsxs)("li",{children:["Neutral: ",n]}),Object(j.jsxs)("li",{children:["Bad: ",a]}),Object(j.jsxs)("li",{children:["Total: ",c]}),Object(j.jsxs)("li",{children:["Positive Feedback: ",i,"%"]})]})},g=function(t){var e=t.onLeaveGoodFeedback,n=t.onLeaveNeutralFeedback,a=t.onLeaveBadFeedback;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button",onClick:e,children:"Good"}),Object(j.jsx)("button",{type:"button",onClick:n,children:"Neutral"}),Object(j.jsx)("button",{type:"button",onClick:a,children:"Bad"})]})},v=function(t){var e=t.onDischarge;return Object(j.jsx)("button",{type:"button",onClick:e,children:"Discharge statistics"})};var O=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e}),n]})},f=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.addGoodRating=function(){t.setState((function(t){return{good:t.good+1}}))},t.addNeutralRating=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.addBadRating=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.dischargeRatings=function(){t.setState({good:0,neutral:0,bad:0})},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage(),n=this.state,a=n.good,c=n.neutral,i=n.bad;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{title:"Please leave feedback",children:Object(j.jsx)(g,{onLeaveGoodFeedback:this.addGoodRating,onLeaveNeutralFeedback:this.addNeutralRating,onLeaveBadFeedback:this.addBadRating})}),Object(j.jsxs)(O,{title:"Statistics",children:[Object(j.jsx)(h,{good:a,neutral:c,bad:i,total:t,positivePercentage:e}),Object(j.jsx)(v,{onDischarge:this.dischargeRatings})]})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={statisticsList:"Statistics_statisticsList__nAy9W"}}},[[16,1,2]]]);
//# sourceMappingURL=main.b190fa76.chunk.js.map