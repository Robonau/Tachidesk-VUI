<!-- /*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */ -->
<template>
  <q-btn
    flat
    class="q-ml-sm"
    round
    :class="$q.dark.isActive ? `light` : `dark`"
    icon="filter_list"
    @click="dialo = true"
  >
    <q-tooltip> set category </q-tooltip>
  </q-btn>
  <q-dialog v-model="dialo">
    <q-card>
      <q-card-section class="q-px-xl">
        <div class="text-h5">Set categories</div>
      </q-card-section>
      <q-separator></q-separator>
      <topBcat
        v-for="opt in options"
        :key="opt.id"
        :sele="curr.find((ele) => ele.id == opt.id) != undefined"
        :cat="opt"
      >
      </topBcat>
    </q-card>
  </q-dialog>
  <q-btn
    flat
    round
    :class="$q.dark.isActive ? `light` : `dark`"
    icon="refresh"
    @click="update"
  >
    <q-tooltip> Update Manga </q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import topBcat from 'src/components/manga/TopBcat.vue';
import { cat } from '../global/models';
import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'MangaTopBar',
  components: { topBcat },
  setup() {
    return {
      dialo: ref(false),
      options: ref(<cat[]>[]),
      curr: ref(<cat[]>[]),
      disp: ref([]),
    };
  },
  mounted: function () {
    this.$api
      .get('/api/v1/category/')
      .then(({ data }: AxiosResponse<cat[]>) => {
        this.options = data.slice(1);
      });
    this.$api
      .get(`/api/v1/manga/${this.$route.params['mangaID']}/category/`)
      .then(({ data }: AxiosResponse<cat[]>) => {
        this.curr = data;
      });
  },
  methods: {
    update() {
      this.$bus.emit('updateManga');
    },
  },
});
</script>
