import { TestBed } from '@angular/core/testing';

import { Experimental1369Service } from './experimental1369.service';

describe('Experimental1369Service', () => {
  let service: Experimental1369Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1369Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
