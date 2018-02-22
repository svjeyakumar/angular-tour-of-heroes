import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/mock-heroes';
import { MessageService } from '../messages/message.service';

// tslint:disable-next-line:label-position
@Injectable()
export class HeroService {
    constructor(private messageService: MessageService) {}

    getHero(id: number): Observable<Hero> {
        // Todo: send the message _after_ fetching the hero
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }

    getAllHeroes() {
        return  of(HEROES);
    }

}
