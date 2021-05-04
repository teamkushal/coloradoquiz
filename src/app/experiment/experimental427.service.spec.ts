import { TestBed } from '@angular/core/testing';

import { Experimental427Service } from './experimental427.service';

describe('Experimental427Service', () => {
  let service: Experimental427Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental427Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
