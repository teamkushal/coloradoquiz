import { TestBed } from '@angular/core/testing';

import { Experimental1447Service } from './experimental1447.service';

describe('Experimental1447Service', () => {
  let service: Experimental1447Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1447Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
