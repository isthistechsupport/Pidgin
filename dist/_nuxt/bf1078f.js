(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{410:function(e,t,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("9b39f31e",content,!0,{sourceMap:!1})},433:function(e,t,r){var content=r(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("4c85e2c9",content,!0,{sourceMap:!1})},434:function(e,t,r){"use strict";r(410)},435:function(e,t,r){var m=r(24)(!1);m.push([e.i,".member-card{display:flex;flex-direction:row;grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px;width:100%;height:100%}.member-card__contents{padding:80px 30px;width:max(670px,60%)}.member-card__contents--open{padding:30px}.member-card__header{margin-bottom:20px}.member-card__header h2{color:#000;font-size:2.25rem;font-weight:700;line-height:1.2;margin:0}.member-card__header h3{color:#ff7276;font-size:1.5rem;font-weight:600;line-height:1.2;margin:0}.member-card__body p{color:#4f4f4f;font-size:1.25rem;font-weight:300;line-height:1.2;margin-bottom:20px}.member-card__img{border-radius:20px;overflow:hidden;width:min(462px,100%)}.member-card__img img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.member-card .read-more-btn span{cursor:pointer;font-size:1.25rem;font-weight:600;line-height:1.2;margin:0;position:relative;z-index:1}.member-card .read-more-btn .read-more{display:inline-block;color:#007cba}.member-card .read-more-btn .read-less{display:none;color:#6d6d6d}.member-card .read-more-btn--expanded .read-more{display:none}.member-card .read-more-btn--expanded .read-less{display:inline-block}.member-card .card__read-more{height:0;opacity:0;padding:0}.member-card .card__read-more,.member-card .card__read-more--open{display:block;transition-property:all;transition-duration:.3s;transition-timing-function:ease-out;transition-delay:0s}.member-card .card__read-more--open{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;opacity:1;padding:20px 0 0}@media(max-width:820px){.member-card{flex-direction:column;align-items:center;grid-column-gap:0;-moz-column-gap:0;column-gap:0;grid-row-gap:30px;row-gap:30px}.member-card__contents{padding:0;width:100%}.member-card__header{text-align:center}.member-card__body p{text-align:justify}.member-card__img{width:386px}}@media(max-width:600px){.member-card__body p{font-size:1rem;margin-bottom:1rem}.member-card__img{width:100%}}",""]),e.exports=m},467:function(e,t,r){"use strict";r.r(t);var m={props:["imgPath","alt","name","jobTitle","text1","text2"],data:function(){return{isExpanded:!1}},methods:{toggleState:function(){this.isExpanded=!this.isExpanded}}},o=(r(434),r(9)),component=Object(o.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"member-card"},[r("div",{staticClass:"member-card__img"},[r("img",{attrs:{src:e.imgPath,alt:e.alt}})]),e._v(" "),r("div",{staticClass:"member-card__contents",class:{"member-card__contents--open":e.isExpanded}},[r("div",{staticClass:"member-card__header"},[r("h2",[e._v(e._s(e.name))]),e._v(" "),r("h3",[e._v(e._s(e.jobTitle))])]),e._v(" "),r("div",{staticClass:"member-card__body"},[r("p",[e._v("\n        "+e._s(e.text1)+"\n\n        "),r("span",{staticClass:"card__read-more",class:{"card__read-more--open":e.isExpanded}},[e._v("\n          "+e._s(e.text2)+"\n        ")])]),e._v(" "),r("div",{staticClass:"read-more-btn",class:{"read-more-btn--expanded":e.isExpanded},on:{click:e.toggleState}},[r("span",{staticClass:"read-more"},[e._v(e._s(e.$t("about").about_members.toggle_label_read_more)+" +")]),e._v(" "),r("span",{staticClass:"read-less"},[e._v(e._s(e.$t("about").about_members.toggle_label_read_less)+" -")])])])])])}),[],!1,null,null,null);t.default=component.exports},482:function(e,t,r){"use strict";r(433)},483:function(e,t,r){var m=r(24)(!1);m.push([e.i,".about-members{display:flex;flex-direction:column;align-items:center;grid-row-gap:70px;row-gap:70px;margin:0 auto;max-width:1200px;padding:100px 24px}.about-members__header{text-align:center}.about-members__header h2{color:#000;font-size:3rem;font-weight:600;line-height:1.2;margin:0 0 50px}.about-members__header h2 b{color:#007cba}.about-members__header p{color:#4f4f4f;font-size:1.25rem;font-weight:300;line-height:1.2;margin:0}.about-members__member__list{display:flex;flex-direction:column;align-items:center;grid-row-gap:70px;row-gap:70px}.about-members__member__list .member-card:nth-child(2n){flex-direction:row-reverse}.about-members__member__list .member-card__header h3{color:#007cba}@media(max-width:820px){.about-members{max-width:820px;padding:100px 40px}.about-members .member-card:nth-child(2n){flex-direction:column}}@media(max-width:600px){.about-members{max-width:600px;padding:40px 20px 80px;grid-row-gap:40px;row-gap:40px}.about-members__header h2{font-size:2rem;margin:0 0 30px}.about-members__header p{font-size:1rem}.about-members .member-card__list{grid-row-gap:40px;row-gap:40px}}",""]),e.exports=m},522:function(e,t,r){"use strict";r.r(t);var m={},o=(r(482),r(9)),component=Object(o.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about-members",attrs:{id:"about_members_detail"}},[r("div",{staticClass:"about-members__header"},[r("h2",[e._v("\n      "+e._s(e.$t("about").about_members.title)),r("b",[e._v(e._s(e.$t("about").about_members.title_highlighted))])]),e._v(" "),r("p",[e._v("\n      "+e._s(e.$t("about").about_members.text)+"\n    ")])]),e._v(" "),r("div",{staticClass:"about-members__member__list"},e._l(e.$t("about").about_members.members,(function(e){return r("AboutMemberCard",{key:e.id,attrs:{imgPath:"/images"+e.member_card_img,alt:e.name,name:e.name,jobTitle:e.job_title,text1:e.paragraph_1,text2:e.paragraph_2}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AboutMemberCard:r(467).default})}}]);