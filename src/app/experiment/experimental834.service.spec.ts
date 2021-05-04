import { TestBed } from '@angular/core/testing';

import { Experimental834Service } from './experimental834.service';

describe('Experimental834Service', () => {
  let service: Experimental834Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental834Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
