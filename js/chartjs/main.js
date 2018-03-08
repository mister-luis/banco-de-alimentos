function makeGraphic(id) {
    var chart;
    var canvas = document.getElementById("grafico" + id);
    var selectType = document.getElementById("selectType" + id);
    var labels = ['a', 'b', 'c', 'd', 'e'];
    var dataGraphic = ({
        type: 'line',
        data:
            {
                labels: labels,
                datasets: [
                    {
                        label: "1",
                        data: [10, 50, 80, 10, 20],
                    }],
            }
    });
    chart = new Chart(canvas, dataGraphic);
    selectType.onchange = function() {  
        var newDataGraphic;

        switch (selectType.value) {
            case "Grafico de pizza":
                chart.destroy();
                newDataGraphic = ({
                    type: 'pie',
                    data:
                        {
                            labels: labels,
                            datasets: [
                                {
                                    label: "1",
                                    data: [10, 50, 80, 10, 20],
                                }],
                        }
                });
                break;
            case "Grafico de barras":
                chart.destroy();
                newDataGraphic = ({
                    type: 'bar',
                    data:
                        {
                            labels: labels,
                            datasets: [
                                {
                                    label: "1",
                                    data: [10, 50, 80, 10, 20],
                                }],
                        }
                });
                break;
            default:
                chart.destroy();
                newDataGraphic = dataGraphic;
                break;
        }

        chart = new Chart(canvas, newDataGraphic);
    }
}