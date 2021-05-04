import { TestBed } from '@angular/core/testing';

import { Experimental600Service } from './experimental600.service';

describe('Experimental600Service', () => {
  let service: Experimental600Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental600Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
