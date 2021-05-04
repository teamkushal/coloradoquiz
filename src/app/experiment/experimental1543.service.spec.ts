import { TestBed } from '@angular/core/testing';

import { Experimental1543Service } from './experimental1543.service';

describe('Experimental1543Service', () => {
  let service: Experimental1543Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1543Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
