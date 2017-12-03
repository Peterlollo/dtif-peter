import * as d3 from "d3"
import f from '../../images/freud.png'
import dogBlack from '../../images/dog-black.gif'
import dogBrown from '../../images/dog-brown.gif'
import dogBrownTwo from '../../images/dog-brown-2.gif'
import dogWhite from '../../images/dog-white.gif'
import dogGrey from '../../images/dog-grey.gif'

export const makeSVGField = () => {
  return d3.select('#field').append('svg')
          .attr('width', '500')
          .attr('height', '500')
          .style('background-color', '#EEEEEE');
}


export const makeDataSet = (dataset) => {
  [dogBlack, dogBrown, dogBrownTwo, dogWhite, dogGrey].forEach((dog, i) => {
    let dogData = {}
    dogData.img = dog
    dogData.x = i * 20
    dogData.y = i * 20
    dataset.push(dogData)
  })

  return dataset
}

export const makeDogs = (svg, dataset) => {
  return svg.selectAll("image")
          .data(dataset)
          .enter()
          .append("svg:image")
          .attr("xlink:href", function (d) { return d.img } )
          .attr("width", 150)
          .attr("height", 150)
          .attr("x", function (d) { return d.x })
          .attr("y", function (d) { return d.y })
}

export const moveDogs = (dogs, dataset) => {
  for(let i = 0; i < dataset.length; i++) {
    dataset[i].x += 20
    dataset[i].y += 20
  }

  dogs.data(dataset)
    .transition()
    .tween("custom", function() {
      let endPosX = this.__data__.x
      let startPosX = this.x.animVal.value
      let endPosY = this.__data__.y
      let startPosY = this.y.animVal.value
      let i = d3.interpolate(startPosX, endPosX)
      let j = d3.interpolate(startPosY, endPosY)
        // return function(t) {
        //   if(Math.abs(i(t) - player.attr('cx')) < 20 && Math.abs(j(t) - player.attr('cy')) < 20) {
        //     d3.select('#field svg').style('background-color', 'red');
        //     setTimeout(function() {
        //       resetBoard();
        //     }, 75);
        // };
      })
      .duration(500)
      .attr('x', function(d){ return d.x })
      .attr('y', function(d) { return d.y })
};