import { TestBed } from '@angular/core/testing';

import { Experimental3640Service } from './experimental3640.service';

describe('Experimental3640Service', () => {
  let service: Experimental3640Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3640Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
