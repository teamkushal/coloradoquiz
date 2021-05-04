import { TestBed } from '@angular/core/testing';

import { Experimental1143Service } from './experimental1143.service';

describe('Experimental1143Service', () => {
  let service: Experimental1143Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1143Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
