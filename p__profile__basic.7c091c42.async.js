(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"5ejW":function(e,t,a){e.exports={title:"title___-lUBE"}},I7zK:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("g9YV"),a("wCAj")),l=(a("/zsF"),a("PArb")),i=(a("bP8k"),a("gFTJ")),c=a("fWQN"),o=a("mtLc"),s=a("yKVA"),m=a("879j"),d=(a("Awhp"),a("KrTs")),u=a("q1tI"),p=a.n(u),f=a("Hx5s"),b=a("9kvl"),g=a("5ejW"),E=a.n(g),y=[{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u5f53\u524d\u8fdb\u5ea6",dataIndex:"rate",key:"rate"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return"success"===e?p.a.createElement(d["a"],{status:"success",text:"\u6210\u529f"}):p.a.createElement(d["a"],{status:"processing",text:"\u8fdb\u884c\u4e2d"})}},{title:"\u64cd\u4f5c\u5458ID",dataIndex:"operator",key:"operator"},{title:"\u8017\u65f6",dataIndex:"cost",key:"cost"}],h=function(e){Object(s["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"profileAndbasic/fetchBasic"})}},{key:"render",value:function(){var e=this.props,t=e.profileAndbasic,a=e.loading,c=t.basicGoods,o=t.basicProgress,s=[];if(c.length){var m=0,d=0;c.forEach((function(e){m+=Number(e.num),d+=Number(e.amount)})),s=c.concat({id:"\u603b\u8ba1",num:m,amount:d})}var u=function(e,t,a){var n={children:e,props:{}};return a===c.length&&(n.props.colSpan=0),n},b=[{title:"\u5546\u54c1\u7f16\u53f7",dataIndex:"id",key:"id",render:function(e,t,a){return a<c.length?p.a.createElement("a",{href:""},e):{children:p.a.createElement("span",{style:{fontWeight:600}},"\u603b\u8ba1"),props:{colSpan:4}}}},{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"name",key:"name",render:u},{title:"\u5546\u54c1\u6761\u7801",dataIndex:"barcode",key:"barcode",render:u},{title:"\u5355\u4ef7",dataIndex:"price",key:"price",align:"right",render:u},{title:"\u6570\u91cf\uff08\u4ef6\uff09",dataIndex:"num",key:"num",align:"right",render:function(e,t,a){return a<c.length?e:p.a.createElement("span",{style:{fontWeight:600}},e)}},{title:"\u91d1\u989d",dataIndex:"amount",key:"amount",align:"right",render:function(e,t,a){return a<c.length?e:p.a.createElement("span",{style:{fontWeight:600}},e)}}];return p.a.createElement(f["c"],null,p.a.createElement(n["a"],{bordered:!1},p.a.createElement(i["a"],{title:"\u9000\u6b3e\u7533\u8bf7",style:{marginBottom:32}},p.a.createElement(i["a"].Item,{label:"\u53d6\u8d27\u5355\u53f7"},"1000000000"),p.a.createElement(i["a"].Item,{label:"\u72b6\u6001"},"\u5df2\u53d6\u8d27"),p.a.createElement(i["a"].Item,{label:"\u9500\u552e\u5355\u53f7"},"1234123421"),p.a.createElement(i["a"].Item,{label:"\u5b50\u8ba2\u5355"},"3214321432")),p.a.createElement(l["a"],{style:{marginBottom:32}}),p.a.createElement(i["a"],{title:"\u7528\u6237\u4fe1\u606f",style:{marginBottom:32}},p.a.createElement(i["a"].Item,{label:"\u7528\u6237\u59d3\u540d"},"\u4ed8\u5c0f\u5c0f"),p.a.createElement(i["a"].Item,{label:"\u8054\u7cfb\u7535\u8bdd"},"18100000000"),p.a.createElement(i["a"].Item,{label:"\u5e38\u7528\u5feb\u9012"},"\u83dc\u9e1f\u4ed3\u50a8"),p.a.createElement(i["a"].Item,{label:"\u53d6\u8d27\u5730\u5740"},"\u6d59\u6c5f\u7701\u676d\u5dde\u5e02\u897f\u6e56\u533a\u4e07\u5858\u8def18\u53f7"),p.a.createElement(i["a"].Item,{label:"\u5907\u6ce8"},"\u65e0")),p.a.createElement(l["a"],{style:{marginBottom:32}}),p.a.createElement("div",{className:E.a.title},"\u9000\u8d27\u5546\u54c1"),p.a.createElement(r["a"],{style:{marginBottom:24},pagination:!1,loading:a,dataSource:s,columns:b,rowKey:"id"}),p.a.createElement("div",{className:E.a.title},"\u9000\u8d27\u8fdb\u5ea6"),p.a.createElement(r["a"],{style:{marginBottom:16},pagination:!1,loading:a,dataSource:o,columns:y})))}}]),a}(u["Component"]);t["default"]=Object(b["c"])((function(e){var t=e.profileAndbasic,a=e.loading;return{profileAndbasic:t,loading:a.effects["profileAndbasic/fetchBasic"]}}))(h)},hkKa:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("J4zp"),r=a.n(n),l=a("q1tI");function i(){var e=l["useReducer"]((function(e){return e+1}),0),t=r()(e,2),a=t[1];return a}}}]);