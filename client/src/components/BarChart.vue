<script>
import { Bar } from "vue-chartjs";

export default {
  mixins: [Bar],
  mounted: function() {
    // Overwriting base render method with actual data.
    console.log(
      "chart values:",
      this.realData,
      "chart labels:",
      this.labelData
    );
    this.renderChart(this.datacollection, this.options);
  },
  props: ["labelData", "realData"],
  data() {
    return {
      datacollection: {
        labels: this.labelData,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: this.realData,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
          mode: "single",
          callbacks: {
            label: function(tooltipItems) {
              return "" + tooltipItems.yLabel;
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200,
      },
    };
  },
};
</script>
