
Vue.component('questions',{
    template:"#parent",
    components:{
        questionOne:{
            template:"#child1"
        },
        questionTwo:{
            template:"#child2"
        },
        questionThree:{
            template:"#child3"
        },
    },
    data:function(){
        return {
            current:"questionOne",
            isShow:false
        }
    },
    methods:{
        reset:function(){

        },
        up:function(){
            this.current = "";
        },
        down:function(){

        }
    }
});
