import { TestBed } from '@angular/core/testing';

import { Experimental2896Service } from './experimental2896.service';

describe('Experimental2896Service', () => {
  let service: Experimental2896Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2896Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
