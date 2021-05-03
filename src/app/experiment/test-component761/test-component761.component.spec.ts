import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent761Component } from './test-component761.component';

describe('TestComponent761Component', () => {
  let component: TestComponent761Component;
  let fixture: ComponentFixture<TestComponent761Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent761Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
