import { TestBed } from '@angular/core/testing';

import { Experimental1983Service } from './experimental1983.service';

describe('Experimental1983Service', () => {
  let service: Experimental1983Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1983Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
