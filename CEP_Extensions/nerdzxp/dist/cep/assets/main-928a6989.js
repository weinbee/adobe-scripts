"use strict"
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${Me}"].${e}(${c});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,l=>{try{const s=JSON.parse(l);s.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(s)):n(s)}catch{o(l)}})}),$e=e=>Le(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),it=(e=!0)=>{if(window.cep){const t=I.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;Ee.existsSync(n)?(e&&console.log(n),$e(n)):Ee.existsSync(o)&&(e&&console.log(o),$e(o))}},ee=e=>{window.cep?I.openURLInDefaultBrowser(e):location.href=e},rt=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},st=e=>{const t=()=>{const n=rt();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:c,b:l}=n.rgb;return`rgb(${o}, ${c}, ${l})`};e(t()),I.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})},ct="../assets/vite-63a26457.svg",lt="../assets/svelte-0f9e2da6.svg",at="../assets/typescript-5139402d.svg",dt="../assets/sass-0db97415.svg",ut="../assets/node-js-b824f758.svg",ft="../assets/adobe-96d52626.svg",pt="../assets/bolt-cep-d4058830.svg";function _t(e){let t,n,o,c,l,s,w,g,f,O,p,a,m,q,oe,ie,B,M,re,se,ce,J,L,le,ae,de,h,P,ue,Z,fe,F,x,pe,_e,D,k,ge,we,H,he,Q,me,y,z,ye,U,ve,X,Y,be;return{c(){t=d("div"),n=d("header"),o=d("img"),l=b(),s=d("div"),w=d("div"),g=d("img"),O=_(`\r
        Vite`),p=_(`\r
      +\r
      `),a=d("div"),m=d("img"),oe=_(`\r
        Svelte`),ie=_(`\r
      +\r
      `),B=d("div"),M=d("img"),se=_(`\r
        TypeScript`),ce=_(`\r
      +\r
      `),J=d("div"),L=d("img"),ae=_(`\r
        Sass`),de=b(),h=d("div"),P=d("button"),ue=_("Count is: "),Z=_(e[0]),fe=b(),F=d("button"),x=d("img"),_e=b(),D=d("button"),k=d("img"),we=b(),H=d("button"),H.textContent="Ts",he=b(),Q=d("p"),Q.innerHTML="Edit <code>main.svelte</code> and save to test HMR updates.",me=b(),y=d("p"),z=d("button"),z.textContent="Bolt Docs",ye=_(`\r
      |\r
      `),U=d("button"),U.textContent="Svelte Docs",ve=_(`\r
      |\r
      `),X=d("button"),X.textContent="Vite Docs",v(o.src,c=pt)||u(o,"src",c),u(o,"class","icon"),u(o,"alt",""),v(g.src,f=ct)||u(g,"src",f),u(g,"alt",""),v(m.src,q=lt)||u(m,"src",q),u(m,"alt",""),v(M.src,re=at)||u(M,"src",re),u(M,"alt",""),v(L.src,le=dt)||u(L,"src",le),u(L,"alt",""),u(s,"class","stack-icons"),u(x,"class","icon-button"),v(x.src,pe=ut)||u(x,"src",pe),u(x,"alt",""),u(k,"class","icon-button"),v(k.src,ge=ft)||u(k,"src",ge),u(k,"alt",""),u(h,"class","button-group"),u(n,"class","app-header"),u(t,"class","app"),Oe(t,"background-color",e[1])},m(E,V){Te(E,t,V),i(t,n),i(n,o),i(n,l),i(n,s),i(s,w),i(w,g),i(w,O),i(s,p),i(s,a),i(a,m),i(a,oe),i(s,ie),i(s,B),i(B,M),i(B,se),i(s,ce),i(s,J),i(J,L),i(J,ae),i(n,de),i(n,h),i(h,P),i(P,ue),i(P,Z),i(h,fe),i(h,F),i(F,x),i(h,_e),i(h,D),i(D,k),i(h,we),i(h,H),i(n,he),i(n,Q),i(n,me),i(n,y),i(y,z),i(y,ye),i(y,U),i(y,ve),i(y,X),Y||(be=[S(P,"click",e[5]),S(F,"click",e[4]),S(D,"click",e[2]),S(H,"click",e[3]),S(z,"click",e[6]),S(U,"click",e[7]),S(X,"click",e[8])],Y=!0)},p(E,[V]){V&1&&Re(Z,E[0]),V&2&&Oe(t,"background-color",E[1])},i:A,o:A,d(E){E&&Ie(t),Y=!1,j(be)}}}function gt(e,t,n){let o=0,c="#282c34";const l=()=>{console.log(Le(`helloWorld("${I.getApplicationID()}")`))},s=()=>{W("helloStr","test").then(a=>{console.log(a)}),W("helloNum",1e3).then(a=>{console.log(typeof a,a)}),W("helloArrayStr",["ddddd","aaaaaa","zzzzzzz"]).then(a=>{console.log(typeof a,a)}),W("helloObj",{height:90,width:100}).then(a=>{console.log(typeof a,a),console.log(a.x),console.log(a.y)}),W("helloError","test").catch(a=>{console.log("there was an error",a)})},w=()=>{alert(`Node.js ${process.version}
Platform: ${Ye.platform}
Folder: ${Ke.basename(window.cep_node.global.__dirname)}`)};return Be(()=>{window.cep&&st(a=>n(1,c=a))}),[o,c,l,s,w,()=>n(0,o+=1),()=>ee("https://github.com/hyperbrew/bolt-cep"),()=>ee("https://svelte.dev/docs"),()=>ee("https://vitejs.dev/guide/features.html")]}class wt extends Qe{constructor(t){super(),Ze(this,t,gt,_t,Pe,{})}}it();new wt({target:document.getElementById("root")});
//# sourceMappingURL=main-928a6989.js.map