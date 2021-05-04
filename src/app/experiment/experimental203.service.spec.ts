import { TestBed } from '@angular/core/testing';

import { Experimental203Service } from './experimental203.service';

describe('Experimental203Service', () => {
  let service: Experimental203Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental203Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
