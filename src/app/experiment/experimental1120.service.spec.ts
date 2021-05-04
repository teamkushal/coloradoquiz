import { TestBed } from '@angular/core/testing';

import { Experimental1120Service } from './experimental1120.service';

describe('Experimental1120Service', () => {
  let service: Experimental1120Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1120Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
