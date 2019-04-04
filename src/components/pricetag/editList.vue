<template>
    <v-container>
        <v-toolbar flat color="white" mt-10>
            <v-toolbar-title>My Price List</v-toolbar-title>
            <v-divider
                class="mx-2"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <app-add></app-add>
        </v-toolbar>
        
        <v-divider></v-divider>
        <table class="table table-striped table-bordered">
            <thead class="bg-secondary text-white">
                <tr>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th colspan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item of items"
                :key="item['.key']"
                >
                <td>{{ item.Item }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <app-upt :itemId = "item['.key']"></app-upt>
                    <v-icon offset-xs5 @click="deleteItem(item['.key'])">delete</v-icon>
                </td>
                </tr>
            </tbody>
        </table>
    </v-container>
</template>

<script>
// import { db } from '@/config/db'

</script>