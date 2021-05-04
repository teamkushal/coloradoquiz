import { TestBed } from '@angular/core/testing';

import { Experimental2768Service } from './experimental2768.service';

describe('Experimental2768Service', () => {
  let service: Experimental2768Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2768Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
