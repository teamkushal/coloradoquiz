import { TestBed } from '@angular/core/testing';

import { Experimental1163Service } from './experimental1163.service';

describe('Experimental1163Service', () => {
  let service: Experimental1163Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1163Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
