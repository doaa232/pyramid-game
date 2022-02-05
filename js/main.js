/* event  //  v-model  //  v-cloak */

/* setTimeout(() => {
    
}, 5000); */
    new Vue({
        el:'#app',
        data:{
            counter:1,
            moves:8,
            numOfBoxes:3,
            transition:true,
            loss:false,
            win:false,
            Keep:false,
            boxes:[
                [
                    {
                        id:0,
                        index:0,
                        color:"bg-red-800",
                        width:"w-full",
                        height:"h-24",
                        margin:"mb-0",
                    },
                    {
                        id:1,
                        index:0,
                        color:"bg-red-700",
                        width:"w-5/6",
                        height:"h-24",
                        margin:"mb-0",
                    },
                    {
                        id:2,
                        index:0,
                        color:"bg-red-600",
                        width:"w-4/6",
                        height:"h-24",
                        margin:"mb-0",
                    },
                ],
                [],
                [],
            ],
            open:[],
            start:false,
              
        },
        /* created() {
            this.btnRet()
        }, */
        methods: {
            moving(index,id){
                var max = id
                
                this.boxes[index].forEach(box => {
                    
                    if (box.id > id) {
                        max = box.id
                    }
                });
                if(max == id && this.open.length==0 && this.moves!=0 && this.transition){
                    this.boxes[index][this.boxes[index].length-1].margin="mb-2";

                    
                    this.open.unshift({
                        id:this.boxes[index][this.boxes[index].length-1].id,
                        index:this.boxes[index][this.boxes[index].length-1].index,
                        color:this.boxes[index][this.boxes[index].length-1].color,
                        width:this.boxes[index][this.boxes[index].length-1].width,
                        height:this.boxes[index][this.boxes[index].length-1].height,
                        margin:this.boxes[index][this.boxes[index].length-1].margin,
                    });

                    setTimeout(() => {
                        this.start = true
                    }, 500);
                }
            },
            to(index){
                if (this.open.length==1 && this.start) {
                    
                    if (this.boxes[index].length > 0 ) {
                        
                        var max =this.boxes[index][0].id
                        this.boxes[index].forEach(box => {
                            if (box.id > max) {
                                max = box.id
                            }
                        }); 
                        if (this.open[0].id == max) {
                            this.boxes[index][this.boxes[index].length-1].margin="mb-0"
                            this.open=[]
                            this.start=false
                        }
                        if (this.open[0].id > max) {
                            this.boxes[index].push({
                                id:this.open[0].id,
                                index:index,
                                color:this.open[0].color,
                                width:this.open[0].width,
                                height:this.open[0].height,
                                margin:"mb-0",
                            });
                            
                            this.boxes[this.open[0].index].splice((this.boxes[this.open[0].index].length)-1,1)
                            
                            this.open=[]
                            this.start=false;
                            this.moves--
                        } 
                        
                    }



                    if (this.boxes[index].length==0) {
                        this.boxes[index].push({
                            id:this.open[0].id,
                            index:index,
                            color:this.open[0].color,
                            width:this.open[0].width,
                            height:this.open[0].height,
                            margin:"mb-0",
                        });

                        
                        this.boxes[this.open[0].index].splice((this.boxes[this.open[0].index].length)-1,1)
                        
                        this.open=[]
                        this.start=false;
                        this.moves--
                    }

                    console.log(this.boxes)
                    
                }
                
            },

            restart(){
                this.open=[]
                this.start=false
                this.transition=true
                this.win=false
                this.loss=false
                this.Keep=false
                if (this.counter == 1) {
                    this.numOfBoxes=3
                    this.moves=8
                    this.boxes=[
                        [
                            {
                                id:0,
                                index:0,
                                color:"bg-red-800",
                                width:"w-full",
                                height:"h-24",
                                margin:"mb-0",
                            },
                            {
                                id:1,
                                index:0,
                                color:"bg-red-700",
                                width:"w-5/6",
                                height:"h-24",
                                margin:"mb-0",
                            },
                            {
                                id:2,
                                index:0,
                                color:"bg-red-600",
                                width:"w-4/6",
                                height:"h-24",
                                margin:"mb-0",
                            },
                        ],
                        [],
                        [],
                    ]
                 
                }
                if (this.counter==2) {
                    this.SecondLevel()
                }
                if (this.counter==3) {
                    this.thirdLevel()
                }
            },

            SecondLevel(){
                this.moves=17
                this.boxes=[
                    [
                        {
                            id:0,
                            index:0,
                            color:"bg-red-800",
                            width:"w-full",
                            height:"h-20",
                            margin:"mb-0",
                        },
                        {
                            id:1,
                            index:0,
                            color:"bg-red-700",
                            width:"w-5/6",
                            height:"h-20",
                            margin:"mb-0",
                        },
                        {
                            id:2,
                            index:0,
                            color:"bg-red-600",
                            width:"w-4/6",
                            height:"h-20",
                            margin:"mb-0",
                        },
                        {
                            id:3,
                            index:0,
                            color:"bg-red-500",
                            width:"w-3/6",
                            height:"h-20",
                            margin:"mb-0",
                        },
                    ],
                    [],
                    [],
                ]
            },

            thirdLevel(){
                this.moves=34
                this.boxes=[
                    [
                        {
                            id:0,
                            index:0,
                            color:"bg-red-800",
                            width:"w-full",
                            height:"h-16",
                            margin:"mb-0",
                        },
                        {
                            id:1,
                            index:0,
                            color:"bg-red-700",
                            width:"w-5/6",
                            height:"h-16",
                            margin:"mb-0",
                        },
                        {
                            id:2,
                            index:0,
                            color:"bg-red-600",
                            width:"w-4/6",
                            height:"h-16",
                            margin:"mb-0",
                        },
                        {
                            id:3,
                            index:0,
                            color:"bg-red-500",
                            width:"w-3/6",
                            height:"h-16",
                            margin:"mb-0",
                        },
                        {
                            id:4,
                            index:0,
                            color:"bg-red-400",
                            width:"w-2/6",
                            height:"h-16",
                            margin:"mb-0",
                        },
                    ],
                    [],
                    [],
                ]
            }




        },
        computed: {
            
        },
        watch: {
            moves(){
                if (this.moves == 0 && this.boxes[2].length != this.numOfBoxes) {
                     this.loss=true  
                }
            },
            boxes(){
                if (this.boxes[2].length == this.numOfBoxes && this.boxes[2].length == 3) {
                    this.transition=false
                    this.Keep=true

                    setTimeout(() => {
                        this.Keep=false
                        this.SecondLevel()
                        this.transition=true
                        this.numOfBoxes++
                        this.counter++
                    }, 2000); 
                    
                }
                if (this.boxes[2].length == this.numOfBoxes && this.boxes[2].length == 4) {
                    this.transition=false
                    this.Keep=true

                    setTimeout(() => {
                        this.Keep=false
                        this.thirdLevel()
                        this.transition=true
                        this.numOfBoxes++
                        this.counter++
                    }, 2000);  
                }
                if (this.boxes[2].length == this.numOfBoxes && this.boxes[2].length == 5) {

                    this.transition=false
                    this.win=true
                    this.counter=1

                    
                }
            }

        },
    });