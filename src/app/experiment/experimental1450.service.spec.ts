import { TestBed } from '@angular/core/testing';

import { Experimental1450Service } from './experimental1450.service';

describe('Experimental1450Service', () => {
  let service: Experimental1450Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1450Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
