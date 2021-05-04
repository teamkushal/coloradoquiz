import { TestBed } from '@angular/core/testing';

import { Experimental828Service } from './experimental828.service';

describe('Experimental828Service', () => {
  let service: Experimental828Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental828Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
