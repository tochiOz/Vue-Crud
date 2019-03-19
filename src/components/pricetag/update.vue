<template>
  <v-dialog v-model="dialog" max-width="350px">
        <v-icon 
        slot="activator" 
        class="text-secondary" 
        dialog = true >edit</v-icon>
         <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="submitItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.Item"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-danger" value="Edit Item"/>
                    </div>
                </form>
            </div>
        </div>
    </v-dialog>
</template>

<script>
import { db } from '@/config/db'

export default {
    components: {
        name: 'update',
    },
    
    props: ['itemId'],

    data: () => ({
        dialog: false,
        valid: false,
        newItem: {}   
    }),

    firebase: {
        items: db.ref('items'),//created node within the database
        itemsObj: {
            source: db.ref('items'),
            asObject: true
        }
    },

    created() {
        this.editItem()
    },    

    methods: {

        editItem () {
            if (this.itemId) {
                this.newItem = this.items.find( item => item['.key'] === this.itemId )
            }
        },

        submitItem () {
            if (this.itemId) {
                this.$firebaseRefs.items.child(this.itemId).update({Item: this.newItem.Item, price: this.newItem.price})
                .then(() => {
                    this.dialog = false
                    alert('Item changed Successfully')
                })
                .catch((err) => {
                    alert('Ops, there is an ' + err.message)
                })
            }
        }

    }
}
</script>
