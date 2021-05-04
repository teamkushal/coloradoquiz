import { TestBed } from '@angular/core/testing';

import { Experimental3922Service } from './experimental3922.service';

describe('Experimental3922Service', () => {
  let service: Experimental3922Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3922Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
