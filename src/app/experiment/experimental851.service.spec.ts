import { TestBed } from '@angular/core/testing';

import { Experimental851Service } from './experimental851.service';

describe('Experimental851Service', () => {
  let service: Experimental851Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental851Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
