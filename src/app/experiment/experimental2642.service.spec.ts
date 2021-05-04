import { TestBed } from '@angular/core/testing';

import { Experimental2642Service } from './experimental2642.service';

describe('Experimental2642Service', () => {
  let service: Experimental2642Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2642Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
