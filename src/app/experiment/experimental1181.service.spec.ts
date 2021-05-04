import { TestBed } from '@angular/core/testing';

import { Experimental1181Service } from './experimental1181.service';

describe('Experimental1181Service', () => {
  let service: Experimental1181Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1181Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
