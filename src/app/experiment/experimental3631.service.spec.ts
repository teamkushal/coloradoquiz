import { TestBed } from '@angular/core/testing';

import { Experimental3631Service } from './experimental3631.service';

describe('Experimental3631Service', () => {
  let service: Experimental3631Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3631Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
