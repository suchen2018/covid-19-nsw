(this["webpackJsonpcovid-19-nsw"]=this["webpackJsonpcovid-19-nsw"]||[]).push([[0],{411:function(e,a,t){e.exports=t(880)},416:function(e,a,t){},759:function(e,a,t){},879:function(e,a,t){},880:function(e,a,t){"use strict";t.r(a);for(var n=t(0),l=t.n(n),r=t(79),c=t.n(r),o=(t(416),t(383)),m=t.n(o),u=t(891),i=t(99),d=t(164),s=t.n(d),h=[["March 1, 2020",2,6,0],["March 2, 2020",3,9,0],["March 3, 2020",6,15,0],["March 4, 2020",7,22,1],["March 5, 2020",8,25,0],["March 6, 2020",3,28,0],["March 7, 2020",8,36,0],["March 8, 2020",4,40,1],["March 9, 2020",7,47,0],["March 10, 2020",14,61,0]],E=[["March 7, 2020 09:00:00",34,545,6217,6796],["March 7, 2020 21:00:00",36,488,6690,7214],["March 8, 2020 09:00:00",38,488,6690,7216],["March 8, 2020 21:00:00",40,576,7361,7977],["March 9, 2020 16:32:00",47,476,7848,8371],["March 10, 2020 07:00:00",55,618,8361,9034],["March 10, 2020 21:00:00",61,1008,9096,10165]],p=h[h.length-1][1],f=h[h.length-1][2],w=h.map((function(e){return e[3]})).reduce((function(e,a){return e+a})),v=Object(i.a)(E[E.length-1],5),y=(v[0],v[1],{totalConfirmed:f,remain:f-w-4,today:p,death:w,recovered:4,wip:v[2],excluded:v[3],totalTested:v[4]}),g={todayData:h.map((function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];return[new Date(t),n]})),totalData:h.map((function(e){var a=Object(i.a)(e,3),t=a[0],n=(a[1],a[2]);return[new Date(t),n]})),deathData:h.map((function(e){var a=Object(i.a)(e,4),t=a[0],n=(a[1],a[2],a[3]);return[new Date(t),n]}))},b=function(e){return{legend:{show:!0},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value"},series:[{type:"line",name:"total confirmed cases",data:e.totalData},{type:"bar",name:"new cases on the day",data:e.todayData},{type:"bar",name:"new death cases",data:e.deathData}]}},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{option:b(g)}))},k=[],M=[],D=[],x=[],N=0;N<E.length;N++){var T=E[N],_=new Date(T[0]);k.push([_,T[1]]),M.push([_,T[2]]),D.push([_,T[3]]),x.push([_,T[4]])}var j={totalConfirmed:k,wip:M,excluded:D,totalTested:x},H=function(e){return{legend:{show:!0},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value",axisLabel:{formatter:function(e){return e>=1e3?"".concat(e/1e3,"k"):e}}},series:[{type:"line",name:"total confirmed",data:e.totalConfirmed},{type:"line",name:"under investigation",data:e.wip},{type:"line",name:"tested and excluded",data:e.excluded},{type:"line",name:"total tested",data:e.totalTested}]}},W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{option:H(j)}))},F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"ui small header"},"Trending:"),l.a.createElement(u.a,{columns:"equal",stackable:!0},l.a.createElement(u.a.Column,null,l.a.createElement(C,null)),l.a.createElement(u.a.Column,null,l.a.createElement(W,null))))},A=t(890),I=t(888),R=(t(759),function(){var e=y.totalConfirmed,a=y.remain,t=y.recovered,n=y.death,r=y.wip,c=y.excluded,o=y.totalTested;return l.a.createElement("div",{className:"summary"},l.a.createElement("h2",{className:"ui small header"},"Summary data:"),l.a.createElement(u.a,{columns:4},l.a.createElement(u.a.Column,null,l.a.createElement(A.a,{color:"blue",label:"Remain",value:a})),l.a.createElement(u.a.Column,null,l.a.createElement(A.a,{label:"Total",value:e})),l.a.createElement(u.a.Column,null,l.a.createElement(A.a,{color:"grey",label:"Death",value:n})),l.a.createElement(u.a.Column,null,l.a.createElement(A.a,{color:"green",label:"Recover",value:t}))),l.a.createElement(I.a,{unstackable:!0,compact:!0},l.a.createElement(I.a.Body,null,l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Cell,null,"Cases under investigation"),l.a.createElement(I.a.Cell,null,r)),l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Cell,null,"Cases tested and excluded"),l.a.createElement(I.a.Cell,null,c))),l.a.createElement(I.a.Footer,null,l.a.createElement(I.a.Row,null,l.a.createElement(I.a.HeaderCell,null,"Total tested"),l.a.createElement(I.a.HeaderCell,null,o)))))}),J=t(387),O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"ui small header"},"Confirmed cases details(best view on desktop):"),l.a.createElement(J.a,{className:"airtable-embed",url:"https://airtable.com/embed/shr289gFl44ZlCYnC?backgroundColor=teal",frameborder:"0",onmousewheel:"",width:"100%",height:"500"}))},S=t(886),B=t(892),P=t(889),U=function(){return l.a.createElement(S.a,{trigger:l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Joanna and her friends")},l.a.createElement(S.a.Header,null,"Team and Thanks"),l.a.createElement(S.a.Content,null,l.a.createElement(S.a.Description,null,l.a.createElement(B.a,null,"Help wanted!"),l.a.createElement(S.a.Description,null,l.a.createElement("p",null,"Now as there is no api provided, all the data are manually updated."),l.a.createElement("p",null,"We need more people to keep the data updated!! Please join telegram"," ","",l.a.createElement("a",{href:"https://t.me/covid_19_au"},"@covid_19_au")," if you wanna help, what we need is simply: when you saw data updated, notify in the group with the source link, thank you!")),l.a.createElement(B.a,null,"Team member"),l.a.createElement(P.a,{bulleted:!0},l.a.createElement(P.a.Item,null,l.a.createElement("a",{href:"https://wileam.com/"},"Joanna Wu"),": design and develop the website, update the data."),l.a.createElement(P.a.Item,null,l.a.createElement("a",{href:"https://ngot.me/"},"Henry Zhuang"),": devops and update the data")),l.a.createElement(B.a,null,"Thanks to"),l.a.createElement(P.a,{bulleted:!0},l.a.createElement(P.a.Item,null,l.a.createElement("a",{href:"https://www.echartsjs.com/"},"echarts")),l.a.createElement(P.a.Item,null,l.a.createElement("a",{href:"https://airtable.com/"},"airtable"))))))},V=function(){return l.a.createElement(S.a,{trigger:l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"contribute?")},l.a.createElement(S.a.Header,null,"Help needed!"),l.a.createElement(S.a.Content,null,l.a.createElement(S.a.Description,null,l.a.createElement("p",null,"Now as there is no api provided, all the data are manually updated."),l.a.createElement("p",null,"We need more people to keep the data updated!! Please join telegram"," ","",l.a.createElement("a",{href:"https://t.me/covid_19_au"},"@covid_19_au")," if you wanna help, what we need is simply: when you saw data updated, notify in the group with the source link, thank you!"))))},Z=function(){return l.a.createElement("p",null,l.a.createElement("small",null,"Made by ",l.a.createElement(U,null),", ",l.a.createElement(V,null)))},q=t(885),L=(t(878),t(879),{url:"https://covid-19.wileam.com/",identifier:"covid-19-wileam-com",title:"CoVid-19 Updates - NSW"});var Y=function(){return l.a.createElement("div",{className:"ui container"},l.a.createElement("header",null,l.a.createElement("h1",{className:"ui header"},"CoVid-19 Updates - NSW"),l.a.createElement("small",{className:"ui small"},"Site updated: ","March 10, 2020 23:35:34"," AEDT")),l.a.createElement(R,null),l.a.createElement(q.a,null),l.a.createElement(F,null),l.a.createElement(q.a,null),l.a.createElement(O,null),l.a.createElement(m.a.DiscussionEmbed,{shortname:"covid-19-wileam-com",config:L}),l.a.createElement("footer",null,l.a.createElement(Z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[411,1,2]]]);
//# sourceMappingURL=main.a8f7d184.chunk.js.map