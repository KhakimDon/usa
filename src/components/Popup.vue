<template>
  <div class="popups">
      <div class="popups_wrapper">
        <div class="popups_wrapper_content">
          <h2> {{ _name }} </h2>
          <h2> {{ this._id }}</h2>
        </div>
        <hr class="popup_line">
        <!-- <div v-for="item of this.getSmth('subject')" :key="item.id" class="popup_item">
          <div>
            <span style="margin-left: 20px">Subject</span>
            <h2>{{ this.student.subjects.indexOf(item) + 1 }}.  {{ item.title }}</h2>
          </div>
          <div>
            <span>Teacher</span>
            <h2> {{ item.teacher }} </h2>
          </div>
          <div>
            <span>Mark</span>
            <h2> {{ this.param(item.mark)  }} </h2>
          </div>
          <div>
            <span>Status</span>
            <h2 class="failed" :class="{passed: this.params(item.mark) >= 50}">
            {{  this.params(item.mark) >= 50? "Passed" : "Failed" }}
            </h2>
          </div>
        </div> -->
        <button @click="this.pop = false">Close</button>
       </div>
    </div>

</template>

<script>
export default {
props: {
    _name: String,
}
}
</script>

<style>

</style>