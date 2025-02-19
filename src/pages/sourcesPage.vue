<!-- /*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */ -->
<template>
  <q-page :style-fn="myTweak">
    <q-list>
      <div v-for="(source, index) in uselist" :key="index">
        <div
          v-if="
            is.deepEqual(
              uselist.find((ele) => ele.lang == source.lang),
              source
            )
          "
          class="text-h4 q-ml-xl q-my-lg"
        >
          {{ langCodeToName(source.lang) }}
        </div>
        <q-intersection style="height: 100px; width: 100%" class="flex-shrink">
          <sourcecard :source="source" @reload="reload"></sourcecard>
        </q-intersection>
      </div>
    </q-list>
    <q-inner-loading
      style="
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
        height: fit-content;
        background-color: transparent;
      "
      :showing="!uselist.length"
      color="primary"
    >
    </q-inner-loading>
  </q-page>
</template>

<script lang="ts">
import { source } from 'src/components/global/models';
import { defineComponent, ref } from 'vue';
import Filters from 'src/components/extantions/Filters';
import sourcecard from 'src/components/sources/sourceCard.vue';
import { is } from 'quasar';
import { langCodeToName } from 'src/components/extantions/language';
import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'SourcesPage',
  components: { sourcecard },
  emits: ['set-title'],
  setup(_props, { emit }) {
    emit('set-title', 'Sources');
    const filters = Filters();
    const langs = ref(filters.langs);
    const list = ref(<source[]>[]);
    return { list, langs, filters, is };
  },
  computed: {
    uselist(): source[] {
      const tmp = this.list.filter((ele) => {
        return this.langs.includes(ele.lang);
      });
      return tmp.sort((a, b) => {
        if (a.lang < b.lang) {
          return 1;
        }
        if (a.lang > b.lang) {
          return -1;
        }
        return 0;
      });
    },
  },
  created: function () {
    this.reload();
  },
  methods: {
    myTweak(offset: number) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : '100vh',
      };
    },
    reload() {
      this.$api
        .get('/api/v1/source/list')
        .then(({ data }: AxiosResponse<source[]>) => {
          this.list = data;
          this.filters.setcurrlangs(this.extractLangs(data));
        });
    },
    langCodeToName,
    extractLangs(lis: source[]): string[] {
      return Array.from(new Set(lis.map((ele) => ele.lang)));
    },
  },
});
</script>
