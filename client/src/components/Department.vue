<template
  ><div>
    <div class="h3 m-2">Category:Department - {{ input }}</div>
    <b-container fluid="md" class="mt-5">
      <bar-chart
        v-bind:labelData="labels"
        v-bind:realData="chartData"
      ></bar-chart>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import BarChart from "./BarChart";

export default {
  name: "name",
  components: {
    "bar-chart": BarChart,
  },
  mounted() {
    const self = this;
    if (this.$route.params.value) {
      this.input = this.$route.params.value;
    } else {
      this.input = prompt("Please Enter an item from this category");
    }
    const endpoint = `http://localhost:5000/department/${this.input}`;
    axios
      .get(endpoint)
      .then((res) => {
        this.data = res.data;
        const unique = (value, index, self) => {
          return self.indexOf(value) === index;
        };
        console.log(this.data);
        const names = res.data.map((el) => el.name).filter(unique);
        console.log(names);
        this.labels = names;
        const marks = self.findSum(res.data);
        this.chartData = marks;
        console.log(marks);
        console.log(this.labels);
      })
      .catch((err) => console.log(err));
    this.renderChart(this.chartdata, this.options);
  },
  data() {
    return {
      input: undefined,
      chartData: [],
      labels: [],
    };
  },
  methods: {
    findSum(data) {
      var names = this.labels;
      let marks = 0;
      var nameIndex = 0;
      var departmentWiseData = [];
      data.forEach((el) => {
        if (el.name === names[nameIndex]) {
          marks = marks + parseFloat(el.mark);
        } else {
          departmentWiseData.push(marks);
          nameIndex++;
          marks = 0;
        }
      });
      if (names.length === 1) {
        departmentWiseData = [marks];
      }
      return departmentWiseData;
    },
    // combineData(arr1, arr2) {
    //   return arr2.reduce(function(result, field, index) {
    //     result[arr1[index]] = field;
    //     return result;
    //   }, {});
    // },
  },
};
</script>
