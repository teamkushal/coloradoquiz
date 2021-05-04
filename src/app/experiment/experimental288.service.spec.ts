import { TestBed } from '@angular/core/testing';

import { Experimental288Service } from './experimental288.service';

describe('Experimental288Service', () => {
  let service: Experimental288Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental288Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
