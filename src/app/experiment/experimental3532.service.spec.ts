import { TestBed } from '@angular/core/testing';

import { Experimental3532Service } from './experimental3532.service';

describe('Experimental3532Service', () => {
  let service: Experimental3532Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3532Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
