import { TestBed } from '@angular/core/testing';

import { Experimental121Service } from './experimental121.service';

describe('Experimental121Service', () => {
  let service: Experimental121Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental121Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
