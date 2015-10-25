var Dashboard = ng
    .Component({
        selector: 'my-dashboard',
        bindings: [HeroService],
        properties:['model']
    })
    .View({
        directives: [ng.NgFor],
        templateUrl: 'src/dashboard.component.html'
    })
    .Class({

        constructor: [HeroService, function(HeroService) {
            this.heroes = HeroService.getHeroes();
            console.log(this.heroes[0].name);

        }]
    });


