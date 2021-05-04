import { TestBed } from '@angular/core/testing';

import { Experimental2438Service } from './experimental2438.service';

describe('Experimental2438Service', () => {
  let service: Experimental2438Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2438Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
