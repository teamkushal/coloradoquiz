import { TestBed } from '@angular/core/testing';

import { Experimental1344Service } from './experimental1344.service';

describe('Experimental1344Service', () => {
  let service: Experimental1344Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1344Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
