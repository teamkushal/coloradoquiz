import { TestBed } from '@angular/core/testing';

import { Experimental254Service } from './experimental254.service';

describe('Experimental254Service', () => {
  let service: Experimental254Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental254Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
