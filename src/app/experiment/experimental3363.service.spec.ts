import { TestBed } from '@angular/core/testing';

import { Experimental3363Service } from './experimental3363.service';

describe('Experimental3363Service', () => {
  let service: Experimental3363Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3363Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
