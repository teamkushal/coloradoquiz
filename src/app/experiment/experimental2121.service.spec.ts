import { TestBed } from '@angular/core/testing';

import { Experimental2121Service } from './experimental2121.service';

describe('Experimental2121Service', () => {
  let service: Experimental2121Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2121Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
