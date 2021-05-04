import { TestBed } from '@angular/core/testing';

import { Experimental3330Service } from './experimental3330.service';

describe('Experimental3330Service', () => {
  let service: Experimental3330Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3330Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
