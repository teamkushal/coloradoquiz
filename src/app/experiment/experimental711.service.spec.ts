import { TestBed } from '@angular/core/testing';

import { Experimental711Service } from './experimental711.service';

describe('Experimental711Service', () => {
  let service: Experimental711Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental711Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
