<template>
    <div class="container" id="body">
        <div class="header mt-10">
            <h1>A BASIC TASK LOADER</h1>
        </div>

        <div class="panel panel-danger">
            <div class="panel-heading">
                Create & Edit Data
            </div>
        </div>

        <div class="panel-body">
            <div class="display">
                <table class="table table-striped table-bordered">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <th>Todo Task</th>
                            <th>Day</th>
                            <th colspan="2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                        v-for="task of tasks"
                        :key="task['.key']"
                        >
                            <td>{{ task.Item }}</td>
                            <td>{{ task.price }}</td>
                            <td>
                                <v-icon offset-xs5 @click="deleteItem(task['.key'])">delete</v-icon>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/config/db'
export default {

    data: () => ({

    }),

    firebase: {
        tasks: db.ref('tasks')//created node within the database
    },
}
</script>

