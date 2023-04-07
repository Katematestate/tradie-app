<script setup>
import FileUpload from "primevue/fileupload";
import Button from "./Button.vue";
</script>

<template>
  <FileUpload
    name="demo[]"
    url="./upload.php"
    @upload="onTemplatedUpload($event)"
    :multiple="true"
    accept="image/*"
    :maxFileSize="1000000"
  >
    <template #header="{ chooseCallback }">
      <Button
        class="upload-button"
        label="Browse Files"
        size="small"
        @click="chooseCallback()"
      ></Button>
    </template>
    <template #empty>
      <div class="flex align-items-center justify-content-center flex-column">
        <i
          class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400"
        />
        <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
      </div>
    </template>
  </FileUpload>
</template>

<style scoped></style>
