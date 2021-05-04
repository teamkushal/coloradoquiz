import { TestBed } from '@angular/core/testing';

import { Experimental462Service } from './experimental462.service';

describe('Experimental462Service', () => {
  let service: Experimental462Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental462Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
