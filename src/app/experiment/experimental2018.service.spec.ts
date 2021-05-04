import { TestBed } from '@angular/core/testing';

import { Experimental2018Service } from './experimental2018.service';

describe('Experimental2018Service', () => {
  let service: Experimental2018Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2018Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
