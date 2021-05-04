import { TestBed } from '@angular/core/testing';

import { Experimental985Service } from './experimental985.service';

describe('Experimental985Service', () => {
  let service: Experimental985Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental985Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
