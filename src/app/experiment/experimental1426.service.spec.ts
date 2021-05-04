import { TestBed } from '@angular/core/testing';

import { Experimental1426Service } from './experimental1426.service';

describe('Experimental1426Service', () => {
  let service: Experimental1426Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1426Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
