import { TestBed } from '@angular/core/testing';

import { Experimental1779Service } from './experimental1779.service';

describe('Experimental1779Service', () => {
  let service: Experimental1779Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1779Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
