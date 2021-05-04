import { TestBed } from '@angular/core/testing';

import { Experimental855Service } from './experimental855.service';

describe('Experimental855Service', () => {
  let service: Experimental855Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental855Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
