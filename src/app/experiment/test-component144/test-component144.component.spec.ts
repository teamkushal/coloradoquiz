import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent144Component } from './test-component144.component';

describe('TestComponent144Component', () => {
  let component: TestComponent144Component;
  let fixture: ComponentFixture<TestComponent144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
