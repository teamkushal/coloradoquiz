import { TestBed } from '@angular/core/testing';

import { Experimental1439Service } from './experimental1439.service';

describe('Experimental1439Service', () => {
  let service: Experimental1439Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1439Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
