import { TestBed } from '@angular/core/testing';

import { Experimental3152Service } from './experimental3152.service';

describe('Experimental3152Service', () => {
  let service: Experimental3152Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3152Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
