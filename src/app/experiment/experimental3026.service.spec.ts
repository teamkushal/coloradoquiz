import { TestBed } from '@angular/core/testing';

import { Experimental3026Service } from './experimental3026.service';

describe('Experimental3026Service', () => {
  let service: Experimental3026Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3026Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
