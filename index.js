
var anim = {
    name: "toto",
    in:1,
    log: function(){console.log("plpl", this.name, this.container)},
    init: function(params){
        
        this.width = params.w || screen.width;
        this.height = params.h || screen.height;
        this.container = d3.select('#svg').append('svg')
        .style('width', "100vw")
        .style('height', "100vh");
        this._data = this.getData(36)
        this.container.selectAll('circle').data(this._data).enter().append('circle')
            .attr('r', function(d){return d.r})
            .attr('cx', function(d){return d.cx})
            .attr('cy', function(d){return d.cy});
        
        this.container.on('click', this.refreshdata.bind(this) );
    },
    refreshdata: function(){
        this.in += 1;      
        this.container.transition().duration(250).style("background-color", (this.in % 2 === 0) ? 'black' : 'white' )
        this.container.selectAll('circle')
        //.data(this.getData(36))
        .transition()
            .duration(250)
            .attr('r', function(d){return d.r})                
                .style('fill', (this.in % 2 === 0 ) ? 'white' : 'black')
                .attr('cx', function(d){return d.cx + getRandomArbitrary(10,150)})
                .attr('cy', function(d){return d.cy + getRandomArbitrary(10,150)});
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