/*! Built with http://stenciljs.com */
const{h,Context}=window.mycomponent;class MyComponent{render(){return h("div",null,"Hello, World! I'm ",this.first," ",this.last," can you see me ?")}static get is(){return"my-component"}static get encapsulation(){return"scoped"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"}}}static get style(){return""}}export{MyComponent};