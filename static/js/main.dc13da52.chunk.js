(this.webpackJsonppoke=this.webpackJsonppoke||[]).push([[0],{86:function(n,e,t){},87:function(n,e,t){},99:function(n,e,t){"use strict";t.r(e);var a,i,c,o,r,s,d,l,p,j,m=t(2),b=t.n(m),h=t(73),u=t.n(h),x=(t(86),t(87),t(29)),O=t(12),g=t(79),f=t(49),k=t(11),v=t(80),w=t(13),y=t(5),S=w.a.nav(a||(a=Object(k.a)(["\n    height: 10vh;\n\n    @media screen and (max-width: 768px){\n        position: relative;\n    }\n"]))),C=w.a.div(i||(i=Object(k.a)(["\n    @media screen and (max-width: 768px){\n        position: absolute;\n        cursor: pointer;\n        right: 5%;\n        top: 50%;\n        transform: translate(-5%, -50%);\n        background: lightgreen;\n    }\n"]))),N=w.a.div(c||(c=Object(k.a)(["\n    @media screen and (max-width: 768px){\n        width: 30px;\n        height: 3px;\n        background: white;\n        margin: 5px;\n    }\n"]))),I=w.a.div(o||(o=Object(k.a)(["\n    display: flex;\n    list-style: none;\n    width: 50%;\n    height: 100%;\n    justify-content: space-around;\n    align-items: center;\n    margin-left: auto;\n\n    @media screen and (max-width: 768px){\n        position: right;\n        background: lightgrey;\n        height: 150vh;\n        width: ",";\n        flex-direction: column;\n        transition: .2s ease-in all;\n    }\n\n    a {\n        color: white;\n        text-decoration: none;\n        font-size: 16px;\n        font-family: sans-serif;\n    }\n"])),(function(n){return n.isSidebarOpen?"0%":"35%"})),z=w.a.div(r||(r=Object(k.a)(["\n    @media screen and (max-width: 768px){\n        background: lightgrey;\n        width: ",";\n        height: 10vh;\n        border-top: 1px solid white;\n        border-bottom: 1px solid white;\n        box-sizing: border-box;\n        top: 100%;\n        position: absolute;\n        transition: .2 ease-in all;\n    }\n"])),(function(n){return n.isSidebarOpen?"0%":"35%"})),F=w.a.h3(s||(s=Object(k.a)(["\n    @media screen and (max-width: 768px){\n        display: ",";\n    }\n"])),(function(n){return n.isSidebarOpen?"none":"flex"})),$=function(){var n=Object(O.g)().pathname,e=Object(m.useState)(!1),t=Object(v.a)(e,2),a=t[0],i=t[1];return console.log("Is sidebar open ".concat(a)),Object(y.jsxs)(S,{children:[Object(y.jsxs)(C,{onClick:function(){return i(!a)},children:[Object(y.jsx)(N,{}),Object(y.jsx)(N,{}),Object(y.jsx)(N,{})]}),Object(y.jsx)(I,{isSidebarOpen:a,children:Object(y.jsx)(z,{isSidebarOpen:a,children:Object(y.jsx)(x.b,{to:"/poke-list-container",className:"/poke-list-container"===n?"active":"",children:Object(y.jsx)(F,{isSidebarOpen:a,children:"PokeList"})})})})]})},L=t(33),q=t.n(L),P=q()(d||(d=Object(k.a)(["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      message\n      results {\n        url\n        name\n        image\n      }\n    }\n  }\n"]))),E=q()(l||(l=Object(k.a)(["\n  query pokemon($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      abilities {\n        ability {\n          name\n        }\n      }\n      moves {\n        move {\n          name\n        }\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n"])));function T(n){var e=n.pokemon;return Object(y.jsx)(D,{children:Object(y.jsxs)(x.b,{to:{pathname:"/poke-detail-container",state:{pokemon:e}},children:[Object(y.jsx)(B,{children:e.name}),Object(y.jsx)("img",{src:e.image,alt:e.name}),Object(y.jsx)("h3",{children:"Owned: 0"})]})})}var A,B=w.a.h2(p||(p=Object(k.a)(["\n    font-size: 20px;\n    color: white;\n    text-transform: capitalize;\n    margin: 0;\n"]))),D=w.a.div(j||(j=Object(k.a)(["\n    border-radius: 25px;\n    width: 150px;\n    height: 110px;\n    margin: 8px;\n    padding: 8px;\n    background-color: #c6eced;\n\n    @media screen and (max-width: 960px) {\n        width: 150px;\n        heigth:110px;\n    }\n\n    img {\n        padding: 0;\n        margin: 0;\n        float: right;\n    }\n\n    h3 {\n        font-size: 14px;\n        color: white;\n        text-transform: capitalize;\n        background: #a0cdce;\n        border-radius: 5px;\n        margin: 0;\n        width: -moz-fit-content;\n        width: fit-content;\n        padding-left: 3px;\n    }\n\n    a {\n        text-decoration: none;\n    }\n"])));function J(){var n=Object(f.useQuery)(P,{variables:{limit:15,offset:0}}),e=n.loading,t=n.error,a=n.data;return e?"Loading...":t?"Error! ".concat(t.message):Object(y.jsx)(H,{children:a&&a.pokemons.results&&a.pokemons.results.map((function(n){return Object(y.jsx)(T,{pokemon:n})}))})}var M,Q,_,G,H=w.a.div(A||(A=Object(k.a)(["\n  width: 546px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;  \n  justify-content: left;\n  background: grey;\n\n  @media screen and (max-width: 630px) {\n    width: 365px;\n  }\n"]))),K=t(37),R=t(38),U=t(40),V=t(39),W=(t(1),m.Component,function(n){Object(U.a)(t,n);var e=Object(V.a)(t);function t(n){var a;return Object(K.a)(this,t),(a=e.call(this,n)).handleClick=function(){localStorage.setItem(a.state.nickname,a.props.name),localStorage.setItem("owned",a.state.count)},a.handleNicknameChange=function(n){a.setState({nickname:n.target.value})},a.handleSubmit=function(n){alert("".concat(a.state.nickname)),n.preventDefault()},a.state={nickname:"",count:parseInt(localStorage.getItem("owned"))+1},a}return Object(R.a)(t,[{key:"render",value:function(){this.props.name,this.state.nickname;return Object(y.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Nickname"}),Object(y.jsx)("input",{type:"text",value:this.state.nickname,onChange:this.handleNicknameChange})]}),Object(y.jsx)("p",{children:this.state.count}),Object(y.jsx)("button",{onClick:this.handleClick,children:"Submit"})]})}}]),t}(m.Component));function X(n){var e=n.pokemon.pokemon.name,t=Object(f.useQuery)(E,{variables:{name:e}}),a=t.loading,i=t.error,c=t.data;return a?"Loading...":i?"Error! ".concat(i.message," ").concat(e):Object(y.jsxs)(Z,{children:[Object(y.jsxs)(en,{children:[Object(y.jsx)(nn,{src:c.pokemon.sprites.front_default,alt:c.pokemon.name}),Object(y.jsx)(W,{name:c.pokemon.name}),Object(y.jsx)(tn,{children:"Catch!"}),Object(y.jsx)("div",{children:c.pokemon.move})]}),c.pokemon.types?Object(y.jsxs)("div",{className:"type",children:[Object(y.jsx)("h5",{children:"Types:"}),Object(y.jsx)("div",{className:"attributes",children:c.pokemon.types.map((function(n){return Object(y.jsx)("div",{className:"round",children:n.type.name})}))})]}):null,c.pokemon.abilities?Object(y.jsxs)("div",{className:"type",children:[Object(y.jsx)("h5",{children:"Abilities:"}),Object(y.jsx)("div",{className:"attributes",children:c.pokemon.abilities.map((function(n){return Object(y.jsx)("div",{className:"round",children:n.ability.name})}))})]}):null,c.pokemon.types?Object(y.jsxs)("div",{className:"type",children:[Object(y.jsx)("h5",{children:"Moves:"}),Object(y.jsx)("div",{className:"attributes",children:c.pokemon.moves.map((function(n){return Object(y.jsx)("div",{className:"round",children:n.move.name})}))})]}):null,Object(y.jsx)(en,{})]})}var Y,Z=w.a.div(M||(M=Object(k.a)(["\n    display: flex;\n    flex-wrap: wrap;  \n    justify-content: center;\n"]))),nn=w.a.img(Q||(Q=Object(k.a)([""]))),en=w.a.div(_||(_=Object(k.a)([""]))),tn=w.a.button(G||(G=Object(k.a)(["\n    padding: 0.8rem;\n    margin-bottom: 3rem;\n    cursor: pointer;\n    border-radius: 15px;\n    border: none;\n    outline: none;\n    font-weight: 800;\n    text-transform:uppercase;\n    &: hover {\n    background-color: #CC2020;\n    color: #F3F3F3;\n    }\n"]))),an=function(n){Object(U.a)(t,n);var e=Object(V.a)(t);function t(n){var a;return Object(K.a)(this,t),(a=e.call(this,n)).state={data:n.location.state},a}return Object(R.a)(t,[{key:"render",value:function(){var n=this.state.data;return Object(y.jsx)(cn,{children:Object(y.jsx)(X,{pokemon:n})})}}]),t}(m.Component),cn=w.a.div(Y||(Y=Object(k.a)(["\n  margin-top: 4rem;\n"]))),on=an;var rn=function(){var n=new g.a({uri:"https://graphql-pokeapi.vercel.app/api/graphql"});return localStorage.getItem("owned")||localStorage.setItem("owned",0),Object(y.jsx)(f.ApolloProvider,{client:n,children:Object(y.jsx)("main",{children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)($,{}),Object(y.jsxs)(O.d,{children:[Object(y.jsx)(O.b,{exact:!0,path:"/poke",children:Object(y.jsx)(O.a,{to:"/poke-list-container"})}),Object(y.jsx)(O.b,{exact:!0,path:"/poke-list-container",component:J}),Object(y.jsx)(O.b,{exact:!0,path:"/poke-detail-container",component:on})]})]})})})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),c(n),o(n)}))};u.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(rn,{})}),document.getElementById("root")),sn()}},[[99,1,2]]]);
//# sourceMappingURL=main.dc13da52.chunk.js.map