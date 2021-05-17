/* stampare a schermo un messaggio all'interno di un h1, utilizzando data
Bonu: aggiungere un'immagine, presa anch'essa da un data */


const app = new Vue ({
    el: "#app",
    data:{
        msg:"imparando Vue-Js",
        link:"https://www.gcomegatto.it/wp-content/uploads/2015/09/pallas-cat-3.jpg"
    },
    methods:{
        changeImg(){
            if(this.link == "https://www.gcomegatto.it/wp-content/uploads/2015/09/pallas-cat-3.jpg"){
                this.link = "https://i.pinimg.com/originals/04/6e/c2/046ec2fa6df65209c7e6788bacd396ee.jpg"
            }else {
                this.link = "https://www.gcomegatto.it/wp-content/uploads/2015/09/pallas-cat-3.jpg"
            }
        }
    }
})