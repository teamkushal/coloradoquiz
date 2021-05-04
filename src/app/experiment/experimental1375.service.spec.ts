import { TestBed } from '@angular/core/testing';

import { Experimental1375Service } from './experimental1375.service';

describe('Experimental1375Service', () => {
  let service: Experimental1375Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1375Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
