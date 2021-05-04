import { TestBed } from '@angular/core/testing';

import { Experimental1632Service } from './experimental1632.service';

describe('Experimental1632Service', () => {
  let service: Experimental1632Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1632Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
