import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent377Component } from './test-component377.component';

describe('TestComponent377Component', () => {
  let component: TestComponent377Component;
  let fixture: ComponentFixture<TestComponent377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent377Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
