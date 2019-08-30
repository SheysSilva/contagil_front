<template>
  <div id="app-container" class="container">
    <top-nav/>
    <main>
      <div>
        <router-view/>
      </div>
    </main>
  </div>
</template>
<script>
import TopNav from '@/components/TopNav'
export default {
  components: {
    TopNav
  }
}
</script>
