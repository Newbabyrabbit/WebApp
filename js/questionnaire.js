
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
            isUp:false,
            isDown:true,
            comps:['questionOne','questionTwo','questionThree'],
            i:0
        }
    },
    methods:{
        reset:function(){

        },
        up:function(){
            if(this.i < 0)return;
            this.current = this.comps[--this.i];
            this.isDown = true;
            if(this.i == 0){               // 如果下一个组件是第一个，那么禁用pre按钮
                this.isUp = false;
            }
        },
        down:function(){
            if(this.i >= this.comps.length)return;
            this.current = this.comps[++this.i];
            this.isUp = true;
            if(this.i == this.comps.length-1){               // 如果下一个组件是最后一个，那么禁用next按钮
                this.isDown = false;
            }
        }
    }
});
