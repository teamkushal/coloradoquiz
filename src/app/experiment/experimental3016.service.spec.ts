import { TestBed } from '@angular/core/testing';

import { Experimental3016Service } from './experimental3016.service';

describe('Experimental3016Service', () => {
  let service: Experimental3016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
