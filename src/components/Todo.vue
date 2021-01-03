<template>
    <q-item
        :class="!task.completed ? 'bg-blue-1' : 'bg-green-1'"
        v-ripple>
          <q-item-section side top>
            <q-checkbox v-model="task.completed"/>
          </q-item-section>

          <q-item-section>
            <q-item-label :class="{ 'text-strikethrough' : task.completed }">{{ task.id }}. {{ task.title }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn color="primary" glossy label="Details" @click="showDetails=true"/>
          </q-item-section>
    <q-dialog v-model="showDetails">
        <q-card>
            <q-card-section>
                <div class="text-h6">Details Data JSON</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-list bordered>
                    <q-item>
                        <q-item-section>User ID : {{ task.userId }} </q-item-section>
                    </q-item>
                    <q-item>
                         <q-item-section>ID : {{ task.id }} </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section>Title : {{ task.title }} </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section>completed : {{ task.completed }} </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
    </q-item>
</template>

<script>
export default {
  data () {
    return {
      showDetails: false
    }
  },
  props: ['task', 'id']
}
</script>
