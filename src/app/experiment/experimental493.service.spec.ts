import { TestBed } from '@angular/core/testing';

import { Experimental493Service } from './experimental493.service';

describe('Experimental493Service', () => {
  let service: Experimental493Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental493Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
