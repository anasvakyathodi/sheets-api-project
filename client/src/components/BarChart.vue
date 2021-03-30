<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["labels", "data"],
  mounted: function() {
    console.log("mounted");
    console.log("labels:", this.labels, "data:", this.data);

    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: this.data,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
