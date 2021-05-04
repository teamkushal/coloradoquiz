import { TestBed } from '@angular/core/testing';

import { Experimental3536Service } from './experimental3536.service';

describe('Experimental3536Service', () => {
  let service: Experimental3536Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3536Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
