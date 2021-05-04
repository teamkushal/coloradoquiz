import { TestBed } from '@angular/core/testing';

import { Experimental972Service } from './experimental972.service';

describe('Experimental972Service', () => {
  let service: Experimental972Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental972Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
