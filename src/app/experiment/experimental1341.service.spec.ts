import { TestBed } from '@angular/core/testing';

import { Experimental1341Service } from './experimental1341.service';

describe('Experimental1341Service', () => {
  let service: Experimental1341Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1341Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
