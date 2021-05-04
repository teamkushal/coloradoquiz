import { TestBed } from '@angular/core/testing';

import { Experimental3278Service } from './experimental3278.service';

describe('Experimental3278Service', () => {
  let service: Experimental3278Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3278Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
