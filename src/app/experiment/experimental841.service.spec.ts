import { TestBed } from '@angular/core/testing';

import { Experimental841Service } from './experimental841.service';

describe('Experimental841Service', () => {
  let service: Experimental841Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental841Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
