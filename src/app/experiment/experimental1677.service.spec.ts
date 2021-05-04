import { TestBed } from '@angular/core/testing';

import { Experimental1677Service } from './experimental1677.service';

describe('Experimental1677Service', () => {
  let service: Experimental1677Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1677Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
