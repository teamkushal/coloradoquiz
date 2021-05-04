import { TestBed } from '@angular/core/testing';

import { Experimental336Service } from './experimental336.service';

describe('Experimental336Service', () => {
  let service: Experimental336Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental336Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
