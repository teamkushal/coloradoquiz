import { TestBed } from '@angular/core/testing';

import { Experimental57Service } from './experimental57.service';

describe('Experimental57Service', () => {
  let service: Experimental57Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental57Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
