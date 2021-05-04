import { TestBed } from '@angular/core/testing';

import { Experimental3846Service } from './experimental3846.service';

describe('Experimental3846Service', () => {
  let service: Experimental3846Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3846Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
