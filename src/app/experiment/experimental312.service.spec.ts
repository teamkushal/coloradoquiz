import { TestBed } from '@angular/core/testing';

import { Experimental312Service } from './experimental312.service';

describe('Experimental312Service', () => {
  let service: Experimental312Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental312Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
