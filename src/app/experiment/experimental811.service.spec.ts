import { TestBed } from '@angular/core/testing';

import { Experimental811Service } from './experimental811.service';

describe('Experimental811Service', () => {
  let service: Experimental811Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental811Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
