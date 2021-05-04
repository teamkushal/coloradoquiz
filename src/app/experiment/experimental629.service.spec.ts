import { TestBed } from '@angular/core/testing';

import { Experimental629Service } from './experimental629.service';

describe('Experimental629Service', () => {
  let service: Experimental629Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental629Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
