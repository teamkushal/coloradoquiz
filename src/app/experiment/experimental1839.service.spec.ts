import { TestBed } from '@angular/core/testing';

import { Experimental1839Service } from './experimental1839.service';

describe('Experimental1839Service', () => {
  let service: Experimental1839Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1839Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
