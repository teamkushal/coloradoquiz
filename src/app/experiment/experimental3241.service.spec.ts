import { TestBed } from '@angular/core/testing';

import { Experimental3241Service } from './experimental3241.service';

describe('Experimental3241Service', () => {
  let service: Experimental3241Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3241Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
