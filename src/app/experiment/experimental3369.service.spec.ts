import { TestBed } from '@angular/core/testing';

import { Experimental3369Service } from './experimental3369.service';

describe('Experimental3369Service', () => {
  let service: Experimental3369Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3369Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
