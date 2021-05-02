<template>
    <v-dialog
            :value="true"
            width="500"
    >

        <v-card>
            <v-card-title>
                Delete Task ?
            </v-card-title>

            <v-card-text>
                Are you sure you wanna delete this
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        text
                        @click="$emit('close')"
                >
                    No
                </v-btn>
                <v-btn
                        color="red darken-1"
                        text
                        @click="$store.dispatch('deleteTask', task.id)"
                >
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DialogDelete",
        props: ['task']
    }
</script>

<style scoped>

</style>