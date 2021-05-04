import { TestBed } from '@angular/core/testing';

import { Experimental293Service } from './experimental293.service';

describe('Experimental293Service', () => {
  let service: Experimental293Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental293Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
