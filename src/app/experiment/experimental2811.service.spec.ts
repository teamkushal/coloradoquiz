import { TestBed } from '@angular/core/testing';

import { Experimental2811Service } from './experimental2811.service';

describe('Experimental2811Service', () => {
  let service: Experimental2811Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2811Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
