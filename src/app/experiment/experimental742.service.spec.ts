import { TestBed } from '@angular/core/testing';

import { Experimental742Service } from './experimental742.service';

describe('Experimental742Service', () => {
  let service: Experimental742Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental742Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
