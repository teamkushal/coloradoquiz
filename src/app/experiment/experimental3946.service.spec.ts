import { TestBed } from '@angular/core/testing';

import { Experimental3946Service } from './experimental3946.service';

describe('Experimental3946Service', () => {
  let service: Experimental3946Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3946Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
