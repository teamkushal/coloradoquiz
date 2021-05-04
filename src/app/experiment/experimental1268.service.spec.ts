import { TestBed } from '@angular/core/testing';

import { Experimental1268Service } from './experimental1268.service';

describe('Experimental1268Service', () => {
  let service: Experimental1268Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1268Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
