import dogBlack from '../../images/dog-black.gif'
import dogBrown from '../../images/dog-brown.gif'
import dogBrownTwo from '../../images/dog-brown-2.gif'
import dogWhite from '../../images/dog-white.gif'
import dogGrey from '../../images/dog-grey.gif'
import * as d3 from 'd3'

let width = window.innerWidth
let height = window.innerHeight
let availableWidth = width

const setAvailableWidth = () => {
  if (767 < width < 1024) {
    availableWidth = 750
  }
  if (1024 < width < 1280) {
    availableWidth = 970
  }
  if (1280 < width) {
    availableWidth = 1170
  }
}

setAvailableWidth()

export const tearDown = () => {
  d3.select('.collision').attr('class', 'collision not-bit')
  d3.select('svg').selectAll('image').remove()
  d3.select('svg').selectAll('circle').remove()
  d3.select('svg').remove()
}

const dragDefinition = (p, attribute, event, border) => {
  return p.attr(attribute, function() {
    if (event <= 0) {
      return 10;
    } else if (event >= border) {
      return border;
    } else {
      return event;
    }
  })
}

export const makeDrag = (player) => {
  return d3.drag()  
           .on('start', function() { player.style('fill', '#94778B') })
           .on('drag', function() { 
              dragDefinition(player, 'cx', d3.event.x, availableWidth)
              dragDefinition(player, 'cy', d3.event.y, height)
            })
           .on('end', function() { player.style('fill', '#54494B') })
}

export const makePlayer = (svg) => {
  return svg.append('circle')
            .attr('cx', '250')
            .attr('cy', '250')
            .attr('fill', 'blue')
            .attr('r', '10')
}

export const makeSVGField = () => {
  return d3.select('#field').append('svg')
          .attr('width', width)
          .attr('height', height - 100)
          .style('background-color', '#EEEEEE');
}

const makeDogList = (dogCount, dogsData) => {
  let dogs = [dogBlack, dogBrown, dogBrownTwo, dogWhite, dogGrey]
  let totalDogs = []
  for(let i = 0; i < dogCount; i++) {
    let ind = Math.floor(Math.random() * dogs.length)
    totalDogs.push({
      data: dogsData[i],
      img: dogs[ind]
    })
  }
  return totalDogs
}
export const makeDataSet = (dogCount, dogData) => {
  dogCount = dogCount || 4
  let dataset = []
  let dogList = makeDogList(dogCount, dogData)
  dogList.forEach((dog, i) => {
    dog.x = Math.floor(Math.random() * availableWidth)
    dog.y = Math.floor(Math.random() * height)
    dataset.push(dog)
  })
  return dataset
}

export const makeDogs = (svg, dataset) => {
  return svg.selectAll('image')
          .data(dataset)
          .enter()
          .append('svg:image')
          .attr('xlink:href', function (d) { return d.img } )
          .attr('width', 150)
          .attr('height', 150)
          .attr('x', function (d) { return d.x })
          .attr('y', function (d) { return d.y })
}

export const moveDogs = (dogs, dataset, player, collisionCallback) => {
  for(let i = 0; i < dataset.length; i++) {
    dataset[i].x = Math.floor(Math.random() * availableWidth)
    dataset[i].y = Math.floor(Math.random() * height)
  }

  dogs.data(dataset)
    .transition()
    .tween('custom', function() {
      let dog = this.__data__
      let endPosX = dog.x
      let startPosX = this.x.animVal.value
      let endPosY = dog.y
      let startPosY = this.y.animVal.value
      let i = d3.interpolate(startPosX, endPosX)
      let j = d3.interpolate(startPosY, endPosY)
      return function(t) {
        if(Math.abs(i(t) - player.attr('cx')) < 30 && Math.abs(j(t) - player.attr('cy')) < 30) {
          d3.select('.collision').attr('class', 'collision bit').text(`Yikes! You got bit by ${dog.data.description_of_dog}`)
          d3.select('#field svg').style('background-color', 'red')
          setTimeout(function () {d3.select('#field svg').style('background-color', '#EEEEEE')}, 2000)
          setTimeout(function () {d3.select('.collision').attr('class', 'collision not-bit').text('')}, 5000)
        }     
      }
    })
    .duration(500)
    .attr('x', function(d){ return d.x })
    .attr('y', function(d) { return d.y })
}
