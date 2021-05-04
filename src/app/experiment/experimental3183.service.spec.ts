import { TestBed } from '@angular/core/testing';

import { Experimental3183Service } from './experimental3183.service';

describe('Experimental3183Service', () => {
  let service: Experimental3183Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3183Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
