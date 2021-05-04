import { TestBed } from '@angular/core/testing';

import { Experimental172Service } from './experimental172.service';

describe('Experimental172Service', () => {
  let service: Experimental172Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental172Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
