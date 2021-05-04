import { TestBed } from '@angular/core/testing';

import { Experimental3355Service } from './experimental3355.service';

describe('Experimental3355Service', () => {
  let service: Experimental3355Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3355Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
