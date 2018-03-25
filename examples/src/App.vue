<template>
  <div id="app">
    <div class="main-content">
      <div class="page-container clearfix">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/atom-one-dark.css'
export default {
  name: 'App'
}
</script>