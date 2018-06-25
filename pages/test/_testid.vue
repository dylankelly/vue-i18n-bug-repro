<template>
  <main>
    <h1>{{$t('home.title')}} to page {{$route.params.testid}}</h1>
    <h2>{{$t('home.introduction')}}</h2>
  </main>
</template>

<script>
export default {
  beforeDestroy() {
    console.log('destroyed is never called server side');
  }
}
</script>

