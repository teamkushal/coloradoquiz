import { TestBed } from '@angular/core/testing';

import { Experimental3625Service } from './experimental3625.service';

describe('Experimental3625Service', () => {
  let service: Experimental3625Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3625Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
