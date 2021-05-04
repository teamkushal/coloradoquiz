import { TestBed } from '@angular/core/testing';

import { Experimental2746Service } from './experimental2746.service';

describe('Experimental2746Service', () => {
  let service: Experimental2746Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2746Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
