import { TestBed } from '@angular/core/testing';

import { Experimental2834Service } from './experimental2834.service';

describe('Experimental2834Service', () => {
  let service: Experimental2834Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2834Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
