import { TestBed } from '@angular/core/testing';

import { Experimental1348Service } from './experimental1348.service';

describe('Experimental1348Service', () => {
  let service: Experimental1348Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1348Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
