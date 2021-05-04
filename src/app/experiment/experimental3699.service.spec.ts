import { TestBed } from '@angular/core/testing';

import { Experimental3699Service } from './experimental3699.service';

describe('Experimental3699Service', () => {
  let service: Experimental3699Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3699Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
