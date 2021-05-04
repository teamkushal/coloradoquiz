import { TestBed } from '@angular/core/testing';

import { Experimental253Service } from './experimental253.service';

describe('Experimental253Service', () => {
  let service: Experimental253Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental253Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
