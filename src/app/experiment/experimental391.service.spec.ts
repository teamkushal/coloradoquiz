import { TestBed } from '@angular/core/testing';

import { Experimental391Service } from './experimental391.service';

describe('Experimental391Service', () => {
  let service: Experimental391Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental391Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
