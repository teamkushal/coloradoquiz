import { TestBed } from '@angular/core/testing';

import { Experimental1853Service } from './experimental1853.service';

describe('Experimental1853Service', () => {
  let service: Experimental1853Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1853Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
