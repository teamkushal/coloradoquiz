import { TestBed } from '@angular/core/testing';

import { Experimental1441Service } from './experimental1441.service';

describe('Experimental1441Service', () => {
  let service: Experimental1441Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1441Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
