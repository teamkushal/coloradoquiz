import { TestBed } from '@angular/core/testing';

import { Experimental61Service } from './experimental61.service';

describe('Experimental61Service', () => {
  let service: Experimental61Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental61Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
