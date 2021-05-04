import { TestBed } from '@angular/core/testing';

import { Experimental3493Service } from './experimental3493.service';

describe('Experimental3493Service', () => {
  let service: Experimental3493Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3493Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
