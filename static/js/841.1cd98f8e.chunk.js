"use strict";(self.webpackChunksocial_media=self.webpackChunksocial_media||[]).push([[841],{6841:function(t,e,r){r.r(e),r.d(e,{default:function(){return z}});var i=r(8683),s=r(5671),o=r(3144),n=r(136),u=r(5716),a=r(2791),l=r(364),p=r(1631),f="avatar_ava__OOq8i",c=r(2026),d=r(184),h=function(t){return(0,d.jsx)("div",{children:(0,d.jsx)("img",{className:f,src:t.photo||c})})},x="description_descr__YbYn+",j="description_description_items__Ch-Yr",m=r(2871),v=r(885),P="profile-status_profile_status__z-gMg",_=function(t){var e=(0,a.useState)(!1),r=(0,v.Z)(e,2),i=r[0],s=r[1],o=(0,a.useState)(t.profileStatus),n=(0,v.Z)(o,2),u=n[0],l=n[1];return(0,a.useEffect)((function(){l(t.profileStatus)}),[t.profileStatus]),(0,d.jsxs)("div",{className:P,children:[!i&&(0,d.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.profileStatus||"No status"}),i&&(0,d.jsx)("input",{onChange:function(t){l(t.target.value)},onBlur:function(){s(!1),t.updateProfileStatus(u)},autoFocus:!0,value:u})]})},S=function(t){return t.profile?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)(h,{photo:t.profile.photos.large,myProfilePhoto:t.myProfilePhoto,userId:t.profile.userId}),(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("div",{children:t.profile.aboutMe}),(0,d.jsx)("div",{children:t.profile.fullName}),(0,d.jsx)("div",{children:"Old: 23"})]})]}),(0,d.jsx)(_,{profileStatus:t.profileStatus,updateProfileStatus:t.updateProfileStatus})]}):(0,d.jsx)(m.Z,{})},g=r(704),Z=r(6139),N=r(3713),y=r(6019),b=r(2982),C="post-item_postItem__opKYc",D=function(t){var e=(0,b.Z)(t.postsData).reverse().map((function(t){return(0,d.jsxs)("div",{className:C,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvaBdtJ4GaN7m79jU-Y47NqT3Grvxd7qIZ9VKUZKyU1ynYKxoNdlQCixTRDnliBE62os&usqp=CAU"})}),(0,d.jsx)("div",{children:t.text}),(0,d.jsxs)("div",{children:["Likes: ",t.likesCount]})]})}));return(0,d.jsx)("div",{children:e})},k="posts_posts__vfLsB",I=(0,N.DT)(10),A=(0,N.oQ)(2),q=(0,g.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,d.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,d.jsx)(Z.Z,{component:y.gx,placeholder:"Type your text",name:"NewPostText",validate:[N.C1,I,A]}),(0,d.jsx)("button",{children:"Add Post"})]})})),T=a.memo((function(t){var e=t.profileData;return(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)("h3",{children:"My Posts"}),(0,d.jsx)(q,{onSubmit:function(e){t.addPost(e.NewPostText)}}),(0,d.jsx)(D,{postsData:e.postsData})]})})})),U=(0,l.$j)((function(t){return{profileData:t.profilePage}}),(function(t){return{addPost:function(e){t((0,p.HP)(e))}}}))(T),Y="profile_profile__I67jP",w=function(t){return(0,d.jsxs)("div",{className:Y,children:[(0,d.jsx)(S,{profile:t.profile,myProfilePhoto:t.profilePhoto,profileStatus:t.profileStatus,updateProfileStatus:t.updateProfileStatus}),(0,d.jsx)(U,{})]})},B=r(1548),F=r(7781),K=r(5628),M=function(t){(0,n.Z)(r,t);var e=(0,u.Z)(r);function r(){return(0,s.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props.params.userId;t||(t=this.props.authorizedUserId),this.props.getProfile(t),this.props.getProfileStatus(t)}},{key:"render",value:function(){return(0,d.jsx)(w,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile}))}}]),r}(a.Component),z=(0,F.qC)((0,l.$j)((function(t){return{profile:t.profilePage.profile,profilePhoto:t.profilePage.profilePhoto,profileStatus:t.profilePage.profileStatus,authorizedUserId:t.auth.userId}}),{getProfile:p.Ai,getProfileStatus:p.TL,updateProfileStatus:p.vq}),K.Z,B.D)(M)},1548:function(t,e,r){r.d(e,{D:function(){return d}});var i=r(8683),s=r(5671),o=r(3144),n=r(136),u=r(5716),a=r(2791),l=r(364),p=r(6871),f=r(184),c=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){(0,n.Z)(a,e);var r=(0,u.Z)(a);function a(){return(0,s.Z)(this,a),r.apply(this,arguments)}return(0,o.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(t,(0,i.Z)({},this.props)):(0,f.jsx)(p.Fg,{to:"/login"})}}]),a}(a.Component);return(0,l.$j)(c)(e)}}}]);
//# sourceMappingURL=841.1cd98f8e.chunk.js.map