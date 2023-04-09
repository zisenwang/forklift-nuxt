<template>
  <el-container style="height: 100vh">
    <el-aside  width="250px">
      <el-scrollbar>
        <el-menu
            :default-openeds="['1']"
        >
          <el-sub-menu index="1" >
            <template #title>
              <el-icon><Forklift /></el-icon>Forklifts
            </template>
            <el-sub-menu
                v-for="e in res"
                :key="e.equipment"
                :index="e.equipment"
                >
              <template #title>{{e.equipment}}</template>

              <el-menu-item
                  v-for="m in e.models"
                  :key="m.model"
                  :index="m.model"
                  @click="handleItemClick"
              >
                {{m.model}}
              </el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
            ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="300px" v-if="model">
            <el-scrollbar>
              <div>
                <el-image
                    style="width: 300px; height: 300px"
                    :src="url"
                    :zoom-rate="1.2"
                    :preview-src-list="srcList"
                    :initial-index="4"
                    fit="cover"
                />
              </div>
              <div>
                <a href="/test.pdf" download="">Test PDF</a>
              </div>
            </el-scrollbar>
          </el-aside>
          <el-container style="margin-left: 15px">
            <el-descriptions
              class="margin-top"
              :title="title"
              :column="1"
              v-if="model"
              border
          >
            <template #extra>
              <el-button type="primary">Operation</el-button>
            </template>
            <el-descriptions-item label="Model" >{{ model.model }}</el-descriptions-item>
            <el-descriptions-item label="Description" label-class-name="my-label">{{ model.description }}</el-descriptions-item>
            <el-descriptions-item label="Capacity (kg)" label-class-name="my-label">{{ model.capacity_kg }}</el-descriptions-item>
            <el-descriptions-item label="Lift Height (mm)" label-class-name="my-label">{{ model.lift_height_mm }}</el-descriptions-item>
            <el-descriptions-item label="Fork Size" label-class-name="my-label">{{ model.fork_size }}</el-descriptions-item>
            <el-descriptions-item label="Battery Voltage" label-class-name="my-label">{{ model.battery_voltage }}</el-descriptions-item>
            <el-descriptions-item label="Battery Ampere" label-class-name="my-label">{{ model.battery_ampere }}</el-descriptions-item>
            <el-descriptions-item label="Battery Type" label-class-name="my-label">{{ model.battery_type }}</el-descriptions-item>
            <el-descriptions-item label="Controller Type" label-class-name="my-label">{{ model.controller_type }}</el-descriptions-item>
            <el-descriptions-item label="Travel Speed (km/h)" label-class-name="my-label">{{ model.travel_speed_kmh }}</el-descriptions-item>
            <el-descriptions-item label="RRP" label-class-name="my-label">{{ model.rrp }}</el-descriptions-item>
            <el-descriptions-item label="Optionals" label-class-name="my-label">
              <el-row>
                <el-col
                    v-for="(o, i) in model.optionals"
                    :key="o"
                    :span="7"
                    :offset="model.optionals.length >= 3 ? (i%3===0?0:1) : (i>0?3:0)"
                >
                  <el-card class="card" shadow="hover" :body-style="{ padding: '15px' }">
                    <template #header>
                      <div class="card-header">
                        <span>{{'Option ' + (i+1)}}</span>
                      </div>
                    </template>
                    <div class="text item">{{ 'Description: ' + o.description }}</div>
                    <div class="text item">{{ 'RRP: ' + o.rrp }}</div>
                  </el-card>
                </el-col>
              </el-row>
            </el-descriptions-item>
            <el-descriptions-item label="Notes" label-class-name="my-label">{{ model.notes.length ===0 ?'': model.notes[0]}}</el-descriptions-item>
          </el-descriptions>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref} from 'vue'
import { Menu as IconMenu, Message, Setting, Van } from '@element-plus/icons-vue'
import useInventory from "~/composables/useInventory";
import useEquipment from "~/composables/useEquipment";

const cachedInventory = await useInventory('inventory');
// inventory list
const res=[];
for (const inventory of cachedInventory.value) {
  let s = inventory.equipment.replaceAll(' ', '_');
  const temp = await useInventory(`${s}`);
  res.push({equipment: inventory.equipment, models: temp.value.Models})
}

// description item
const title = ref(null);
const model = ref(null);
const handleItemClick = async (event) =>{
  const parentPath = event.indexPath[1].replaceAll(' ','_');
  const childIndex = event.index;
  const cachedModel = await useEquipment(parentPath,childIndex);
  title.value = childIndex;
  model.value = cachedModel.value;
  console.log(model.value)
}

// image
const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>

<style scoped>
.margin-top {
  width:100%;
}
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
.card {
  margin-top:15px;
}
.card-header {
  text-align: center;
  width: 100%;
}
:deep(.my-label) {
  width:150px;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
