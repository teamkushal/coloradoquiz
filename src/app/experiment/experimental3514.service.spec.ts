import { TestBed } from '@angular/core/testing';

import { Experimental3514Service } from './experimental3514.service';

describe('Experimental3514Service', () => {
  let service: Experimental3514Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3514Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
