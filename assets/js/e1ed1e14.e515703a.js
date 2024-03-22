"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[82880],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=t(83117),a=(t(67294),t(3905));const o={title:"Image Transformations",hide_title:!0,status:"stable"},i=void 0,m={unversionedId:"Explore Algorithms/OpenCV/Image Transformations",id:"version-1.0.1/Explore Algorithms/OpenCV/Image Transformations",title:"Image Transformations",description:"OpenCV - Pipeline Image Transformations",source:"@site/versioned_docs/version-1.0.1/Explore Algorithms/OpenCV/Image Transformations.md",sourceDirName:"Explore Algorithms/OpenCV",slug:"/Explore Algorithms/OpenCV/Image Transformations",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/OpenCV/Image Transformations",draft:!1,tags:[],version:"1.0.1",frontMatter:{title:"Image Transformations",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Random Search",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Hyperparameter Tuning/Quickstart - Random Search"},next:{title:"About",permalink:"/SynapseML/docs/1.0.1/Explore Algorithms/Vowpal Wabbit/Overview"}},s={},l=[{value:"OpenCV - Pipeline Image Transformations",id:"opencv---pipeline-image-transformations",level:2}],p={toc:l};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"opencv---pipeline-image-transformations"},"OpenCV - Pipeline Image Transformations"),(0,a.kt)("p",null,"This example shows how to manipulate the collection of images.\nFirst, the images are downloaded to the local directory.\nSecond, they are copied to your cluster's attached HDFS."),(0,a.kt)("p",null,"The images are loaded from the directory (for fast prototyping, consider loading a fraction of\nimages). Inside the dataframe, each image is a single field in the image column. The image has\nsub-fields (path, height, width, OpenCV type and OpenCV bytes)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import toNDArray\nfrom synapse.ml.io import *\n\nimageDir = "wasbs://publicwasb@mmlspark.blob.core.windows.net/sampleImages"\nimages = spark.read.image().load(imageDir).cache()\nimages.printSchema()\nprint(images.count())\n')),(0,a.kt)("p",null,"We can also alternatively stream the images with a similar api.\nCheck the ",(0,a.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html"},"Structured Streaming Programming Guide"),"\nfor more details on streaming."),(0,a.kt)("p",null,"When collected from the ",(0,a.kt)("em",{parentName:"p"},"DataFrame"),", the image data are stored in a ",(0,a.kt)("em",{parentName:"p"},"Row"),", which is Spark's way\nto represent structures (in the current example, each dataframe row has a single Image, which\nitself is a Row).  It is possible to address image fields by name and use ",(0,a.kt)("inlineCode",{parentName:"p"},"toNDArray()")," helper\nfunction to convert the image into numpy array for further manipulations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.core.platform import running_on_binder\n\nif running_on_binder():\n    from IPython import get_ipython\nfrom PIL import Image\nimport matplotlib.pyplot as plt\n\ndata = images.take(3)  # take first three rows of the dataframe\nim = data[2][0]  # the image is in the first column of a given row\n\nprint("image type: {}, number of fields: {}".format(type(im), len(im)))\nprint("image path: {}".format(im.origin))\nprint("height: {}, width: {}, OpenCV type: {}".format(im.height, im.width, im.mode))\n\narr = toNDArray(im)  # convert to numpy array\nprint(images.count())\nplt.imshow(Image.fromarray(arr, "RGB"))  # display the image inside notebook\n')),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageTransformer")," for the basic image manipulation: resizing, cropping, etc.\nInternally, operations are pipelined and backed by OpenCV implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import ImageTransformer\n\ntr = (\n    ImageTransformer()  # images are resized and then cropped\n    .setOutputCol("transformed")\n    .resize(size=(200, 200))\n    .crop(0, 0, height=180, width=180)\n)\n\nsmall = tr.transform(images).select("transformed")\n\nim = small.take(3)[2][0]  # take third image\nplt.imshow(Image.fromarray(toNDArray(im), "RGB"))  # display the image inside notebook\n')),(0,a.kt)("p",null,"For the advanced image manipulations, use Spark UDFs.\nThe SynapseML package provides conversion function between ",(0,a.kt)("em",{parentName:"p"},"Spark Row")," and\n",(0,a.kt)("em",{parentName:"p"},"ndarray")," image representations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import udf\nfrom synapse.ml.opencv import ImageSchema, toNDArray, toImage\n\n\ndef u(row):\n    array = toNDArray(row)  # convert Image to numpy ndarray[height, width, 3]\n    array[:, :, 2] = 0\n    return toImage(array)  # numpy array back to Spark Row structure\n\n\nnoBlueUDF = udf(u, ImageSchema)\n\nnoblue = small.withColumn("noblue", noBlueUDF(small["transformed"])).select("noblue")\n\nim = noblue.take(3)[2][0]  # take second image\nplt.imshow(Image.fromarray(toNDArray(im), "RGB"))  # display the image inside notebook\n')),(0,a.kt)("p",null,"Images could be unrolled into the dense 1D vectors suitable for CNTK evaluation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.image import UnrollImage\n\nunroller = UnrollImage().setInputCol("noblue").setOutputCol("unrolled")\n\nunrolled = unroller.transform(noblue).select("unrolled")\n\nvector = unrolled.take(1)[0][0]\nprint(type(vector))\nlen(vector.toArray())\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"")))}c.isMDXComponent=!0}}]);