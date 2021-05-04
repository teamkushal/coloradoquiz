import { TestBed } from '@angular/core/testing';

import { Experimental2905Service } from './experimental2905.service';

describe('Experimental2905Service', () => {
  let service: Experimental2905Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2905Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
