import { TestBed } from '@angular/core/testing';

import { Experimental3858Service } from './experimental3858.service';

describe('Experimental3858Service', () => {
  let service: Experimental3858Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3858Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
