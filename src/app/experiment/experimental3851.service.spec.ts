import { TestBed } from '@angular/core/testing';

import { Experimental3851Service } from './experimental3851.service';

describe('Experimental3851Service', () => {
  let service: Experimental3851Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3851Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
