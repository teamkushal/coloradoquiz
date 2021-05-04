import { TestBed } from '@angular/core/testing';

import { Experimental1191Service } from './experimental1191.service';

describe('Experimental1191Service', () => {
  let service: Experimental1191Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1191Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
