"use strict"
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${se}"].${e}(${s});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,c=>{try{const i=JSON.parse(c);i.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(i)):n(i)}catch{o(c)}})}),te=e=>ce(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),Me=(e=!0)=>{if(window.cep){const t=W.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;ee.existsSync(n)?(e&&console.log(n),te(n)):ee.existsSync(o)&&(e&&console.log(o),te(o))}},Pe=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},We=e=>{const t=()=>{const n=Pe();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:s,b:c}=n.rgb;return`rgb(${o}, ${s}, ${c})`};e(t()),W.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})},Te="../assets/node-js-b824f758.svg",Le="../assets/adobe-96d52626.svg",Ae="../assets/bolt-cep-d4058830.svg";function Re(e){let t,n,o,s,c,i,_,g,d,a,f,w,O,E,$,y,D,U,k,X,T,G,L,N,j,V;return{c(){t=p("div"),n=p("header"),o=p("img"),c=m(),i=p("div"),_=p("button"),g=B("Count is: "),d=B(e[0]),a=m(),f=p("button"),w=p("img"),E=m(),$=p("button"),y=p("img"),U=m(),k=p("button"),k.textContent="Ts",X=m(),T=p("p"),T.innerHTML='Edit <code class="svelte-1bcwodw">main.svelte</code> and save to test HMR updates.',G=m(),L=p("div"),N=p("button"),N.textContent="Explode 💣",J(o.src,s=Ae)||u(o,"src",s),u(o,"class","icon svelte-1bcwodw"),u(o,"alt",""),u(_,"class","svelte-1bcwodw"),u(w,"class","icon-button svelte-1bcwodw"),J(w.src,O=Te)||u(w,"src",O),u(w,"alt",""),u(f,"class","svelte-1bcwodw"),u(y,"class","icon-button svelte-1bcwodw"),J(y.src,D=Le)||u(y,"src",D),u(y,"alt",""),u($,"class","svelte-1bcwodw"),u(k,"class","svelte-1bcwodw"),u(i,"class","button-group svelte-1bcwodw"),u(T,"class","svelte-1bcwodw"),u(N,"class","learn-more svelte-1bcwodw"),u(L,"class","svelte-1bcwodw"),u(n,"class","app-header svelte-1bcwodw"),u(t,"class","app svelte-1bcwodw"),Q(t,"background-color",e[1])},m(h,A){le(h,t,A),l(t,n),l(n,o),l(n,c),l(n,i),l(i,_),l(_,g),l(_,d),l(i,a),l(i,f),l(f,w),l(i,E),l(i,$),l($,y),l(i,U),l(i,k),l(n,X),l(n,T),l(n,G),l(n,L),l(L,N),j||(V=[C(_,"click",e[5]),C(f,"click",e[4]),C($,"click",e[2]),C(k,"click",e[3]),C(N,"click",e[6])],j=!0)},p(h,[A]){A&1&&fe(d,h[0]),A&2&&Q(t,"background-color",h[1])},i:q,o:q,d(h){h&&re(t),j=!1,P(V)}}}function je(e,t,n){let o=0,s="#282c34";const c=()=>{console.log(ce(`helloWorld("${W.getApplicationID()}")`))},i=()=>{v("helloStr","test").then(a=>{console.log(a)}),v("helloNum",1e3).then(a=>{console.log(typeof a,a)}),v("helloArrayStr",["ddddd","aaaaaa","zzzzzzz"]).then(a=>{console.log(typeof a,a)}),v("helloObj",{height:90,width:100}).then(a=>{console.log(typeof a,a),console.log(a.x),console.log(a.y)}),v("helloError","test").catch(a=>{console.log("there was an error",a)})},_=()=>{alert(`Node.js ${process.version}
Platform: ${$e.platform}
Folder: ${ke.basename(window.cep_node.global.__dirname)}`)};return _e(()=>{window.cep&&We(a=>n(1,s=a))}),[o,s,c,i,_,()=>n(0,o+=1),async()=>{await v("explodeShapeLayers")}]}class Je extends Ee{constructor(t){super(),Oe(this,t,je,Re,ae,{})}}Me();new Je({target:document.getElementById("root")});
//# sourceMappingURL=main-4b947e66.js.map