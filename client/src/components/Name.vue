<template
  ><div>
    <div class="h3 m-2">Category:Name - {{ input }}</div>
    <b-container fluid="md" class="mt-5">
      <bar-chart
        v-if="chartData.length > 0"
        v-bind:data="chartData"
        v-bind:labels="labels"
      ></bar-chart>
      <div class="mt-5">
        <pie-chart
          v-if="chartData.length > 0"
          v-bind:data="chartData"
          v-bind:labels="labels"
        ></pie-chart>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

export default {
  name: "name",
  components: {
    "bar-chart": BarChart,
    "pie-chart": PieChart,
    //  "sample-chart": SampleChart,
  },
  mounted() {
    const self = this;
    if (this.$route.params.value) {
      this.input = this.$route.params.value;
    } else {
      this.input = prompt("Please Enter an item from this category");
    }
    const endpoint = `http://localhost:5000/name/${this.input}`;
    axios
      .get(endpoint)
      .then((res) => {
        this.data = res.data;
        const sems = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
        this.labels = sems;
        const marks = self.findSum(res.data);
        this.chartData = marks;
        console.log(marks);
      })
      .catch((err) => console.log(err));
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
      var sem = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
      let marks = 0;
      var semIndex = 0;
      var semWiseData = [];
      data.forEach((el) => {
        if (el.semester === sem[semIndex]) {
          marks = marks + parseFloat(el.mark);
        } else {
          semWiseData.push(marks);
          semIndex++;
          marks = 0;
        }
      });
      return semWiseData;
    },
    combineData(arr1, arr2) {
      return arr2.reduce(function(result, field, index) {
        result[arr1[index]] = field;
        return result;
      }, {});
    },
  },
};
</script>
