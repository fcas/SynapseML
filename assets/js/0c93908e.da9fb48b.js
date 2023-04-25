"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[48629],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36631:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={title:"Installation Guidance",sidebar_label:"Installation Guidance for Deep Vision Classification"},s=void 0,p={unversionedId:"features/simple_deep_learning/installation",id:"version-0.11.1/features/simple_deep_learning/installation",title:"Installation Guidance",description:"This is a sample with databricks 10.4.x-gpu-ml-scala2.12 runtime",source:"@site/versioned_docs/version-0.11.1/features/simple_deep_learning/installation.md",sourceDirName:"features/simple_deep_learning",slug:"/features/simple_deep_learning/installation",permalink:"/SynapseML/docs/features/simple_deep_learning/installation",draft:!1,tags:[],version:"0.11.1",frontMatter:{title:"Installation Guidance",sidebar_label:"Installation Guidance for Deep Vision Classification"},sidebar:"docs",previous:{title:"DeepLearning - Deep Vision Classification",permalink:"/SynapseML/docs/features/simple_deep_learning/DeepLearning - Deep Vision Classification"},next:{title:"About",permalink:"/SynapseML/docs/features/causal_inference/about"}},c={},u=[{value:"1. Reinstall horovod using our prepared script",id:"1-reinstall-horovod-using-our-prepared-script",level:2},{value:"2. Install SynapseML Deep Learning Component",id:"2-install-synapseml-deep-learning-component",level:2},{value:"3. Try our sample notebook",id:"3-try-our-sample-notebook",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is a sample with databricks 10.4.x-gpu-ml-scala2.12 runtime")),(0,a.kt)("h2",{id:"1-reinstall-horovod-using-our-prepared-script"},"1. Reinstall horovod using our prepared script"),(0,a.kt)("p",null,"We build on top of torchvision, horovod and pytorch_lightning, so we need to reinstall horovod by building on specific versions of those packages.\nDownload our ",(0,a.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/publicwasb/horovod_installation.sh"},"horovod installation script")," and upload\nit to databricks dbfs."),(0,a.kt)("p",null,"Add the path of this script to ",(0,a.kt)("inlineCode",{parentName:"p"},"Init Scripts")," section when configuring the spark cluster.\nRestarting the cluster automatically installs horovod v0.25.0 with pytorch_lightning v1.5.0 and torchvision v0.12.0."),(0,a.kt)("h2",{id:"2-install-synapseml-deep-learning-component"},"2. Install SynapseML Deep Learning Component"),(0,a.kt)("p",null,"You could install the single synapseml-deep-learning wheel package to get the full functionality of deep vision classification.\nRun the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"pip install synapseml==0.11.1\n")),(0,a.kt)("p",null,"An alternative is installing the SynapseML jar package in library management section, by adding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Coordinate: com.microsoft.azure:synapseml_2.12:0.11.1\nRepository: https://mmlspark.azureedge.net/maven\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you install the jar package, follow the first two cells of this ",(0,a.kt)("a",{parentName:"p",href:"/SynapseML/docs/features/simple_deep_learning/DeepLearning%20-%20Deep%20Vision%20Classification/#environment-setup----reinstall-horovod-based-on-new-version-of-pytorch"},"sample"),"\nto ensure horovod recognizes SynapseML.")),(0,a.kt)("h2",{id:"3-try-our-sample-notebook"},"3. Try our sample notebook"),(0,a.kt)("p",null,"You could follow the rest of this ",(0,a.kt)("a",{parentName:"p",href:"/SynapseML/docs/features/simple_deep_learning/DeepLearning%20-%20Deep%20Vision%20Classification"},"sample")," and have a try on your own dataset."),(0,a.kt)("p",null,"Supported models (",(0,a.kt)("inlineCode",{parentName:"p"},"backbone")," parameter for ",(0,a.kt)("inlineCode",{parentName:"p"},"DeepVisionClassifer"),") should be string format of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/vision/blob/v0.12.0/torchvision/models/__init__.py"},"Torchvision-supported models"),";\nYou could also check by running ",(0,a.kt)("inlineCode",{parentName:"p"},"backbone in torchvision.models.__dict__"),"."))}m.isMDXComponent=!0}}]);