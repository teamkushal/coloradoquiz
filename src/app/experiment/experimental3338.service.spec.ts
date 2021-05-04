import { TestBed } from '@angular/core/testing';

import { Experimental3338Service } from './experimental3338.service';

describe('Experimental3338Service', () => {
  let service: Experimental3338Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3338Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
