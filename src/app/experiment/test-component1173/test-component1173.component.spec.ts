import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1173Component } from './test-component1173.component';

describe('TestComponent1173Component', () => {
  let component: TestComponent1173Component;
  let fixture: ComponentFixture<TestComponent1173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
