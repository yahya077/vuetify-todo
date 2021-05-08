<template>
    <v-dialog
            :value="true"
            width="500"
    >

        <v-card>
            <v-card-title>
                Edit Task
            </v-card-title>

            <v-card-text>
                Edit the title of this :task
                <v-text-field
                        v-model="taskTitle"
                        @keyup.enter="saveTask"
                ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        text
                        @click="$emit('close')"
                >
                    Cancel
                </v-btn>
                <v-btn
                        color=" darken-1"
                        :disabled="taskTitleInvalid"
                        text
                        @click="saveTask"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DialogDelete",
        props: ['task'],
        data() {
            return {
                taskTitle: null
            }
        },
        computed: {
            taskTitleInvalid() {
                return !this.taskTitle || this.taskTitle === this.task.title
            }
        },
        methods: {
          saveTask() {
              if (!this.taskTitleInvalid){
              let payload = {
                  id: this.task.id,
                  title: this.taskTitle
              }
              this.$store.dispatch('updateTaskTitle', payload)
              this.$emit('close')
              }
          }
        },
        mounted() {
            this.taskTitle = this.task.title
        }
    }
</script>

<style scoped>

</style>