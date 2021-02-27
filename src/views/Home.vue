<template>
 <div class="home">
   <img alt="Vue logo" src="../assets/logo.png">
   <form @submit.prevent="sendData" >

       <div class="form-control">
         <label for="name">Name</label>
         <input v-model="name" id="name" type="text">
       </div>
       <div class="form-control">
         <label for="email">Email</label>
         <input v-model="email" id="email" type="email">
       </div>
       <div class="form-control">
         <label for="address">Address</label>
         <input v-model="address" id="address" type="text">
       </div>
       <div class="form-control">
         <label for="gender">Gender</label>
         <span>Male <input v-model="gender" id="gender" type="radio" value="male"></span>
         <span>Female <input v-model="gender" id="gender" type="radio" value="female"></span>
       </div>
       <input type="submit" class="send" value="Send">
     </form>
 </div>
</template>

<script>
import axios from 'axios';

export default { 
 name: 'home',
 components: {},
data: function () {
    return {
        name:'',
        email:'' ,
        address:'',
        gender:'',
 }       
},
methods: {
    async sendData() {

        await axios({
          url :'https://thawing-eyrie-84225.herokuapp.com/api/records',
          method: 'post',
          data: {
            name: this.name,
            email: this.email,
            address: this.address,
            gender: this.gender
          }
        });

        this.$router.push('thanks');
        
}
}
}
</script>

   <style>
     .form-control {
       padding: 5px;
     } 
     .form-control label {
       display: block;
     }
     .send {
       margin: 5px
     }
   </style>