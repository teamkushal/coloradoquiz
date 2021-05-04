import { TestBed } from '@angular/core/testing';

import { Experimental1070Service } from './experimental1070.service';

describe('Experimental1070Service', () => {
  let service: Experimental1070Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1070Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
