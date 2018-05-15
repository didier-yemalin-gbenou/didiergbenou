import { trigger, transition, animate, style, keyframes, query, stagger, animateChild } from '@angular/animations';


export let bounce = trigger('bounce', [
    transition(':enter', [
        animate(1000, keyframes([
            style({
                    offset: 0,
                    transform: 'translateY(0px)'
                  }),
            style({
                    offset: .2,
                    transform: 'translateY(0px)'
                  }),
            style({
                    offset: .4,
                    transform: 'translateY(-30px)'
                  }),
            style({
                    offset: .43,
                    transform: 'translateY(-30px)'
                  }),
            style({
                    offset: .53,
                    transform: 'translateY(0px)'
                  }),
            style({
                    offset: .7,
                    transform: 'translateY(-15px)'
                  }),
            style({
                    offset: .8,
                    transform: 'translateY(0px)'
                  }),
            style({
                    offset: .9,
                    transform: 'translateY(-4px)'
                  }),
            style({
                    offset: 1,
                    transform: 'translateY(0px)'
                  })

        ]))
    ])
]);

export let slideIn = trigger('slideIn', [
    transition(':enter', [
        query('a', [
            style({ transform: 'translateX(1000px)'}),
            stagger(100, [

                animate('1s 1s'),
                animateChild()
            ]),

        ]),

    ])
]);
