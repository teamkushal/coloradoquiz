import { TestBed } from '@angular/core/testing';

import { Experimental652Service } from './experimental652.service';

describe('Experimental652Service', () => {
  let service: Experimental652Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental652Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
