import { TestBed } from '@angular/core/testing';

import { Experimental1551Service } from './experimental1551.service';

describe('Experimental1551Service', () => {
  let service: Experimental1551Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1551Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
