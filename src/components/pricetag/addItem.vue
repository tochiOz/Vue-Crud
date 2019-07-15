<template>
  <v-dialog v-model="dialog" max-width="350px">
        <v-btn slot="activator" color="deep-orange darken-1" dark class="mb-2">New Item</v-btn>
         <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-danger" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </v-dialog>
</template>

<script>
// import { db } from '@/config/db'

export default {
    
    name: 'addItem',
    
    props: ['item'],

    data: () => ({
        dialog: false,
        valid: false,
        newItem: {//binded model for pricetag and item-name
            price: '',
            name: ''
        }   
    }),

    methods: {
        addItem() {
            
        }
    }

    
}
</script>