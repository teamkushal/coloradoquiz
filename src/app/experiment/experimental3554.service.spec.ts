import { TestBed } from '@angular/core/testing';

import { Experimental3554Service } from './experimental3554.service';

describe('Experimental3554Service', () => {
  let service: Experimental3554Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3554Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
