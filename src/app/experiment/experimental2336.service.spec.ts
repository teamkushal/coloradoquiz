import { TestBed } from '@angular/core/testing';

import { Experimental2336Service } from './experimental2336.service';

describe('Experimental2336Service', () => {
  let service: Experimental2336Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2336Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
