<template>
    <div>
    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    color="primary"
            >
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    @click="handleClick(index)"
            >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
        <dialog-edit
                v-if="dialogs.edit"
                @close="dialogs.edit = false"
                :task="task"
        />
        <dialog-delete
                v-if="dialogs.delete"
                @close="dialogs.delete = false"
                :task="task"
        />
    </div>
</template>

<script>
    export default {
        name: "TaskMenu",
        props: ['task'],
        data: () => ({
            dialogs: {
                edit: false,
                delete: false
            },
            items: [
                { title: 'Edit',
                  icon:'mdi-pencil',
                  click(){
                      this.dialogs.edit = true
                  }
                },
                { title: 'Due Date',
                  icon:'mdi-calendar',
                  click(){
                      console.log('')
                  }
                },
                { title: 'Delete',
                  icon:'mdi-delete',
                  click(){
                      this.dialogs.delete = true
                  }
                },
            ],
        }),
        methods: {
            handleClick(index) {
                this.items[index].click.call(this)
            }
        },
        components: {
            'dialog-edit': require('@/components/Todo/Dialogs/DialogEdit.vue').default,
            'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default,
        }
    }
</script>

<style scoped>

</style>