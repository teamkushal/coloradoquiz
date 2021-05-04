import { TestBed } from '@angular/core/testing';

import { Experimental1183Service } from './experimental1183.service';

describe('Experimental1183Service', () => {
  let service: Experimental1183Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1183Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
