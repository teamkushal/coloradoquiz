import { TestBed } from '@angular/core/testing';

import { Experimental403Service } from './experimental403.service';

describe('Experimental403Service', () => {
  let service: Experimental403Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental403Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
