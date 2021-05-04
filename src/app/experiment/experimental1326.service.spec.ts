import { TestBed } from '@angular/core/testing';

import { Experimental1326Service } from './experimental1326.service';

describe('Experimental1326Service', () => {
  let service: Experimental1326Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1326Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
