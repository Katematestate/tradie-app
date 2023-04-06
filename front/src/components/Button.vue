<script setup>
import Button from 'primevue/button';

defineProps({
  type: String, 
  label: String
})
</script>

<template>
  <Button :label="$props.label" :class="$props.type" class="button"/>
</template>

<style scoped>
.button.secondary{
  background-color: white;
  border: #222030 solid 3px;
  min-width: 130px;
  min-height: 40px;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 600;
  padding: 5px 10px;
  text-align: center;
}
.button.secondary:hover{
  background-color: #222030;
  color: white;
  filter: drop-shadow(0 4px 4px rgba(36, 36, 36, 0.661));
  
}
.button.cta{
  background-color: #E88232;
  color: white;
  border: none;
  border-radius: 5px;
  min-width: 130px;
  min-height: 40px;
  filter: drop-shadow(0px 4px 4px rgba(36, 36, 36, 0.288));
  font-size: 22px;
  font-weight: 600;
  padding: 5px 10px;
  text-align: center;
}
.button.cta:hover{
  background-color: #DD670A;
} 

@media screen and (max-width: 480px){
  .button.secondary{
  max-width: 85px;
  max-height: 30px;
  font-size: 14px;
  padding: 5px 10px;
}
.button.cta{
  max-width: 85px;
  max-height: 30px;
  font-size: 14px;
  padding: 5px 10px;
}
}

@media screen and (max-width: 768px) and (min-width: 481px){
  .button.secondary{
  max-width: 100px;
  max-height: 35px;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px 10px;
}
.button.cta{
  border-radius: 5px;
  max-width: 100px;
  max-height: 35px;
  font-size: 16px;
  padding: 5px 10px;
}
}
</style>
