import { TestBed } from '@angular/core/testing';

import { Experimental1213Service } from './experimental1213.service';

describe('Experimental1213Service', () => {
  let service: Experimental1213Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1213Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
