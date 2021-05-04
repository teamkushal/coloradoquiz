import { TestBed } from '@angular/core/testing';

import { Experimental507Service } from './experimental507.service';

describe('Experimental507Service', () => {
  let service: Experimental507Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental507Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
