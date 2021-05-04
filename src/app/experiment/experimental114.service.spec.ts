import { TestBed } from '@angular/core/testing';

import { Experimental114Service } from './experimental114.service';

describe('Experimental114Service', () => {
  let service: Experimental114Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental114Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
