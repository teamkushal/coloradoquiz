import { TestBed } from '@angular/core/testing';

import { Experimental390Service } from './experimental390.service';

describe('Experimental390Service', () => {
  let service: Experimental390Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental390Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
