import { TestBed } from '@angular/core/testing';

import { Experimental3434Service } from './experimental3434.service';

describe('Experimental3434Service', () => {
  let service: Experimental3434Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3434Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
