<template>
  <b-container fluid="sm">
    <div
      class="accordion mt-5"
      role="tablist"
      v-for="(item, key, index) of data"
      v-bind:key="item.key"
    >
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion' + index" variant="info">{{
            key
          }}</b-button>
        </b-card-header>
        <b-collapse
          :id="'accordion' + index"
          :accordion="'accordion' + index"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text
              ><b-list-group v-for="el of item" v-bind:key="el">
                <b-list-group-item button @click="handleClick(el, index)">{{
                  el
                }}</b-list-group-item>
              </b-list-group></b-card-text
            >
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    //const self = this;
    const endpoint = "http://localhost:5000/all";
    axios
      .get(endpoint)
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => console.log(err));
  },
  data() {
    return {
      data: [],
      routes: ["name", "semester", "department"],
    };
  },
  methods: {
    handleClick(item, index) {
      this.$router.push({ name: this.routes[index], params: { value: item } });
    },
  },
};
</script>
