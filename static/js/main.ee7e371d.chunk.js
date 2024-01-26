(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(8),s=i.n(c),a=(i(13),i(2)),n=i(1),r=(i(14),i(15),i(16),i(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},o=i(7),m=(i(18),i(6)),j=i.n(m);var b="https://via.placeholder.com/360x270.png?text=no%20preview",u=function(e){var t=e.setMovies,i=Object(n.useState)(""),c=Object(a.a)(i,2),s=c[0],d=c[1],m=Object(n.useState)({title:"",description:"",imgUrl:b,imdbUrl:"",imdbId:""}),u=Object(a.a)(m,2),h=u[0],v=u[1],O=Object(n.useState)(!0),x=Object(a.a)(O,2),p=x[0],f=x[1],g=Object(n.useState)(!1),N=Object(a.a)(g,2),y=N[0],w=N[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),w(!y),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=3303770f","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(s).then((function(e){if(Object.hasOwn(e,"Error"))f(!1);else{var t=e;v({title:t.Title,description:t.Plot,imgUrl:"N/A"!==t.Poster?t.Poster:b,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID}),f(!0)}})).finally((function(){return w(!1)}))},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{onChange:function(e){d(e.target.value),f(!0)},"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:j()("input",{"is-danger":!p&&s})})}),!p&&s&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{disabled:!s,"data-cy":"searchButton",type:"submit",className:j()("button is-light",{"is-loading":y}),children:h.title?"Search again":"Find a movie"})}),h.title&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{onClick:function(){t((function(e){return e.some((function(e){return e.imdbId===h.imdbId}))?Object(o.a)(e):[].concat(Object(o.a)(e),[h])})),d(""),v({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),f(!0)},"data-cy":"addButton",type:"button",className:"button is-primary",children:"Add to the list"})})]})]}),h.title&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:h})]})]})},h=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(u,{setMovies:c})})]})};s.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ee7e371d.chunk.js.map