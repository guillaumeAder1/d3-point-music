
var anim = {
    name: "toto",
    log: function(){console.log("plpl", this.name, this.container)},
    init: function(params){
        
        this.width = screen.width;
        this.height = screen.height;
        this.container = d3.select('#svg').append('svg')
        .style('width', "100vw")
        .style('height', "100vh");
        this.container.selectAll('circle').data(this.getData()).enter().append('circle')
            .attr('r', function(d){return d.r})
            .attr('cx', function(d){return d.cx})
            .attr('cy', function(d){return d.cy});
        
        this.container.on('click', this.refreshdata.bind(this) );

       // d3.select(this.container).selectAll('circle')
          
    },
    refreshdata: function(){
        this.container.selectAll('circle').remove();
        this.container.selectAll('circle').data(this.getData()).enter().append('circle')
            .attr('r', function(d){return d.r})
            .attr('cx', function(d){return d.cx})
            .attr('cy', function(d){return d.cy});

    },
    getData : function(){
        var nbrDots = getRandomArbitrary(10,50);
        var arr = new Array(nbrDots).fill({});
        return  arr.map(function(element){
            return{
                r: getRandomArbitrary(3,10),
                cx: getRandomArbitrary(0, this.width),
                cy: getRandomArbitrary(0, this.height)
            }
        },this)
       
    }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}