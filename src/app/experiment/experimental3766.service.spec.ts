import { TestBed } from '@angular/core/testing';

import { Experimental3766Service } from './experimental3766.service';

describe('Experimental3766Service', () => {
  let service: Experimental3766Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3766Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
