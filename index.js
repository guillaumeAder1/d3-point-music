
var anim = {
    name: "toto",
    in:0,
    log: function(){console.log("plpl", this.name, this.container)},
    init: function(params){
        
        this.width = screen.width;
        this.height = screen.height;
        this.container = d3.select('#svg').append('svg')
        .style('width', "100vw")
        .style('height', "100vh");
        this.container.selectAll('circle').data(this.getData(36)).enter().append('circle')
            .attr('r', function(d){return d.r})
            .attr('cx', function(d){return d.cx})
            .attr('cy', function(d){return d.cy});
        
        this.container.on('click', this.refreshdata.bind(this) );

       // d3.select(this.container).selectAll('circle')
          
    },
    refreshdata: function(){
        this.in += 1;
        console.log(this.container);
        this.container.style("background-color", (this.in % 2 === 0) ? 'black' : 'white' )
        this.container.selectAll('circle').data(this.getData(36)).transition()
            .duration(250)
            .attr('r', function(d){return d.r})
                .style('fill', 'red')
    //            .style('fill', (this.in % 2 === 0 ) ? 'white' : 'black')
                .attr('cx', function(d){return d.cx})
                .attr('cy', function(d){return d.cy});
        // generate new points
        // this.container.selectAll('circle').remove();
        // var newval = this.container.selectAll('circle').data(this.getData(36));
        // newval.enter().append('circle')
        //     .attr('r', function(d){return d.r})
        //     .attr('cx', function(d){return d.cx})
        //     .attr('cy', function(d){return d.cy});

    },
    getData : function(val){
        var nbrDots = val || getRandomArbitrary(10,50);
        var arr = new Array(nbrDots).fill({});
        return  arr.map(function(element){
            return{
                r: getRandomArbitrary(3,10),
                cx: getRandomArbitrary(0, this.width),
                cy: getRandomArbitrary(0, this.height)
            }
        },this);       
    }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}