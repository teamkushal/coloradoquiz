import { TestBed } from '@angular/core/testing';

import { Experimental1478Service } from './experimental1478.service';

describe('Experimental1478Service', () => {
  let service: Experimental1478Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1478Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
