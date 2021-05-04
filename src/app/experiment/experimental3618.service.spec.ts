import { TestBed } from '@angular/core/testing';

import { Experimental3618Service } from './experimental3618.service';

describe('Experimental3618Service', () => {
  let service: Experimental3618Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3618Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
