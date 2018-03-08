$('#chartDiv').JSC({
  targetElement: 'cc',
  height:320,
  defaultSeriesType: 'column',

  yAxisLabelText: 'Units Sold',
  xAxisLabelText: 'Quarters',
  titleLabelText: 'Acme Tool Sales Total: %sum Best Seller: %maxSeriesName',
   defaultSeriesLegendEntryText: '%name  %sum' ,
  defaultSeries:{legendEntry:{text:'%name  %sum'}},
  series: [
    {
      name: 'Saw',

      points: [
        { name: 'Q1', y: 230  },
        { name: 'Q2', y: 240  },
        { name: 'Q3', y: 267  },
        { name: 'Q4', y: 238  }
      ]
    },
    {
      name: 'Hammer',

      points: [
        { name: 'Q1', y: 325  },
        { name: 'Q2', y: 367  },
        { name: 'Q3', y: 382  },
        { name: 'Q4', y: 371  }
      ]
    },
    {
      name: 'Grinder',
 
      points: [
        { name: 'Q1', y: 285  },
        { name: 'Q2', y: 292  },
        { name: 'Q3', y: 267  },
        { name: 'Q4', y: 218  }
      ]
    },
    {
      name: 'Drill',
   
      points: [
        { name: 'Q1', y: 185  },
        { name: 'Q2', y: 192  },
        { name: 'Q3', y: 198  },
        { name: 'Q4', y: 248  }
      ]
    }
  ]
});