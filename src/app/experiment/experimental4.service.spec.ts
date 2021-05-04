import { TestBed } from '@angular/core/testing';

import { Experimental4Service } from './experimental4.service';

describe('Experimental4Service', () => {
  let service: Experimental4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
