import { TestBed } from '@angular/core/testing';

import { Experimental352Service } from './experimental352.service';

describe('Experimental352Service', () => {
  let service: Experimental352Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental352Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
